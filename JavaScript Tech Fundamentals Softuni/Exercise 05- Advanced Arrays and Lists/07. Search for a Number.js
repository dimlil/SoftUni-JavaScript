function solve(arrayOfNumbers,operations) {
    const howMuchElementsNeedToGet=operations.shift();
    const howMuchElementsNeedToDelete=operations.shift();
    const numberToSearch=operations.shift();

    let newArr=[];
    newArr=arrayOfNumbers.slice(0,howMuchElementsNeedToGet);
    newArr.splice(0,howMuchElementsNeedToDelete);
    let count=0;
    newArr.forEach(element => {
        if (element===numberToSearch) {
            count++;
        }
    });
    console.log(`Number ${numberToSearch} occurs ${count} times.`);
    
}
solve([5, 2, 3, 4, 1, 6],[5, 2, 3]);