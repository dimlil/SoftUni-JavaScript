function solve(arrOfNumbers, commands) {
    for (const element of commands) {
        let command = element.split(' ');
        if (command[0] === 'add') {
            command[1] = Number(command[1]);
            command[2] = Number(command[2]);
            add(command[1], command[2]);
        }
        if (command[0] === 'addMany') {
            command.splice(0, 1);
            let index = command.shift();
            index = Number(index);
            for (let i = 0; i < command.length; i++) {
                command[i] = Number(command[i]);
            }
            addMAny(index, command)
        }
        if (command[0] === 'contains') {
            let numberToSearch = Number(command[1]);
            contains(numberToSearch);
        }
        if (command[0] === 'remove') {
            let indexofNumberToRemove = Number(command[1]);
            remove(indexofNumberToRemove);
        }
        if (command[0] === 'shift') {
            let positionsToShift = Number(command[1]);
            shift(positionsToShift);
        }
        if (command[0] === 'sumPairs') {
            sumPairs();
        }
        if (command[0] === 'print') {
            print();
        }

    }

    function add(index, element) {
        arrOfNumbers.splice(index, 0, element);
    }

    function addMAny(index, elements) {
        for (let i = 0; i < elements.length; i++) {
            arrOfNumbers.splice(index, 0, elements[i]);
            index++;
        }
    }

    function contains(numberToSearch) {
        if (arrOfNumbers.includes(numberToSearch)) {
            console.log(arrOfNumbers.indexOf(numberToSearch));
        } else {
            console.log('-1');
        }
    }

    function remove(index) {
        arrOfNumbers.splice(index, 1);
    }

    function shift(positions) {
        let arrToAddAtEnd = arrOfNumbers.splice(0, positions);
        for (let i = 0; i < arrToAddAtEnd.length; i++) {
            arrOfNumbers.push(arrToAddAtEnd[i]);
        }
    }

    function sumPairs() {
        for (let i = 0; i < arrOfNumbers.length; i = i + 2) {
            if (arrOfNumbers[i] == NaN) {
                break;
            } else {
                arrOfNumbers[i]=arrOfNumbers[i]+arrOfNumbers[i+1];
            }
        }
    }

    function print() {
        console.log(`[ ${arrOfNumbers.join(', ')} ]`)
        //console.log(arrOfNumbers);
    }
}
solve([1, 2, 4, 5, 6, 7],['add 1 8', 'contains 1', 'contains 3', 'print']);
solve([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);