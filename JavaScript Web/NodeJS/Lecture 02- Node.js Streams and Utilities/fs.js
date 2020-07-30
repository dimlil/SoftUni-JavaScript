const fs = require('fs');
const { log } = require('console');

console.log('First Log');
fs.readFile('./dataStorage.txt',"utf-8",(err,data)=>{
    if (err) {
        console.log(err);
        return
    }
    else{
        console.log('Async ',data);
    }
})
console.log('Second Log');
console.log();
console.log('First Log');
const file=fs.readFileSync('./dataStorage.txt','utf-8');
console.log('Sync ',file);
console.log('Second Log');