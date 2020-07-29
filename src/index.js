import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import ListItem from './hook/Listitem';


ReactDOM.render(
  <React.StrictMode>
     
    {/* <App></App> */}
    <ListItem></ListItem>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
