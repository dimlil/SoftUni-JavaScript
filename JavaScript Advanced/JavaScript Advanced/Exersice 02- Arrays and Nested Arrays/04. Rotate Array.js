/**
 * 
 * @param {[]} arrayOfStrings 
 * @param {number} rotations 
 */
function solve(arrayOfStrings,rotations) {
    for (let i = 0; i < rotations; i++) {
        let lastEl=arrayOfStrings.pop();
        arrayOfStrings.unshift(lastEl);
    }
    console.log(arrayOfStrings.join(" "));
}
solve(['1', 
'2', 
'3', 
'4'], 
2)