function solve(input) {
    sum();
    sumOfInverseValues();
    concat();

    function sum() {
        let result = 0;
        input.forEach(el => {
            result += el;
        });
        console.log(result);
    }
    function sumOfInverseValues() {
        let result = 0;
        input.forEach(el => {
            result += 1 / el;
        });
        console.log(result);
    }
    function concat() {
        let result = '';
        input.forEach(el => {
            result += el.toString();
        });
        console.log(result);
    }
}
solve([1, 2, 3]);