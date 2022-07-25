import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App14 from './14장/App14';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App14 />
  </BrowserRouter>,
);
