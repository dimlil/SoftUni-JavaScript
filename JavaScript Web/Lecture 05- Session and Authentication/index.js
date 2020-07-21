const express = require('express');
const cookieParser = require('cookie-parser');

const app= express();

app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send({
        message: "Hello Auth Server"
    })
})

app.listen(3000,()=>{
    console.log(`Server is up and running`);  
})