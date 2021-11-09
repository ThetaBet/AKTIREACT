import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * Questo è il file utilizzato da create-react-app per inizializzare sull'elemento con id root l'app.
 * La strictMode è un wrapper che rende la console più verbosa e i controlli sul codice più specifici
 * Dentro alla strictMode, passiamo il nostro componente wrapper, utilizzato per comprendere l'intera app
 * Tale componente è contenuto nel file App.js, ed è importato in pagina con la funzione di import di ES6
 * 
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
