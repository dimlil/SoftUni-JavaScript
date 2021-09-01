/**
 * 
 * @param {Array<string>} input 
 */
function solve(input) {
    let cost = Number(input.shift());
    let months = Number(input.shift());
    let result = 0;
    for (let i = 1; i <= months; i++) {
        if (i % 2 !== 0 && i !== 1) {
            result = result - result * 16 / 100;
        }
        if (i % 4 == 0) {
            result += result * 25 / 100;
        }
        result += cost * 25 / 100;
    }
    if (result > cost) {
        console.log(`Bravo! You can go to Disneyland and you will have ${(result - cost).toFixed(2)}lv. for souvenirs.`);
    }
    else {
        console.log(`Sorry. You need ${(cost-result).toFixed(2)}lv. more.`);
    }
}
solve(["1000",
    "4"])
solve(["3265",
    "3"])

