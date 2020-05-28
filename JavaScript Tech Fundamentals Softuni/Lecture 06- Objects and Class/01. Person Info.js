function solve(firstName,lastName,age) {
    let resultobj={
        firstName,               //firstName:firstName,
        lastName,                //lastName:lastName,
        age                      //age:age
    };
    let entries=Object.entries(resultobj);
    for(const [key,value] of entries){
        console.log(`${key}: ${value}`);
    }
    /*
    for(const pair of entries){
        console.log(`${pair[0]}: ${pair[1]}`);
    }
    */
}