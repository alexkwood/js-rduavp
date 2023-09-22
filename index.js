// Import stylesheets
import "@fortawesome/fontawesome-free/css/all.min.css";
import './style.scss';
import './resize-handle.js';

import {initReactFlow}  from './form-graph';
import flowData from './form-data/flow-data';
import visjsData from './form-data/visjs-data';
import visjsToFlow from './form-data/visjs-to-flow';

const $ = document.querySelector.bind(document);
initReactFlow('form-graph', flowData.elements);

//
// event listeners
//
document.body.addEventListener('flowchart', event => {
  $('#message').innerText = JSON.stringify(event.detail, null, '  ')
});

document.body.addEventListener('dragresize', event => {
  const w = $('#preview-container').offsetWidth;
  const size = 
    w <= 480 ? 'mobile' : 
    w <= 768 ? 'tablet' :
    w <= 1200 ? 'desktop' : 'big-screen';
  $('#preview-container').classList.remove('big-screen', 'desktop', 'tablet', 'mobile');
  $('#preview-container').classList.add(size);
});

$('#load-visjs-data').addEventListener('click', event => {
  const data = visjsToFlow(visjsData);
  initReactFlow('form-graph', data.elements);
});
