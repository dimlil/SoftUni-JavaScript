import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import ClassApp from './ClassApp';
import * as serviceWorker from './serviceWorker';

const name='Dimitar';

ReactDOM.render(
  <React.StrictMode>
    <ClassApp name={name} />
    {/*<ClassApp name={name} />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
