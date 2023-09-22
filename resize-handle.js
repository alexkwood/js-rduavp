const $ = document.querySelector.bind(document);
const css = `
  resize-handle { position: absolute; }
  resize-handle:after { content: ' '; display: block; width: 12px; height: 12px; opacity: .5; }
  resize-handle:hover:after { width: 16px; height: 16px; opacity: 1; }

  resize-handle[top][left] { top: 1px; left: 1px; cursor: nw-resize; }
  resize-handle[top][left]:after {
    background: linear-gradient( -45deg, #0000, #0000 60%, #000 60%, #000, #0000, #0000 70%, #000 70%, #000, #0000, #0000 80%, #000 80%, #000, #0000, #0000 90%, #000 90%, #000 )
  }

  resize-handle[top][right] { top: 1px; right: 1px; cursor: ne-resize; }
  resize-handle[top][right]:after {
    background: linear-gradient( 45deg, #0000, #0000 60%, #000 60%, #000, #0000, #0000 70%, #000 70%, #000, #0000, #0000 80%, #000 80%, #000, #0000, #0000 90%, #000 90%, #000 )
  }

  resize-handle[bottom][left] { bottom: 1px; left: 1px; cursor: sw-resize; }
  resize-handle[bottom][left]:after {
    background: linear-gradient( 45deg, #000 10%, #000, #0000, #0000 20%, #000 20%, #000, #0000, #0000 30%, #000 30%, #000, #0000, #0000 40%, #000 40%, #000, #0000, #0000 50% )
  }

  resize-handle[bottom][right] { bottom: 1px; right: 1px; cursor: se-resize; }
  resize-handle[bottom][right]:after {
    background: linear-gradient( -45deg, #000 10%, #000, #0000, #0000 20%, #000 20%, #000, #0000, #0000 30%, #000 30%, #000, #0000, #0000 40%, #000 40%, #000, #0000, #0000 50% )
  }`;

export function addCss(el, css) {
  const tagName = el.tagName.toLowerCase();
  if (!$(`style[${tagName}]`)) {
    const styleEl = document.createElement('style');
    styleEl.setAttribute(tagName,'');
    styleEl.appendChild(document.createTextNode(css));
    document.head.appendChild(styleEl);
  }
}

export function removeCss(el) {
  const tagName = el.tagName.toLowerCase();
  const numXElements = document.body.querySelectorAll(`${tagName}`).length;
  const styleEl = $(`style[${tagName}]`);
  (styleEl && numXElements < 1) && $(`style[${tagName}]`).remove();
}

export class ResizeHandle extends HTMLElement {
  constructor(...args) {
    const self = super(...args);
    this.s = {};// start properties
    this.resizeFn = this.resize.bind(this);
    this.endResizeFn = this.endResize.bind(this);
    return self;
  }

  connectedCallback() {
    // check if parent position is relative or absolute.
    this.left = this.getAttribute('left') !== null;
    this.right = this.getAttribute('right') !== null;
    this.top = this.getAttribute('top') !== null;
    this.bottom = this.getAttribute('bottom') !== null;
    this.single = this.getAttribute('single') !== null;
    this.resizeEl = this.parentElement;
    this.containerEl = this.resizeEl.parentElement;

    addCss(this, css);
    this.addEventListener('mousedown', event => {
      this.startResize(event);
      const body = document.body;
      body.addEventListener('mousemove', this.resizeFn);
      body.addEventListener('mouseup', this.endResizeFn);
      body.addEventListener('mouseleave', this.endResizeFn);
    });
  }

  disconnectedCallback() {
    removeCss(this);
  }

  startResize(event) {
    document.body.style.userSelect = 'none';

    const rbcr = this.resizeEl.getBoundingClientRect();
    this.s.x = event.screenX;
    this.s.y = event.screenY;
    this.s.w = rbcr.width;
    this.s.h = rbcr.height;

    this.s.sibling = this.bottom ?  // bottom or top
      this.resizeEl.nextElementSibling: this.resizeEl.previousElementSibling;

    if (this.s.sibling) {
      const sbcr = this.s.sibling.getBoundingClientRect();
      [this.s.siblingW, this.s.siblingH] = [sbcr.width, sbcr.height];
    }

    this.containerEl = this.resizeEl.parentElement;
    if (this.containerEl) {
      this.s.containerSibling = this.right ? // right or left
        this.containerEl.nextElementSibling : this.containerEl.previousElementSibling;
      this.s.containerW = this.containerEl.getBoundingClientRect().width;
      this.s.containerSiblingW = this.s.containerSibling?.getBoundingClientRect().width;
    }

    this.dispatchEvent(new CustomEvent('dragresize', { bubbles: true, detail: 'start'}));
  }

  resize(event) {
    let dx = event.screenX - this.s.x;
    let dy = event.screenY - this.s.y;
    this.left && (dx = -dx);
    this.top && (dy =-dy);

    if (this.containerEl && !this.single) {
      // update my width / height
      this.resizeEl.style.width = '100%';
      this.resizeEl.style.height = Math.max(this.s.h + dy, 32) + 'px';
      
      // update my sibling width / height
      if (this.s.sibling) {
        this.s.sibling.style.width = '100%';
        this.s.sibling.style.height = Math.max(this.s.siblingH - dy, 32) + 'px';
      }

      // update container(sibling) width / height
      this.containerEl.style.width = (this.s.containerW + dx) + 'px';
      if (this.s.containerSibling) {
        this.s.containerSibling.style.width = (this.s.containerSiblingW - dx) + 'px';
      }
    } else { // this.single
      this.resizeEl.style.width = Math.max(this.s.w + dx, 64) + 'px';
      this.resizeEl.style.height = Math.max(this.s.h + dy, 32) + 'px';
    }

    this.dispatchEvent(new CustomEvent('dragresize', { bubbles: true, detail: 'resize'}));
  }

  endResize(event) {
    document.body.style.userSelect = 'auto';
    document.body.removeEventListener('mousemove', this.resizeFn);
    this.dispatchEvent(new CustomEvent('dragresize', { bubbles: true, detail: 'end'}));
  }
}

if (!customElements.get('resize-handle')) {
  customElements.define('resize-handle', ResizeHandle);
}