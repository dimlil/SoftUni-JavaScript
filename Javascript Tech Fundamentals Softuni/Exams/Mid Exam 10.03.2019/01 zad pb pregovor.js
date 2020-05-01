function solve(days,budget,groupOfPeople,fuelPerKilometer,food,priceFor1nightFor1Person,day1,day2,day3,day4,day5,day6,day7,day8,day9,day10,day11) {
    let arr=[day1,day2,day3,day4,day5,day6,day7,day8,day9,day10,day11];
    for(let i=0;i<arr.length;i++) {
        if(arr[i]==undefined){
            arr.pop();
        }
    }
    let currentExpenses;
    let foodPrice=days*food*groupOfPeople;
    let totalHotelPrice=groupOfPeople*priceFor1nightFor1Person*days;
    if(groupOfPeople>10) {
        totalHotelPrice = totalHotelPrice % 25
    }
    let sumOfDistnce=0;
    for(let i=0;i<days;i++){
        sumOfDistnce+=arr[i];

    }
    let totalSumOfDistance=sumOfDistnce*1.5;
    currentExpenses=foodPrice+totalHotelPrice+totalSumOfDistance;
    let day7res;
    for(let i=0;i<days;i++) {
        if (i%3==0||i%5==0) {
            currentExpenses=currentExpenses*0.4;
        }
        if(i%7==0){
            day7res=currentExpenses/groupOfPeople;
        }
    }
    currentExpenses=currentExpenses-day7res;
    console.log(currentExpenses);
    let moneyLeft=budget-currentExpenses;
    let moneyNeed=currentExpenses-budget;
    if(currentExpenses<budget){
        console.log(`You have reached the destination. You have ${moneyLeft}$ budget left.`);
    }
    else{
        console.log(`Not enough money to continue the trip. You need ${moneyNeed}$ more.`);
    }
}
solve(7,12000,5,1.5,10,20,512,318,202,154,202,108,123);