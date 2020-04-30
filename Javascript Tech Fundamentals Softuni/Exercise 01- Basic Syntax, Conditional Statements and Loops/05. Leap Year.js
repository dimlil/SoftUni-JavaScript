function solve(input){
    input=Number(input);
    if (input%4===0&&input%100!==0||input%400===0) {
        console.log('yes');
    }
    else{
        console.log('no');
    }
}
solve('2303');