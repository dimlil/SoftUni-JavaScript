/**
 * 
 * @param {Array<String>} input 
 */
function solve(input) {
    const regex = /!([A-Z])\w{3,}!:\[([A-Z]\w{8,})\]/
    input.shift();
    input.forEach(e => {
        if (regex.exec(e)) {
            let command = e.split('!')[1];
            let string = e.split('[')[1];
            let result = '';
            result += command + ': ';
            for (let i = 0; i < string.length - 1; i++) {
                // console.log(string[i]);
                result += string[i].charCodeAt(0) + ' ';
            }
            console.log(result);
        }
        else {
            console.log('The message is invalid');
        }
    })
}
solve(["3",
    "go:[outside]",
    "!drive!:YourCarToACarWash",
    "!Watch!:[LordofTheRings]"]);