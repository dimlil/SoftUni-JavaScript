function solve(commands) {
    let count = 1;
    let arr = [];
    commands.forEach(el => {
        if (el == 'add') {
            arr.push(count);
            count++;
        }
        else {
            arr.pop();
            count++
        }
    });
    if (arr[0] == undefined) {
        console.log("Empty");
    }
    else {
        console.log(arr.join('\n'));
    }
}
// solve(['add',
//     'add',
//     'add',
//     'add'])
solve(['add',
    'add',
    'remove',
    'add',
    'add'])