function solve(arrOfNumbers,specailNumbers) {
    const specailNumberToSearch=specailNumbers.shift();
    const specialPower=specailNumbers.shift();
    let sum=0;
    arrOfNumbers.splice(arrOfNumbers.indexOf(specailNumberToSearch)+1,specialPower);
    arrOfNumbers.reverse();
    arrOfNumbers.splice(arrOfNumbers.indexOf(specailNumberToSearch),specialPower+1);
    arrOfNumbers.forEach(element => {
        sum+=element
    });
    console.log(sum);
}
solve([1, 2, 2, 4, 2, 2, 2, 9],[4, 2]);
solve([1, 4, 4, 2, 8, 9, 1],[9, 3]);
