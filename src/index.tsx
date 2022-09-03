import './input.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  // eslint-disable-next-line no-undef
  document.getElementById('root') as HTMLElement,
);

root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);

// reportWebVitals();
