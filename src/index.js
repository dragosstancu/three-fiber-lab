import './index.css';
import ReactDOM from 'react-dom'
import React from 'react'
import Scene from './Scene';
import { Canvas } from '@react-three/fiber'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Canvas camera={{
    type: 'PerspectiveCamera',
    aspect: window.innerWidth / window.innerHeight,
    near: 0.1,
    far: 1000
  }}>
    <directionalLight color="0xffffff" intensity={0.7} />
    <ambientLight color="0xffffff" intensity={0.2} />
    <Scene />
  </Canvas>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// reportWebVitals(console.log);
