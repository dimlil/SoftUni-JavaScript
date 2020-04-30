function solve(arr) {
    let oldSum=0;
    let newSum=0;
    let newResult=[];
    for(let i=0;i<arr.length;i++){
        oldSum+=arr[i];
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            arr[i]=arr[i]+i;
        }
        else{
            arr[i]=arr[i]-i;
        }
        newResult.push(arr[i]);
    }
    for(let i=0;i<newResult.length;i++){
        newSum+=newResult[i];
    }
    console.log(newResult);
    console.log(oldSum);
    console.log(newSum);
}
solve([2,2,5]);