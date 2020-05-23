function solve(inputArr) {
    let result = [];
    let stringOfNums = inputArr.shift();
    let commands = inputArr;

    result = stringOfNums.split(' ');
    //console.log(commands);
    for (let i = 0; i < commands.length; i++) {
        let command = commands[i].split(' ');
        if (command[0] === 'Add') {
            result.push(command[1]);
        } else {
            if (command[0] === 'Remove') {
                if (result.includes(command[1])) {
                    result.splice(result.indexOf(command[1]),1)
                }
            } else {
                if (command[0] === 'RemoveAt') {
                    result.splice(command[1],1)
                } else {
                    if (command[0] === 'Insert') {
                        result.splice(command[2],0,command[1])
                    }
                }
            }
        }
    }
    console.log(result.join(' '))
}
solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
]);