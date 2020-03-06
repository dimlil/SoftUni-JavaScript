function solve(input) {
    let arr={};
    for(let i=0;i<input.length;i++){
        let [name,number]=input[i].split(' ');
        //let [name,number]=input[i].split(' ');

        arr[name]=number;
    }
    for(const key in arr){
        console.log(`${key} -> ${arr[key]}`);
    }
}
solve(['Tim 084234432','Peter 421493940']);