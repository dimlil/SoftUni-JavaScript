let myArr = [7, 5, 1, 13, 20];
myArr.sort((a, b) => {
    return a - b;
});
console.log(myArr);
let names = ["Peter", "george", "Mary", "John", "Alice"];
names.sort((a, b) => a.localeCompare(b));
console.log(names);

console.log(names.find(x => x[0] == 'P'));

let numbersAsStrings = ['1', '2', '3'];
console.log(numbersAsStrings.map(Number).map(x => x + 1));