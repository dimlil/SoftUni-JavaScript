function solve(input) {
    let storage=new Map();
    for(const line of input){
        const [item,quantityInput]=line.split(' ');
        let quantity=Number(quantityInput);
        if (storage.has(item)){
            storage.set(item,storage.get(item)+ quantity);
        }
        else{
            storage.set(item,quantity);
        }
    }
    storage.forEach((v,k)=>console.log(`${k} -> ${v}`));
}
solve();