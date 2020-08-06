import React from 'react'
import styles from './my-name.module.css'
import IsAuth from "./IsAuth"

class MyName extends React.Component{
    render(){
        if(!this.props.name){
            return(
                <span>
                    Loading...
                </span>
            )
        }
        return(
            <div>
                <h1 className={styles.redColor}>My Name is {this.props.name}</h1>
                <IsAuth />
            </div>
        )
    }
}

export default MyName