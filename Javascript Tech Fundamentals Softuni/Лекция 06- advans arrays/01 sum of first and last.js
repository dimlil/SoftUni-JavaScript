function solve(arr) {
    let firstEl=arr.shift();
    let lastEl=arr.pop();
    let result= Number(firstEl)+ Number(lastEl);
    console.log(result);
}
solve(["1","2","4"]);