/**
 * 
 * @param {Array} numbers 
 */
function solve(numbers) {
    return numbers
        .sort((a, b) => a - b)
        .slice(Math.floor(numbers.length / 2))
}
