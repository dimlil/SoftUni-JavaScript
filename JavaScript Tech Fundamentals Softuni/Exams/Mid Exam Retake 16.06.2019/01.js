function f(input) {
    let buget=input.shift();
    buget=Number(buget);
    let priceFor1KgFlouer=Number(input);
    let priceForEggs=priceFor1KgFlouer*75/100;
    let priceOfMilk=priceFor1KgFlouer+(priceFor1KgFlouer*25/100);
    let priceOf250lMilk=priceOfMilk/4;
    let priceOfCozonac=priceFor1KgFlouer+priceForEggs+priceOf250lMilk;
    let countOfCozonacs=0;
    let countOfEggs=0;
    let countOfIteration=0;
    while(buget>priceOfCozonac){
        countOfIteration++;
        countOfCozonacs++;
        if(countOfIteration%3==0){
            let sub=countOfCozonacs-2;
            countOfEggs+=sub;
            buget=buget-priceOfCozonac;
        }
        else {
            countOfEggs+=3;
            buget=buget-priceOfCozonac;
        }
    }
    console.log(`You made ${countOfCozonacs} cozonacs! Now you have ${countOfEggs} eggs and ${buget.toFixed(2)}BGN left.`);
}
f([ '20.50', '1.25' ]);


/*function f(input) {
    let buget=input.shift();
    buget=Number(buget);
    let priceFor1KgFlouer=Number(input);
    let priceForEggs=priceFor1KgFlouer*75/100;
    let priceOfMilk=priceFor1KgFlouer+(priceFor1KgFlouer*25/100);
    let priceOf250lMilk=priceOfMilk/4;
    let priceOfCozonac=priceFor1KgFlouer+priceForEggs+priceOf250lMilk;
    let countOfCozonacs=0;
    let countOfEggs=0;
    let countOfIteration=0;
    if(buget>20){
        while(buget>priceOfCozonac){
            if(countOfIteration==3){
                countOfIteration=0;
                countOfCozonacs++;
                countOfEggs=countOfEggs-2;
                buget=buget-priceOfCozonac;
            }
            else {
                countOfIteration++;
                countOfCozonacs++;
                countOfEggs+=3;
                buget=buget-priceOfCozonac;
            }
        }
    }
    else{
        while(buget>priceOfCozonac){
            if(countOfIteration==3){
                countOfIteration=0;
                countOfCozonacs++;
                countOfEggs+=countOfCozonacs-2;
                buget=buget-priceOfCozonac;
            }
            else {
                countOfIteration++;
                countOfCozonacs++;
                countOfEggs+=3;
                buget=buget-priceOfCozonac;
            }
        }
    }
    console.log(`You made ${countOfCozonacs} cozonacs! Now you have ${countOfEggs} eggs and ${buget.toFixed(2)}BGN left.`);
}
f([ '20.50', '1.25' ]);
//f([ '15.75', '1.4' ]);
 */