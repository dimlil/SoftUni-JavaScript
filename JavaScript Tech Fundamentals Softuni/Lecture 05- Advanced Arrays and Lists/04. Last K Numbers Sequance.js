function solve(n, k) {
    let arr = [1, 1, 2];
    let sum = 0;
    for (let i = 3; i < n; i++) {
        let arr2 = arr.slice(i - k, i);
        arr2.forEach((el) => {
            sum += el;
        })
        arr.push(sum);
        sum = 0;
    }
    console.log(arr.join(' '));

}
solve(6, 3);
solve(8, 2);