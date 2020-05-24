function solve(inputArr) {
    inputArr = inputArr.reverse();
    for (let i = 0; i < inputArr.length; i++) {
        for (let j = i + 1; j < inputArr.length; j++) {
            if (inputArr[i] === inputArr[j]) {
                inputArr.splice(inputArr.indexOf(inputArr[j]), 1);
            }
        }
    }
    inputArr = inputArr.reverse();
    console.log(inputArr.join(' '));
}
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);
solve([20, 8, 12, 13, 4, 4, 8, 5]);