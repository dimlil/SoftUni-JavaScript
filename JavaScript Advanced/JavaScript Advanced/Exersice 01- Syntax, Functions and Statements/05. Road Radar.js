function solve(speed, area) {
    let limit = 0;
    if (area == 'motorway') {
        limit = 130;
    }
    if (area == 'interstate') {
        limit = 90;
    }
    if (area == 'city') {
        limit = 50;
    }
    if (area == 'residential') {
        limit = 20;
    }
    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }
    if (speed > limit) {
        const difference = speed - limit;
        if (difference > 0 && difference <= 20) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - speeding`);
        }
        if (difference > 20 && difference <= 40) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - excessive speeding`);
        }
        if (difference > 40) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - reckless speeding`);
        }
    }
}