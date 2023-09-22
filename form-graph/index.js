import React from 'react';
import { render } from 'react-dom';
import FormGraph from './FormGraph';

export {FromGraph, formData};
export function initReactFlow(elId, data) {
  console.log({elId, data})

  render(<FormGraph formData={data} />, document.getElementById(elId));
}