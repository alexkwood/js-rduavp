import React, { useState, useEffect, useRef} from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactJson from 'react-json-view'
import ReactFlow, { 
  removeElements, 
  addEdge,
  updateEdge,
  Background,
  Controls,
  isNode,
  isEdge
} from 'react-flow-renderer';
import { Popover } from "@material-ui/core";

import ContextMenu from './ContextMenu';
import EditLabel from './EditLabel';
import NewNodes from './NewNodes';
import ImportExport from './ImportExport';
import StartNode from './node-types/StartNode';
import EndNode from './node-types/EndNode';
import DecisionNode from  './node-types/DecisionNode';
import SubmissionNode from  './node-types/SubmissionNode';
import DataTableNode from './node-types/DataTableNode';
import FormNode from './node-types/FormNode';
import {getAutoArranged} from '../form-data/visjs-to-flow';

const nodeTypes = {
  start: StartNode,
  thankyou: EndNode,
  end: EndNode,
  decision: DecisionNode,
  submission: SubmissionNode,
  dataTable: DataTableNode,
  form: FormNode
}

export default (props) => {
  const graphWrapper = useRef(null);

  const [elements, setElements] = useState(props.formData);
  const [flowInstance, setFlowInstance] = useState(null);
  const [selectedElement, setSelectedElement] = React.useState();
  const [nodeToPaste, setNodeToPaste] = React.useState();
  const [nodeToCopy, setNodeToCopy] = React.useState();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [contextPos, setContextPos] = React.useState(null);

  useEffect(() => {
    setElements(props.formData);
    flowInstance?.fitView();
  }, [props]);

  let doubleClicked;

  const openEditLabel = (domEl, flowEl) => {
    setSelectedElement(flowEl);
    setAnchorEl(domEl);
  };
  const openContextMenu = (pos, nodeToCopy) => {
    setContextPos({top: pos.y, left: pos.x});
    setNodeToCopy(nodeToCopy);
  };

  const handleClose = () => {
    setAnchorEl(undefined);
    setContextPos(undefined);
  };

  const onElementsRemove = (elementsToRemove) => {
    graphWrapper.current.dispatchEvent(new CustomEvent('flowchart', {
      bubbles: true, detail: {type: 'NODES_REMOVED', value: elementsToRemove}
    }));
    setElements((els) => removeElements(elementsToRemove, els));
  };

  const onConnect = (params) => {
    setElements((els) => addEdge(params, els));
     graphWrapper.current.dispatchEvent(new CustomEvent('flowchart', {
      bubbles: true, detail: {type: `EDGE_ADDED`, value: params}
    }));
  };

  const onElementClick = (event, element) => {
    const elType = isEdge(element) ? 'EDGE' : 'NODE';
    const nodeOrEdge = elements.find(el => el.id === element.id);
     graphWrapper.current.dispatchEvent(new CustomEvent('flowchart', {
      bubbles: true, detail: {type: `${elType}_CLICKED`, value: element}
    }));
    if (doubleClicked) {
      openEditLabel(event.target, nodeOrEdge, 'center-center');
      doubleClicked = false;
    } else {
      doubleClicked = Date.now();
    }
    setTimeout(_ => doubleClicked=false, 500);
  };
  
  const onPaneContextMenu = (event) => {
    event.preventDefault();
    const reactFlowBounds = graphWrapper.current.getBoundingClientRect();
    const position = flowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    openContextMenu({x: event.clientX, y: event.clientY});
  }

  const onNodeContextMenu = (event, nodeToCopy) => {
    event.preventDefault();
    openContextMenu({x: event.clientX, y: event.clientY}, nodeToCopy);
  }
  
  const onEdgeUpdate = (oldEdge, newConnection) => {
    setElements((els) => updateEdge(oldEdge, newConnection, els));
     graphWrapper.current.dispatchEvent(new CustomEvent('flowchart', {
      bubbles: true, detail: {type: `EDGE_UPDATED`, value: {oldEdge, newConnection}}
    }));
  };

  const onLoad = (flowInstance) => {
    flowInstance.fitView();
    graphWrapper.current.dispatchEvent(new CustomEvent('flowchart', {
      bubbles: true, detail: {type: `LOADED`, value: flowInstance}
    }));
    setFlowInstance((inst) => flowInstance);

    document.body.addEventListener('dragresize', event => {
      (event.detail === 'resize') && flowInstance.fitView();
    })
  };

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const onDrop = (event) => {
    event.preventDefault();

    const reactFlowBounds = graphWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    const position = flowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    const newNode = {
      id: uuidv4(), type, position,
      data: { label: `${type}` },
    };

    setElements((es) => es.concat(newNode));
  };

  const onPopupEvent = e => {
    if (e.type === 'change') { // label updated
      setElements((els) => {
        const i = els.findIndex(el => selectedElement.id === el.id);
        (els[i].data || els[i]).label = e.target.value;
        return [...els];
      });
      const type = isNode(selectedElement) ? 'NODE_UPDATED' : 'EDGE_UPDATED';
      graphWrapper.current.dispatchEvent(new CustomEvent('flowchart', {
        bubbles: true, detail: {type, value: selectedElement}
      }));
    } else if (e.type === 'click') {
      const eTypeMap = {
        'add-form-node': 'form',
        'add-decision-node': 'decision',
        'add-submission-node': 'submission',
        'add-data-table-node': 'dataTable'
      };
      const newNodeType = eTypeMap[e.target.value];
      const reactFlowBounds = graphWrapper.current.getBoundingClientRect();
      const position = flowInstance.project({
        x: e.clientX - reactFlowBounds.left,
        y: e.clientY - reactFlowBounds.top,
      });

      if (newNodeType) {
        const newNode = {
          id: uuidv4(), 
          type: newNodeType,
          position,
          data: { label: `New ${newNodeType}` },
        };
        setElements((es) => es.concat(newNode));
      } else if (e.target.value === 'copy-node') {
        setNodeToPaste(nodeToCopy);
      } else if (e.target.value === 'paste-node') {
        const newNode = {...nodeToPaste, ...{id: uuidv4()}, position };
        setElements((es) => es.concat(newNode));
      }
      setContextPos(null);
      setAnchorEl(undefined);
    }
  }

  const autoArrange = () => {
    const newElements = getAutoArranged(elements);
    setElements(newElements);
    flowInstance.fitView();
  }

  return (
    <div style={{ height: '100%'}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <NewNodes />
        <ImportExport flowInstance={flowInstance} setElements={setElements}/>
        <button onClick={autoArrange}>Auto Arrange</button>
      </div>
      <div className="graph" ref={graphWrapper}>
        <ReactFlow
          minZoom={0.05}
          maxZoom={1.5}
          elements={elements}
          nodeTypes={nodeTypes}
          zoomOnDoubleClick={false}
          onLoad={onLoad}
          onElementsRemove={onElementsRemove}
          onNodeContextMenu={onNodeContextMenu}
          onElementClick={onElementClick}
          onConnect={onConnect}
          onEdgeUpdate={onEdgeUpdate}
          onPaneContextMenu={onPaneContextMenu}
          onDrop={onDrop}
          onDragOver={onDragOver}
          deleteKeyCode={8} /* 'delete'-key */ > 
          <Background />
          <Controls />
        </ReactFlow>
        <ReactJson name="elements" src={elements} collapsed={true} />
        <Popover open={!!anchorEl}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{vertical: 'center', horizontal: 'center'}}
          transformOrigin={{vertical: 'center', horizontal: 'center'}}>
          <EditLabel onPopupEvent={onPopupEvent} element={selectedElement} />
        </Popover>
        <Popover 
          open={!!contextPos}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={contextPos}
          anchorOrigin={{vertical: 'top', horizontal: 'left'}}
          transformOrigin={{vertical: 'center', horizontal: 'left'}}>
          <ContextMenu onPopupEvent={onPopupEvent} 
            nodeToPaste={nodeToPaste}
            nodeToCopy={nodeToCopy}/>
        </Popover>
      </div>

    </div>
  );
};