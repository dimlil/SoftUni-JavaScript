function solve(searchString,char,stringToMach) {
    let modificatedString=searchString.replace('_',char);
    if(modificatedString===stringToMach){
        console.log('Matched');
    }
    else{
        console.log('Not Matched');
    }
}

solve("Gosho","Pesho","<==>");