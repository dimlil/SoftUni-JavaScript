function solve(num) {
    num=num.toString();
    let tec=1;
    for(let i=1;i<=num;i++)
    {
        if(tec==5||tec==7||tec==14){
            console.log(`${tec} -> True`);
        }
        else{
            console.log(`${tec} -> False`);
        }
        tec++;
    }
}
solve(15);