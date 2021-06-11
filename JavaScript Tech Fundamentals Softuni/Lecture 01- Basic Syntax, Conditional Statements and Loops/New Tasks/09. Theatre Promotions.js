function solve(day, age) {
    let price;
    if (day === "Weekday") {
        if (age >= 0 && age <= 18) {
            price = 12;
            console.log(price + "$");
        }
        else if (age > 18 && age <= 64) {
            price = 18;
            console.log(price + "$");
        }
        else if (age > 64 && age <= 122) {
            price = 12;
            console.log(price + "$");
        }
    }
    else if (day === "Weekend") {
        if (age >= 0 && age <= 18) {
            price = 15;
            console.log(price + "$");
        }
        else if (age > 18 && age <= 64) {
            price = 20;
            console.log(price + "$");
        }
        else if (age > 64 && age <= 122) {
            price = 15;
            console.log(price + "$");
        }
    }
    else if (day === "Holiday") {
        if (age >= 0 && age <= 18) {
            price = 5;
            console.log(price + "$");
        }
        else if (age > 18 && age <= 64) {
            price = 12;
            console.log(price + "$");
        }
        else if (age > 64 && age <= 122) {
            price = 10;
            console.log(price + "$");
        }
    }
    else {
        console.log("Error!");
    }
    if (age < 0) {
        console.log("Error!");
    }
    if (age > 122) {
        console.log("Error!");
    }
}
solve('Weekday',10);
solve('Weekend',22);
solve('Weekend',222);
solve('Weasdasdasekend',22);