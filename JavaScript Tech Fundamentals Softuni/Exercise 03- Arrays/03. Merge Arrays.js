function solve(array1,array2) {
    let result=[];
    for (let i = 0; i < array1.length; i++) {
        if (i%2===0) {
            result+=Number(array1[i])+Number(array2[i]);
        }else{
            result+=array1[i]+array2[i];
        }
        if (i == array1.length-1) {
            break;
        } else {
            result+=' - ';
        }
    }
    console.log(result);
}
solve(["5", "15", "23", "56", "35"],["17", "22", "87", "36", "11"]);