function solve(input) {
    if (typeof input === 'number' && Number.isNaN(input) == false) {
        let result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }
}
solve('asf');
solve(5);