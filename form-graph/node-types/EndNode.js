import React from "react";
import { Handle } from "react-flow-renderer";

export default ({ data }) => {
  const nodeStyle = {
    position: 'relative',
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 10,
    position: 'relative',
  };

  const triangleStyle = {
    position: 'absolute',
    width: 0,
    height: 0,
    border: '32px solid transparent',
    borderTopColor: '#CCC',
    zIndex: -1
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
        <path d="M 0,1 100,1 50,100 z" stroke="#000" fill="#FFF" strokeWidth="2" />
      </svg>
      <Handle type="target" position="top" id={`top-handle-${data.id}`} style={handleStyle} />
      <div style={{marginTop: 8}}> {data.label}</div>
    </div>
  );
};