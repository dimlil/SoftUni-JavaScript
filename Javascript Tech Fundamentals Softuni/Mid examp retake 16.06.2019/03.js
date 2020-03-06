function f(input) {
    let shopList=input.shift();
    let numberOfComands=input.shift();
    let shopListArr=shopList.split(" ");
    for (let i = 0; i < input.length; i++) {
        let str=input[i].split(" ");
        if(str[i]==="Include"){
            shopListArr.push(str[1]);

        }
        else if(str[i]==="Visit"){
            let strIn=str[i].split(" ");
            let iteration=Number(strIn[3]);
            console.log(strIn);
            if(str[2]==="First"){
                for (let j = 0; j < iteration; j++) {
                    shopList.shift();
                }
            }
            else{
                for (let j = 0; j < iteration; j++) {
                    shopList.pop();
                }
            }
        }
    }

}
//console.log(str);
f([ 'Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore',
    '5',
    'Include HM',
    'Visit first 2',
    'Visit last 1',
    'Prefer 3 1',
    'Place Library 2' ]);