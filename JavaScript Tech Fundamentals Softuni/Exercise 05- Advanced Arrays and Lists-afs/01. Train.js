function solve(inputArr) {
    let train = inputArr
        .shift()
        .split(' ')
        .map(a => {
            return Number(a);
        });
    const maxCapacity = Number(inputArr.shift());

    let commands = inputArr;
    for (let i = 0; i < commands.length; i++) {
        let command = commands[i].split(' ')
        if (command[0] === 'Add') {
            train.push(Number(command[1]));
        } else {
            for (let j = 0; j < train.length; j++) {
                if (train[j] + Number(command[0]) <= maxCapacity) {
                    train[j] += Number(command[0]);
                    break;
                }

            }
        }
    }
    console.log(train.join(' '));
}
solve(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
]);