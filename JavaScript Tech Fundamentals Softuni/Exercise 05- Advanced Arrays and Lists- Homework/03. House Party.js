function solve(inputArr) {
    let list = [];
    for (const guests of inputArr) {
        let guest = guests.split(' ');
        let name = guest.shift();
        if (guest.includes('not')) {
            if (list.includes(name)) {
                list.splice(list.indexOf(name),1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (list.includes(name)) {
                console.log(`${name} is already in the list!`);
            }else{
                list.push(name);
            }
        }
    }
    list.forEach(name=>{
        console.log(name);
    })
}
solve(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
]);