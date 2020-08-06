import React from 'react'
import AuthContex from './contex'

class IsAuth extends React.Component{
    static contextType=AuthContex
    render(){
        console.log(this.context);
        if (this.context) {
            return (<p>is auth</p>)
        }
        if(!this.context){
        return (<p>is not auth</p>)
    }
    }
}
export default IsAuth;