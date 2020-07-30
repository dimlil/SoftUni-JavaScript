const fs = require('fs');

fs.rename('./new-folder','DB folder',(err)=>{
    console.log(err);
});