import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import GithubData from './survices/index'
import MyName from './MyName'
import AuthContex from './contex'

class ClassApp extends Component{

  constructor(props){
    super(props);
    this.state={
      data:{},
      authenticate: true
    }
  }

  getData=async()=>{
    const data=await GithubData()
    this.setState({
      data
    })
  }

  componentDidMount(){
    this.getData()
  }
  changeAuth=()=>{
    this.setState({
      authenticate: !this.state.authenticate
    })
    // console.log(this.state.authenticate);
  }

    render(){
        return (
            <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h6>Class Component</h6>
              <AuthContex.Provider value="this.state.autenticate">
                <MyName name={this.state.data.name}/>
              </AuthContex.Provider>
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <button onClick={this.changeAuth}>Change Auth</button>
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
