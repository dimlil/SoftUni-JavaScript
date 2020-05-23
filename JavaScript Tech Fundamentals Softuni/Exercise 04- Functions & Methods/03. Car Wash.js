function solve(input) {
    let result = 0;
    input.forEach(element => {
        if (element === 'soap') {
            result += 10;
        } else {
            if (element === 'vacuum cleaner') {
                result+=result*25/100
            } else {
                if (element === 'mud') {
                    result-=result*10/100
                } else {
                    if (element === 'water') {
                        result+=result*20/100
                    }
                }
            }
        }
    });
    console.log(`The car is ${result.toFixed(2)}% clean.`)
}

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);