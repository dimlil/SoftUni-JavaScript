function reverse(num,arr) {
    let resultArr=[];
    for (let i=num-1;i>=0;i--){
        let curentElemwnt=arr[i];
        resultArr.push(curentElemwnt);
    }
    let output='';
    for(let i=0;i<resultArr.length;i++){
        output+=resultArr[i]+ ' ';
    }
    console.log(output);
}
reverse(3,[10,20,30,40]);