import React from "react";
import { Handle } from "react-flow-renderer";

export default ({ data }) => {
  const nodeStyle = {
    position: 'relative',
    minWidth: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 10,
    position: 'relative',
    whiteSpace: 'pre-wrap'
  };

  const handleStyle = {
    borderRadius: '50%'
  }
  
  const svgStyle={
    position: 'absolute',
    zIndex: -1
  }

  return (
    <div id={data.id} style={nodeStyle}>
      <svg style={svgStyle} height="40" viewBox="0 0 100 100">
        <path d="M 50,0 100,50 50,100 0,50 z" stroke="#000" fill="lightpink" strokeWidth="2" />
      </svg>
      <Handle type="target" position="top" id={`top-handle-${data.id}`} style={handleStyle} />
      <Handle type="source" position="bottom" id={`bottom-handle-${data.id}`} style={handleStyle} />
      <div style={{marginTop: 8}}> {data.label}</div>
    </div>
  );
};