function solve(...params) {
    let number = params.shift();
    params.forEach(el => {
        if (el == "chop") {
            number = number / 2;
            console.log(number);
        }
        if (el == "dice") {
            number = Math.sqrt(number);
            console.log(number);
        }
        if (el == "spice") {
            number++;
            console.log(number);
        }
        if (el == "bake") {
            number = number * 3;
            console.log(number);
        }
        if (el == "fillet") {
            number = number - number * 20 / 100;
            console.log(number);
        }
    })
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');