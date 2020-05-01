function f(arr) {
    let elementsOfArr;
    let end=arr.pop();
    let stores=[];
    let items=[];
    let result={};
    for (let arrElement of arr) {
        elementsOfArr=arrElement.split("->");
        if(elementsOfArr[0]==='Add'){
            stores=elementsOfArr[1];
            items=elementsOfArr[2];
            result.store=stores;
            result.items=items;
/*            console.log(elementsOfArr);
            console.log("                          ");
            console.log(stores);
            console.log(items);
            console.log("                          ");*/
            console.log(result);
        }
        if(elementsOfArr[0]==='Remove'){

/*          arr.splice(elementsOfArr,elementsOfArr);
            console.log(elementsOfArr);*/
        }
    }
}
f([ 'Add->PeakSports->Map,Navigation,Compass',
    'Add->Paragon->Sunscreen',
    'Add->Groceries->Dried-fruit,Nuts',
    'Add->Groceries->Nuts',
    'Add->Paragon->Tent',
    'Remove->Paragon',
    'Add->Pharmacy->Pain-killers',
    'END' ]);