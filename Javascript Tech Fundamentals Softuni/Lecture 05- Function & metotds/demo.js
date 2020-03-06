function addNamePrfix(name,gender) {
    if(gender=='male'){
        console.log(`Mr ${name}`);
    }
    else if(gender=='famale'){
        console.log(`Mrs ${name}`);
    }
    else{
        console.log(name);
    }
}