/**
 * 
 * @param {string} a 
 * @param {string} b 
 * @param {string} c 
 */
function solve(a, b, c) {
    let total = 0;
    total += a.length;
    total += b.length;
    total += c.length;
    let average = Math.floor(total / 3)
    console.log(total);
    console.log(average);
}
solve('adasd', 'safd', 'asfssfd');