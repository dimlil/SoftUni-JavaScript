/**
 * 
 * @param {Array<string>} input 
 */
function solve(input) {
    const painting = input.shift().split(' ');
    // console.log(painting);
    input.forEach(e => {
        const command = e.split(' ');
        if (command[0] == 'Insert') {
            insert(command[1], command[2]);
        }
        if (command[0] == 'Change') {
            change(command[1], command[2]);
        }
        if (command[0] == 'Hide') {
            hide(command[1]);
        }
        if (command[0] == 'Switch') {
            swich(command[1], command[2]);
        }
        if (command[0] == 'Reverse') {
            painting.reverse();
        }
    })
    console.log(painting.join(' '));
    function change(paintingNumber, changedNumber) {
        for (let i = 0; i < painting.length; i++) {
            if (painting[i] == paintingNumber) {
                painting[i] = changedNumber;
                break;
            }
        }
    }
    function insert(place, paintingNumber) {
        place = Number(place);
        if (place < painting.length) {
            place++;
            // console.log(painting);
            painting.splice(place, 0, paintingNumber);
            // console.log(painting);
        }
    }
    function hide(paintingNumber) {
        for (let i = 0; i < painting.length; i++) {
            if (painting[i] == paintingNumber) {
                painting.splice(i, 1);
                break;
            }
        }
    }
    function swich(paintingNumber1, paintingNumber2) {
        if (painting.includes(paintingNumber1) && painting.includes(paintingNumber2)) {
            let index1 = painting.indexOf(paintingNumber1);
            let index2 = painting.indexOf(paintingNumber2);
            let changer = painting[index1];
            painting[index1] = painting[index2]
            painting[index2] = changer;
        }
    }
}
// solve(["115 115 101 114 73 111 116 75",
//     "Insert 5 69",
//     "Switch 116 73",
//     "Hide 75",
//     "Reverse",
//     "Change 73 70",
//     "Insert 10 85",
//     "END"])
solve(["77 120 115 101 101 97 78 88 112 111 108 101 111 110",
    "Insert 5 32",
    "Switch 97 78",
    "Hide 88",
    "Change 120 117",
    "END"])
