import React from 'react'

class Counter extends React.Component {
    constructor(props){
        super();
        this.state={
            counter: props.counter
        }
    }
    updateCounter=()=>{
      this.setState({
        counter: this.state.counter+1
      })
    }

    render() {
        return (
            <div>
                <p>Counter: {this.state.counter}</p>
                <button onClick={this.updateCounter}>Click me</button>
            </div>
        )
    }
}

export default Counter