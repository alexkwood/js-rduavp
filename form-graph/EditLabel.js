import React from 'react';

export default (props) => {
  const onChange = (event) => {
    props.onPopupEvent(event);
  };
  const onFocus = (event) => event.target.select();

  return (
    <div style={{width: 240, padding: 8}}>
      <textarea autoFocus 
        onChange={onChange} 
        onFocus={onFocus}
        style={{width: '100%', border: 0, height: 40, resize: 'vertical', textAlign: 'center'}}
        defaultValue={(props.element.data || props.element).label} 
      />
    </div>
  );
};