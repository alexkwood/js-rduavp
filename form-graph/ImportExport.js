import React from 'react';

async function getJsonFromFile() {
  const pickerOpts = {
    types: [{description: 'Flow Data',accept: {'application/json': ['.json']}}],
    excludeAcceptAllOption: true,
    multiple: false
  };
  const [fileHandle] = await window.showOpenFilePicker(pickerOpts);
  return await fileHandle.getFile();
}


export default ({flowInstance, setElements}) => {

  const doExport = (event) => {
    var element = document.createElement('a');
    const flowData = flowInstance.toObject();
    const json = encodeURIComponent(JSON.stringify(flowData, null, '  '));

    element.setAttribute('href', `data:text/plain;charset=utf-8,${json}`);
    element.setAttribute('download', 'flow-data.json');
    element.style.display = 'none';

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  const doImport = async (event) => {
    const pickerOpts = {
      types: [{description: 'Flow Data',accept: {'application/json': ['.json']}}],
      excludeAcceptAllOption: true,
      multiple: false
    };
    const [fileHandle] = await window.showOpenFilePicker(pickerOpts);
    if (fileHandle) {
      const file = await fileHandle.getFile();

      const jsonData = await file.text();
      const importData = JSON.parse(jsonData);
      console.info('imorting flowData', importData)
      setElements(els => importData.elements);
    }
  }

  return (
    <div className="import-export">
      <button id="import-btn" title="import" onClick={doImport}>
        <i className="fas fa-download"></i>
      </button>
      <button id="export-btn" title="export" onClick={doExport}>
        <i className="fa-solid fa-upload"></i>
      </button>
    </div>
  );
};
