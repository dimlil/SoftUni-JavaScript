function solve(firstNumber,secondNumer){
    let resultOfFactorating=1;
    let factoryNewFirstNumber=factorating(firstNumber);
    resultOfFactorating=1;
    let factoryNewSecondNumber=factorating(secondNumer);
    let result=factoryNewFirstNumber/factoryNewSecondNumber;
    console.log(result.toFixed(2));
    
    function factorating(num){
        if (num>0) {

            resultOfFactorating*=num;
            return factorating(num-1);
        }
        else{
            return resultOfFactorating;
        }
    }
}
solve(5,2);

