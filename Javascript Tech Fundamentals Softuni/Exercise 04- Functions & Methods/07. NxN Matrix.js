function solve(n) {
    for (let i = 0; i < n; i++) {
        let string=n.toString()+' ';
        console.log(string.repeat(n))
    }    
}
solve(7);