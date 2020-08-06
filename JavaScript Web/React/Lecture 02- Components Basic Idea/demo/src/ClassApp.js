import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import Input from './Input'

class ClassApp extends Component{
  constructor(props){
    super(props);
    this.state={
        flag:true
    }
}

    hideCounters=()=>{
      this.setState({
        flag:!this.state.flag
      })
    }
    render(){
        return (
            <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h6>Class Component</h6>
              <Input />
              <Counter counter={0}/>
              <Counter counter={10}/>
              <Counter counter={20}/>



              <button onClick={this.hideCounters}>Hide</button>

              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <p>My name is {this.props.name}</p>
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
        )
    }
}

export default ClassApp;
