import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

/*
    You can set a default (or configuration) for all axios requests
*/

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

/*  all axios requests pass through this interceptor first
    You must return the request or you will block requests
    since this is a "pass through function".  If you want,
    you can add things to the request.
*/
axios.interceptors.request.use(request => {
  console.log('request: ', request);
  return request;
}, error => {
  console.log('error request: ', error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  console.log('response: ', response);
  return response;
}, error => {
  console.log('error response: ', error);
  return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
