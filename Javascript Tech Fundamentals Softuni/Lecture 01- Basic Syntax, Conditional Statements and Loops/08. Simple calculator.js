function main(firstOperant, operator, secondOperand) {
    let result;
    if (operator === '+') {
        result = firstOperant + secondOperand;
    } else {
        if (operator === '-') {
            result = firstOperant - secondOperand;
        }
    }
    console.log(result.toFixed(2));

}
main(3, '+', 5)