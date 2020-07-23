const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app= express();
app.use(cookieParser());
app.use(session({secret:'softuni-secret-key'},{httpOnly: true},{secure:true}))

app.get('/',(req,res)=>{
    res.cookie('message','Hello auth server')
    res.cookie('sid','c16565132316')

    req.session.userId=1
    req.session.email='dim@abv.bg'

    res.send({
        message: "Hello Auth Server"
    })
})
app.get('/search',(req,res)=>{
    console.log(req.cookies);
    res.send({
        pageMessage: 'index page',
        ...req.cookies,
        session: req.session
    })
})

app.listen(3000,()=>{
    console.log(`Server is up and running`);  
})