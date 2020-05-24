function solve(inputArr) {
    let result = [];
    let sortedArr = inputArr.sort((a, b) => b - a);
    let first = sortedArr.shift();
    result.push(first);
    let lgh = inputArr.length;
    for (let i = 0; i < lgh; i++) {
        if (i % 2 === 0) {
            sortedArr.reverse();
            let big = sortedArr.shift();
            result.push(big);
        } else {
            sortedArr.reverse();
            let small = sortedArr.shift();
            result.push(small);
        }
    }
    console.log(result.join(' '));

}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);