function solve(firstOperant,operator,secondOperant) {
    let result=0;
    if (operator==='+') {
        result=firstOperant+secondOperant;
        console.log(result.toFixed(2));
    } else {
        if (operator==='-'){
            result=firstOperant-secondOperant;
            console.log(result.toFixed(2));
        }
        else {
            if (operator==='*'){
                result=firstOperant*secondOperant;
                console.log(result.toFixed(2));
            }
            else{
                result=firstOperant/secondOperant;
                console.log(result.toFixed(2));
            }
        }
    }
}
solve(5,'+',10)