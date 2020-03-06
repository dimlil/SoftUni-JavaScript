function f(input) {
    let items=input.shift();//string
    let end=input.pop();
    let comands=input;
    for (let el of comands) {
            if (el==="OutOfStock"){
                console.log("1");
            }
            else if(el==="Required"){

            }
            else if(el==="JustInCase "){

            }
        }
}
f([ 'Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
    'OutOfStock Eggs',
    'Required Spoon 2',
    'JustInCase ChocolateEgg',
    'No Money' ]);