import React from 'react';
import './App.css';
// import {Link} from 'react-router-dom'

const ProductPage=(props)=> {
  console.log('Match',props.match);
  console.log('location',props.location);
  console.log('history',props.history);
  const clickHandler=()=>{
    props.history.push('/search')
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Product ID: {props.match.params.product}
        </p>
        <button onClick={clickHandler}>Go to HomePage</button>
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

export default ProductPage;
