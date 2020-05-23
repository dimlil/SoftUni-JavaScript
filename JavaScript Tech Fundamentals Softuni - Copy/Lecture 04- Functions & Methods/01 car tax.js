function solve(power) {
    printCarTax(power);
}

function printCarTax(power){
    let result='';
    if(power<=37){
        result=power*0.43;
    }
    else if(37<power&&power<=55){
        result=power*0.50;
    }
    else if(55<power&&power<=74){
        result=power*0.68;
    }

    else if(74<power&&power<=110){
        result=power*1.38;
    }
    else if(power>110){
        result=power*1.54;
    }
    console.log(result.toFixed(2) + ' lv.');
}
