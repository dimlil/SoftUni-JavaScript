let myArr = [7, 5, 1, 13, 20];
let moreNumbers = [6, 10, 15, 20, 30, 44, 66];

// let result = myArr.reduce(sumReducer, 0);
let result = myArr.reduce((acc, curr) => { return acc + curr }, 0);
let average = myArr.reduce((acc, curr, i, a) => { return acc + curr / a.length }, 0);
// let max = myArr.reduce((acc, curr, i, a) => { return Math.max(acc,curr) });
let max = myArr.reduce((acc, curr, i, a) => { return acc > curr ? acc : curr });

console.log(result);
console.log(average);
console.log(max);

function sumReducer(acc, curr) {
    return acc + curr;
}