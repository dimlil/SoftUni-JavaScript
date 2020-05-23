function solve(input) {
    let username = input.shift();
    for (let i = 0; i <= input.length; i++) {
        if (i % 3 == 0&&i>0) {
            console.log(`User ${username} blocked!`);
            break;
        }
        if (reverseString(input[i]) === username) {
            console.log(`User ${username} logged in.`);
            break;
        }
        else {
           
                console.log('Incorrect password. Try again.');
            
        }
    }
    function reverseString(str) {
        var splitString = str.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        return joinArray;
    }
}
solve(['Acer', 'login', 'go', 'let me in', 'not sunny']);