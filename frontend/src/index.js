import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Alert from './components/Alert';
import Waiting from './components/Waiting';

const root = ReactDOM.createRoot(document.getElementById('root'));
const alertRoot = ReactDOM.createRoot(document.getElementById('alert'));
const waitingRoot = ReactDOM.createRoot(document.getElementById('waiting'));

alertRoot.render(<Alert />);

waitingRoot.render(<Waiting />);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
