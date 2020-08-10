import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import App from './App'
import Search from './Search'
import ProductPage from './ProductPage'
import Logo from './logo.js'

const Navigation=()=>{
return(
    <BrowserRouter>
    <Logo />
        <Route path="/" exact component={App}/>
        <Route path="/search" component={Search}/>
        <Route path="/products/:product" component={ProductPage}/>
    </BrowserRouter>
)
}
export default Navigation