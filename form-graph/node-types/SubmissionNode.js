import React from "react";
import { Handle } from "react-flow-renderer";

export default ({ data }) => {
  const nodeStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 10,
    position: 'relative',
    minHeight: 40,
    minWidth: 150,
    maxWidth: 200,
    whiteSpace: 'pre-wrap',
    background: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Cellipse cx='100' cy='50' rx='95' ry='48' fill='%23CBC3E3' stroke='%23333' stroke-width='1' /%3E%3C/svg%3E") no-repeat center center`
  };

  const svgStyle={
    position: 'absolute',
    zIndex: -1,
    inset: '0 0 0 0'
  }

  const handleStyle = {
    borderRadius: '50%'
  }

  return (
    <div id={data.id} style={nodeStyle}>
      <Handle type="target" position="top" id={`top-handle-${data.id}`} style={handleStyle} />
      <Handle type="source" position="bottom" id={`bottom-handle-${data.id}`} style={handleStyle} />
      <div style={{padding: '12px 48px', textAlign: 'center'}}>{data.label}</div>
    </div>
  );
};




