function solve(arr,search) {
    let bool=false;
    for(let i=0;i<=arr.length;i++)
    {if(search===arr[i]){
        console.log("true");
        bool=true;
        break;}

        else if(search!==arr[i]||bool==false){
            continue;
        }

    }
    if(bool==false){
        console.log("false");
    }
}
solve([1,2,3,4,5],1);
