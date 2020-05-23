function solve(input) {
    if (input%2===0) {
        console.log(false);
    } else {
        if (input%3===0) {
            console.log(false);
        } 
        else{
            console.log(true);
        }
    }
}
solve(7);
solve(8);