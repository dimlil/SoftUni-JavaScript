function calcolator(firstNum,secondNum,operate){
    if(operate=='add'){
        console.log(sum());
    }
    if(operate=='multiply'){
        console.log(multiply());
    }
    if(operate=='divide'){
        console.log(devision());
    }
    if(operate=='subtract'){
        console.log(substract());
    }
    function sum() {
        return  firstNum+secondNum;
    }
    function substract() {
        return  firstNum-secondNum;
    }
    function multiply() {
        return  firstNum*secondNum;
    }
    function devision() {
        return  firstNum/secondNum;
    }
}