import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Plugin from './components/Plugin';

const rootEle = document.getElementById('root');

if(rootEle){
  ReactDOM.createRoot(rootEle).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const pluginEle = document.getElementById('plugin');

if(pluginEle){
  let ownerKey = pluginEle.getAttribute('owner');
  ReactDOM.createRoot(pluginEle).render(
    <React.StrictMode>
      <Plugin owner={ownerKey} />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
