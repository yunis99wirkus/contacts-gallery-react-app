import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import App1 from './App1_exercise'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <hr/>
    <App1/>
  </React.StrictMode>,
  document.getElementById('root')
);
