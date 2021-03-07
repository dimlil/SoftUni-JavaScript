function solve(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    let t;
    while (y) {
        t = y;
        y = x % y;
        x = t;
    }
    console.log(x);
}
solve(15, 5);
solve(2154, 458);