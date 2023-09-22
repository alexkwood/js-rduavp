import React from 'react';
import {Typography} from '@material-ui/core';

export default (props) => {
  const onClick = (event) => {
    props.onPopupEvent(event);
  }

  return (
    <ul style={{listStyle: 'none', padding: 8, margin: 0}}>
      <li> 
        <button value="add-form-node" style={{width: '100%'}} onClick={onClick}> 
          Add Form Node
        </button>
      </li>
      <li>
        <button  value="add-decision-node" style={{width: '100%'}} onClick={onClick}> 
          Add Decision Node
        </button>
      </li>
      <li>
        <button value="add-data-table-node" style={{width: '100%'}} onClick={onClick}> 
          Add Data Table Node
        </button>
      </li>
      <li>
        <button value="add-submission-node"  style={{width: '100%'}} onClick={onClick}> 
          Add Submission Node
        </button>
      </li>
      {props.nodeToCopy ? (
      <li>
        <button value="copy-node"  style={{width: '100%'}} onClick={onClick}> 
          Copy Node
        </button>
      </li>
      ) : props.nodeToPaste ? (
      <li>
        <button value="paste-node"  style={{width: '100%'}} onClick={onClick}> 
          Paste Node
        </button>
      </li>
      ) : ''}
    </ul>
  );
};