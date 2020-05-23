function solve(num1,num2,num3) {
    let result=0;
    result=sum(num1,num2);
    result=subtract(result,num3);
    console.log(result)
    
    function sum(a,b) {
        return a+b;
    }
    function subtract(a,b) {
        return a-b;
    }
}

solve(23,6,10);