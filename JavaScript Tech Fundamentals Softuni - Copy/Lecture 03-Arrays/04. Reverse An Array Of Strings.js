function solve(arr) {
    arr.reverse();
    console.log(arr.join(' '));
}

solve(['a','b','c','d','e'])

/*
Дълъг Варянт:
for(let i=0;i<arr.lenght/2,i++){
let lowerElement=arr[i];
arr[i]=arr[arr.lenght-1-i];
[arr.lenght-1-i]=lowerElement;
}
cosole.log(arr.join(' '));
 */