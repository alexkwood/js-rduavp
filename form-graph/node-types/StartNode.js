import React from "react";
import { Handle } from "react-flow-renderer";

export default ({ data }) => {
  const nodeStyle = {
    backgroundColor: '#FFF',
    borderRadius: '50%',
    border: '1px solid #333',
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 10
  };

  const handleStyle = {
    borderRadius: '50%'
  }

  return (
    <div id={data.id} style={nodeStyle} className="custom-node">
      <Handle type="source" position="bottom" id={`bottom-handle-${data.id}`} style={handleStyle} />
      {data.label}
    </div>
  );
};