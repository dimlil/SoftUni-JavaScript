/**
 * 
 * @param {Array<String>} input 
 */
function solve(input) {
    let string = input.shift();
    input.forEach(e => {
        let commands = e.split(' ')
        // console.log(commands[0]);
        if (commands[0] == 'Translate') {
            translate(commands[1], commands[2]);
            console.log(string);
        }
        if (commands[0] == 'Includes') {
            includes(commands[1]);
        }
        if (commands[0] == 'Start') {
            start(commands[1]);
        }
        if (commands[0] == 'Lowercase') {
            lowercase();
        }
        if (commands[0] == 'FindIndex') {
            findIndex(commands[1]);
        }
        if (commands[0] == 'Remove') {
            remove(commands[1], commands[2]);
        }
    })
    function translate(char, replacment) {
        let result = '';
        for (let i = 0; i < string.length; i++) {
            if (string[i] == char) {
                result += replacment;
            }
            else {
                result += string[i];
            }
        }
        string = result;

    }
    function includes(searching) {
        if (string.includes(searching)) {
            console.log('True');
        }
        else {
            console.log('False');
        }
    }
    function start(searching) {
        if (string.split(' ')[0] == searching) {
            console.log('True');
        }
        else {
            console.log('False');
        }
    }
    function lowercase() {
        string = string.toLowerCase();
        console.log(string);
    }
    function findIndex(char) {
        let lastChar = 0;
        for (let i = 0; i < string.length; i++) {
            if (string[i] == char) {
                lastChar = i;
            }
        }
        console.log(lastChar);
    }
    function remove(start, end) {
        let result = string.split('');
        result.splice(start, end);
        string = result.join('');
        console.log(string);
    }
}
solve(["//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"])