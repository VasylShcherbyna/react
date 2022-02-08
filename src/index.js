import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/Store';
import { Provider } from 'react-redux';

console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

