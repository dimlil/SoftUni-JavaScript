function solve(arr) {
    for(let i=0;i<arr.length;i++){
        arr[i]=Number(arr[i]);
    }
    let sumOfEven=0;
    let sumOfOdd=0;
    let result=0;
    for(let num of arr){
        if(num%2===0){
            sumOfEven+=num;
        }
        else{
            sumOfOdd+=num;
        }
    }
    result=sumOfEven-sumOfOdd;
    console.log(result);
}

solve(["2","2","5"]);