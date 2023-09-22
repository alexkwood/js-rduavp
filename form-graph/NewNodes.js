import React from 'react';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="node-types">
      You can drag these nodes.

      <div draggable onDragStart={(event) => onDragStart(event, 'form')}>
        <div style={{borderRadius: 4, border: '1px solid #333', padding: '0 8px', lineHeight: '40px', width: 60, height: 40, background: 'lightblue'}}>
        </div>
      </div>

      <div draggable onDragStart={(event) => onDragStart(event, 'dataTable')}>
        <div style={{borderRadius: 4, border: '1px solid #333', padding: '0 8px', lineHeight: '40px', width: 60, height: 40, background: 'lightgreen'}}>
        </div>
      </div>

      <div draggable onDragStart={(event) => onDragStart(event, 'decision')}>
        <svg height="40" viewBox="0 0 100 100">
          <path d="M 50,0 100,50 50,100 0,50 z" stroke="#000" fill="lightpink" strokeWidth="2" />
        </svg>
      </div>

      <div draggable onDragStart={(event) => onDragStart(event, 'submission')}>
        <svg height="40" viewBox="0 0 200 100">
          <ellipse cx="100" cy="50" rx="95" ry="48" fill="#CBC3E3" stroke="#333" strokeWidth="2" />
        </svg>
      </div>

    </div>
  );
};