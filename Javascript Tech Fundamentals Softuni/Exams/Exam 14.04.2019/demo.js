function f(arr) {
    for (let arrElement of arr) {
/*        if(arrElement===1){
            arrElement.pop();
        }*/
    }

    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==="1"){
            arr.splice(arr[i],arr[i]);
            console.log(arr);
        }
    }
/*    let obj={};
    obj.number=3;
    obj.number2=2;
    obj.number=1;
    console.log(obj);
    let map=new Map();*/
}
f(["1","2","1"]);