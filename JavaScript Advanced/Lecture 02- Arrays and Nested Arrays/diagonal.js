/**
 * @param {Array} metrix 
 */
function solve(metrix) {
    let mainDiag = 0;
    let secDiag = 0;
    for (let i = 0; i < metrix.length; i++) {
        mainDiag+=metrix[i][i];
        secDiag+=metrix[i][metrix.length-i-1];
    }
    console.log(mainDiag, secDiag);
}
solve([
    [20, 40],
    [10, 60]
])
solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89],
])