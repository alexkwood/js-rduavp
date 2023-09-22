import React from "react";
import { Handle } from "react-flow-renderer";

export default ({ data }) => {
  const nodeStyle = {
    background: 'lightblue',
    borderColor: '#1a192b',
    cursor: 'grab',
    borderRadius: 3,
    borderWidth: 1,
    borderStyle: 'solid',
    color: '#222',
    fontSize: 10,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: 150,
    whiteSpace: 'pre-wrap'
  }

  const handleStyle = {
    borderRadius: '50%'
  }
  
  return (
    <div id={data.id} style={nodeStyle} className="custom-node">
      <Handle type="target" position="top" id={`top-handle-${data.id}`} style={handleStyle} />
      <Handle type="source" position="bottom" id={`bottom-handle-${data.id}`} style={handleStyle} />
      {data.label}
    </div>
  );
};