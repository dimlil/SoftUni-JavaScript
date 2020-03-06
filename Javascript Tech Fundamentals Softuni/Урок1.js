function solve(contry){
    if(contry=="USA"||contry=="England"){
        console.log("English");
    }
    if(contry=="Spain"||contry=="Argentina"||contry=="Mexico"){
        console.log("Spanish");
    }
    else{
        console.log("unknown");
    }
}
solve('USA');