import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import App1 from './App1_exercise'
import App2 from './App2_exercise';
import App3 from './App3_exercise';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <hr/>
    <App1/>
    <hr/>
    <App2/>
    <hr/>
    <App3 />
  </React.StrictMode>,
  document.getElementById('root')
);
