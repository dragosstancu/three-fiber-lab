import './index.css';
import ReactDOM from 'react-dom'
import React from 'react'
import Scene from './Scene';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Scene />,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// reportWebVitals(console.log);
