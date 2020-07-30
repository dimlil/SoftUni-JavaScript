const fs = require('fs');

fs.unlink('./DB folder/something.js',(err)=>{
    if (err) {
        console.log(err);
    }
    else{
        console.log('File is deleted successfully');
    }
})