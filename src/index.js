import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import weatherStore from './redux/weatherStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={weatherStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
