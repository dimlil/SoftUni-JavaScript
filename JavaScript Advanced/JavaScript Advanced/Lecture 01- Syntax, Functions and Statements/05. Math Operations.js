function solve(a, b, operator) {
    if (operator == '+') {
        console.log(a + b);
    }
    if (operator == '-') {
        console.log(a - b);
    }
    if (operator == '*') {
        console.log(a * b);
    }
    if (operator == '/') {
        console.log(a / b);
    }
    if (operator == '%') {
        console.log(a % b);
    }
    if (operator == '**') {
        console.log(a ** b);
    }
}
solve(1, 2, "+")