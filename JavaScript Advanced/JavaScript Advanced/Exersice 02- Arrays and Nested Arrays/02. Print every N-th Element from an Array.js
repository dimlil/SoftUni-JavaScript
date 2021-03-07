function solve(arrOfStrings, number) {
    let result = [];
    for (let i = 0; i < arrOfStrings.length; i = i + number) {
        result.push(arrOfStrings[i]);
    }
    return result;
}
solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2)