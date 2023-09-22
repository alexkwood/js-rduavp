
import dagre from 'dagre';
import { v4 as uuidv4 } from 'uuid';
import { isNode } from 'react-flow-renderer';

const getAutoArranged = (elements, direction = 'TB') => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  // In order to keep this example simple the node width and height are hardcoded.
  // In a real world app you would use the correct width and height values of
  // const nodes = useStoreState(state => state.nodes) and then node.__rf.width, node.__rf.height
  const nodeWidth = 172;
  const nodeHeight = 36;

  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });

  elements.forEach((el) => {
    if (isNode(el)) {
      dagreGraph.setNode(el.id, { width: nodeWidth, height: nodeHeight });
    } else {
      dagreGraph.setEdge(el.source, el.target);
    }
  });

  dagre.layout(dagreGraph);

  return elements.map((el) => {
    if (isNode(el)) {
      const nodeWithPosition = dagreGraph.node(el.id);
      el.targetPosition = isHorizontal ? 'left' : 'top';
      el.sourcePosition = isHorizontal ? 'right' : 'bottom';

      // unfortunately we need this little hack to pass a slightly different position
      // to notify react flow about the change. Moreover we are shifting the dagre node position
      // (anchor=center center) to the top left so it matches the react flow node anchor point (top left).
      el.position = {
        x: nodeWithPosition.x - nodeWidth / 2 + Math.random() / 1000,
        y: nodeWithPosition.y - nodeHeight / 2,
      };
    }

    return el;
  });
};

export default function(data) {
  const elements = [];
  
  (data.nodes||[]).forEach(node => {
    const type = (node.type || 'form').replace('Node', '');
    elements.push({
      id: node.id,
      type,
      data: {
        label: node.label
      },
      position: {x: 0, y: 0}
    });
  });

  (data.edges||[]).forEach(node => {
    elements.push({
      id: uuidv4(), 
      source: node.from, 
      target: node.to
    })
  });

  return {elements : getAutoArranged(elements)};
}

export {getAutoArranged};
