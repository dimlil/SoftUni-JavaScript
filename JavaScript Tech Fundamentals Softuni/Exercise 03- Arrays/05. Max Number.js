function solve(arr) {
    let firstEl=0;
    let result=[];
    let l=arr.length;
    let lastEl=arr[arr.length-1];
    for (let i = 0; i <= l; i++) {
        firstEl=arr.shift();
        for (let j = 0; j <= arr.length; j++) {
            if (firstEl>arr[j]) {
                result.push(firstEl);
                break;
            }
            else{
                break;
            }
        }
    }
    result.push(lastEl);
    console.log(result.join(' '));
}
solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);