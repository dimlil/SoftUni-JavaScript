function solve(input) {
        input.sort((a, b) => {
                return a - b
        });
        console.log(`${input[0]} ${input[1]}`);
}
solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);