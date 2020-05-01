function f(arrayOfStringsInput) {
    lastNote=arrayOfStringsInput.pop();
    let itemForSearch=/([!@#$?])+/g;
    let trash=[];
    for (let arrayOfStringsInputElement of arrayOfStringsInput) {
        if(arrayOfStringsInputElement.includes("!")||arrayOfStringsInputElement.includes("@")
            ||arrayOfStringsInputElement.includes("#")||arrayOfStringsInputElement.includes("$")
            ||arrayOfStringsInputElement.includes("?")
            ||arrayOfStringsInputElement.includes("=")||arrayOfStringsInputElement.includes("<")){
            for (let stringElement of arrayOfStringsInputElement) {
                if(itemForSearch.exec(arrayOfStringsInputElement)){
                    trash.push(stringElement);
                }
            }

        }
        else{
            console.log('Nothing found!');
        }
    }

}
f([ '!@Ma?na?sl!u@=7<<tv58ycb4845',
    'E!ve?rest=.6<<tuvz26',
    '!K@2.,##$=4<<tvnd',
    '!Shiha@pan@gma##9<<tgfgegu67',
    '!###Anna@pur@na##=16<<tv5dekdz8x11ddkc',
    'Last note' ]
);