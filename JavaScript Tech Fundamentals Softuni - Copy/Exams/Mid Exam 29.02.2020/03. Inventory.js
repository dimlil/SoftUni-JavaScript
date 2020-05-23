function main(inputArray) {
    let inventory = inputArray.shift();
    inventory = inventory.split(', ');
    let commands = inputArray;
    for (let i = 0; i < commands.length; i++) {
        let command = commands[i].split(' ')
        if (command[0] == 'Collect') {
            if (inventory.includes(command[2])) {
                continue;
            } else {
                inventory.push(command[2]);
            }
        } else {
            if (command[0] == 'Drop') {
                if (inventory.includes(command[2])) {
                    inventory.splice(inventory.indexOf(command[2]), 1);
                } else {
                    continue;
                }
            } else {
                if (command[0] == 'Combine') {
                    let elementToAdd = command[3].split(':')
                    if (inventory.includes(elementToAdd[0])) {
                        inventory.splice(inventory.indexOf(elementToAdd[0]) + 1, 0, elementToAdd[1])
                    } else {
                        continue;
                    }
                } else {
                    if (command[0] == 'Renew') {
                        if (inventory.includes(command[2])) {
                            inventory.splice(inventory.indexOf(command[2]), 1);
                            inventory.push(command[2]);
                        } else {
                            continue;
                        }
                    } else {
                        if (command[0] == 'Craft!') {
                            console.log(inventory.join(', '));
                        }
                    }
                }
            }
        }
    }
}
main(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!'])
main([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
])