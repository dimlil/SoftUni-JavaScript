function solve(inputArr) {
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] == reverseANumber(inputArr[i])) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }

    function reverseANumber(n) {
        n = n + "";
        return n.split("").reverse().join("");
    }
}
solve([123, 323, 421, 121]);