import React from 'react';
import logo from './logo.svg';
import './App.css';
import LearnReact from './LearnReact'
import Code from './Code'

function renderResult(a,b){
  return a+b;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <Code>src/App.js</Code> and save to reload.
        </p>
        <p>
          Hello World
        </p>
        <p>
          Result: {renderResult(1,2)}
        </p>
        <p>
          Result: {renderResult(5,2)}
        </p>
        <LearnReact />
      </header>
    </div>
  );
}

export default App;
