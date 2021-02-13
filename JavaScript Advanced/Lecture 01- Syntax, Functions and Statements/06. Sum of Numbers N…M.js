function solve(n, m) {
    let result = 0;
    n = +n;
    m = +m;
    for (let i = n; i <= m; i++) {
        result += i;
    }
    console.log(result);
}
solve('1', '5')