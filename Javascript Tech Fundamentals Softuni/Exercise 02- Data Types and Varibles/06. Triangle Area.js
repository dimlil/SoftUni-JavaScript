function solve(a,b,c) {
    let s=a+b+c;
    s=s/2;
    let area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
    console.log(area);
    
}
solve(2,3.5,4);