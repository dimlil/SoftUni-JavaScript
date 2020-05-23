function solve(product, quantity) {
    switch (product) {
        case 'water':
            console.log(water(quantity).toFixed(2))
            break;
        case 'coffee':
            console.log(coffee(quantity).toFixed(2))
            break;
        case 'coke':
            console.log(coke(quantity).toFixed(2))
            break;
        case 'snacks':
            console.log(snacks(quantity).toFixed(2))
            break;

        default:
            break;
    }

    function water(quantity) {
        return quantity * 1;
    }
    function coke(quantity) {
        return quantity * 1.4;
    }
    function coffee(quantity) {
        return quantity * 1.5;
    }
    function snacks(quantity) {
        return quantity * 2;
    }
}
solve('water', 5);
solve('coffee', 2);