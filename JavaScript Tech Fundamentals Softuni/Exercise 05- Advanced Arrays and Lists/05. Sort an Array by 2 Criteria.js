function solve(inputArr) {
    inputArr.sort((a,b)=>a.length-b.length);
    inputArr.sort((a,b)=>a-b);
    inputArr.forEach(element => {
        console.log(element);
    });
}
//solve(["alpha", "beta", "gamma"]);
solve([ "Deny","test", "omen","Default"]); 
// Deny
// omen
// test
// Default
//https://judge.softuni.bg/Contests/Compete/Index/1299#4