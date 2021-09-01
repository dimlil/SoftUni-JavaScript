/**
 * 
 * @param {Array<string>} input 
 */
function solve(input) {
    const coffees = input.shift().split(' ');
    input.forEach(e => {
        const command = e.split(' ');
        if (command[0] == 'Include') {
            include(command[1]);
        }
        if (command[0] == 'Remove') {
            remove(command[1], command[2]);
        }
        if (command[0] == 'Prefer') {
            prefer(command[1], command[2]);
        }
        if (command[0] == 'Reverse') {
            coffees.reverse();
        }
    })
    console.log(`Coffees:\n${coffees.join(' ')}`);
    function include(name) {
        coffees.push(name);
    }
    function remove(start, numberOfCoffees) {
        numberOfCoffees = Number(numberOfCoffees);
        if (coffees.length < numberOfCoffees) {

        } else {
            if (start == 'first') {
                coffees.splice(0, numberOfCoffees);
            }
            if (start == 'last') {
                for (let i = 0; i < numberOfCoffees; i++) {
                    coffees.pop()
                }
                // coffees.splice(coffees.length - 1, numberOfCoffees);
            }
        }
    }
    function prefer(index1, index2) {
        index1 = Number(index1);
        index2 = Number(index2);
        if (index1 < coffees.length && index2 < coffees.length) {
            let changer = coffees[index1];
            coffees[index1] = coffees[index2];
            coffees[index2] = changer;
        }
    }
}
solve(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse"])
