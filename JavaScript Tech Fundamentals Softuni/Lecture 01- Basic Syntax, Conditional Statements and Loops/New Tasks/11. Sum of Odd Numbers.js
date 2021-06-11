function solve(num) {
    let sum = 0;
    for (let i = 1; i < num * 2; i = i + 2) {
        sum += i;
        console.log(i);
    }
    console.log("Sum: " + sum);
}
solve(2)
solve(6)