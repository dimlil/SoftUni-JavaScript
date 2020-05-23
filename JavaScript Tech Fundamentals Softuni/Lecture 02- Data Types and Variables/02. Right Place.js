function solve(firstParam,symbol,lastLast) {
    let newParam=firstParam.replace('_',symbol);
    if (newParam===lastLast) {
        console.log('Matched');
    }
    else{
        console.log('Not Matched');
    }
}
solve('Str_ng', 'I', 'Strong');
solve('Str_ng', 'i', 'String');