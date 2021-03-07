function solve(fruit, weight, money) {
    weight = weight / 1000;
    money = weight * money;
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}
solve('orange', 2500, 1.80);