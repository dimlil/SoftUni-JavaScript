function solve(arr) {
    let arr2=[];
    for(let elemet of arr){
        if(elemet<=0){
            arr2.unshift(elemet);
        }
        else{
            arr2.push(elemet);
        }
    }
    for(let i=0;i<arr2.length;i++){
        console.log(arr2[i]);
    }
}
solve([1,2,-3,3])