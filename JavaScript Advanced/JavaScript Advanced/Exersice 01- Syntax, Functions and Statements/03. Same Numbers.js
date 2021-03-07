function solve(input) {
    input = input.toString();
    input = input.split('');
    for (let i = 0; i < input.length; i++) {
        if (input[i] != input[0]) {
            console.log('false');
            break;
        }
        if (input[i] == input[0] && input.length - 1 == i) {
            console.log('true');
            break;
        }
    }
    let result = 0;
    input.forEach(el => {
        result += Number(el);
    });
    console.log(result);
}
solve(2222222);
solve(1234);