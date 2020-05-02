function solve(input) {
    let err=false;
    if (input.length<6||input.length>10) {
        err=true;
        console.log("Password must be between 6 and 10 characters");
    }
    let patern=/[!@#$%^&\*\(\)\{\}?\.\,]/g
    let checkingForSpecialSymbols=patern.test(input);
    if (checkingForSpecialSymbols==true) {
        err=true;
        console.log("Password must consist only of letters and digits");
    }
    if(checkNumerOfNumbersInInput(input)==false){
        err=true;
        console.log("Password must have at least 2 digits");
    }
    if(err===false){
        console.log("Password is valid")
    }

    function checkNumerOfNumbersInInput(checking) {
        let countOfNumbers=0;
        let arrOfChecking=checking.split("");
        for (let i = 0; i < arrOfChecking.length; i++) {
            let element=Number(arrOfChecking[i]);        
            if(element==1||element==2||element==3||element==4||element==5||element==6||element==7||element==8||element==8||element==9||element==0){
                countOfNumbers++;
            }
        }
        if(countOfNumbers>=2){
            return true;
        }
        else{
            return false;
        }
    }
}

solve('logIn5352845445445');