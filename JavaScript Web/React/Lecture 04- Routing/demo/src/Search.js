import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Search() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Search Page
        </p>
        <Link to="/">Go to home</Link>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Search;
