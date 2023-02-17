import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const devMode = process.env.NODE === 'development';


root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

devMode
  ?
  reportWebVitals(console.log)
  :
  reportWebVitals()// report to analytics
