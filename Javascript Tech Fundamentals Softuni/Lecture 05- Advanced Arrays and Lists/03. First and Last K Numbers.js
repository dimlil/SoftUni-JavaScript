function solve(input) {
let k=input.shift();
let firstElement=input.slice(0,k);
let lastElement=input.slice(input.length-k);
    console.log(firstElement);
    console.log(lastElement);
}
solve([2,3,4,5]);