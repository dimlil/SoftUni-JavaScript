function solve(input) {
    input=input.toString();
    let odd=0;
    let even=0;
    for (let i = 0; i < input.length; i++) {
        let inNum=Number(input[i])
        if (inNum%2===0) {
            even+=inNum;
        }
        else{
            odd+=inNum;
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
solve(1000435);