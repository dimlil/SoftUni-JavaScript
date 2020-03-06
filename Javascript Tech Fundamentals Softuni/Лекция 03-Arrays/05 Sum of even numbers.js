function solve(arr) {
    for(let i=0;i<arr.length;i++){
        arr[i]=Number(arr[i]);
    }
    let sum=0;
    for(let num of arr){
            if(num%2===0){
                sum+=num;
            }

    }
    console.log(sum);
}
solve(["2","2","5"]);