import React from "react"

class Input extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value:""
        }
    }
    updateValue=(event)=>{
        this.setState({
            value:event.target.value
        })
    }

    render(){
        return(
            <div>
            <input onChange={this.updateValue}/>
            <p>{this.state.value}</p>
            </div>
        )
    }
}

export default Input