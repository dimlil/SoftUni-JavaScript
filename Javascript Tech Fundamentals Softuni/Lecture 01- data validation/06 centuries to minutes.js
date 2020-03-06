function solve(centreum) {
let years=centreum*100;
let days=Math.trunc(years*365.2422);
let hours=24*days;
let minets=60*hours;
console.log(`${centreum} centuries = ${years} years = ${days} days = ${hours} hours = ${minets} minutes`);
}