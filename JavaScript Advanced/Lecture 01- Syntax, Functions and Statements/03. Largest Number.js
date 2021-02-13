function solve(a, b, c) {
    if (a > b && a > c) {
        console.log(`The largest number is ${a}.`);
    }
    if (b > a && b > c) {
        console.log(`The largest number is ${b}.`);
    } 
    if (c > a && c > b)  {
        console.log(`The largest number is ${c}.`);
    }
}
solve(5, 4, 3);