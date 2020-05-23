function main(numberOfPeople, typeOfGroup, day) {
    let result = 0;
    let tickedPrice = 0;
    let discount=0;
    if (typeOfGroup === 'Students') {
        if (day === 'Friday') {
            tickedPrice=8.45;
            } else {
                if (day === 'Saturday') {
                    tickedPrice=9.80;
                } else {
                    tickedPrice=10.46;
                }
            }
    } else {
        if (typeOfGroup === 'Business') {
            if (day === 'Friday') {
                tickedPrice=10.90;
                } else {
                    if (day === 'Saturday') {
                        tickedPrice=15.60
                    } else {
                        tickedPrice=16;
                    }
                }
        } else {
            if (typeOfGroup === 'Regular') {
                if (day === 'Friday') {
                    tickedPrice=15;
                    } else {
                        if (day === 'Saturday') {
                            tickedPrice=20;
                        } else {
                            tickedPrice=22.50;
                        }
                    }
            }
        }
    }
    result=numberOfPeople*tickedPrice;
    if (typeOfGroup === 'Students'&& numberOfPeople>=30) {
        discount=result*15/100;
        result-=discount;
    }else{
        if (typeOfGroup === 'Business'&& numberOfPeople>=100) {
            discount=10*tickedPrice;
            result-=discount;
        }else{
            if (typeOfGroup === 'Regular' && numberOfPeople>=10 && numberOfPeople<=20) {
                discount=result*5/100;
                result-=discount;
            }
        }
    }
    console.log(`Total price: ${result.toFixed(2)}`);
    
}
main(30,"Students",'Sunday')