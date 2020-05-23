function loading(percent){
    if(percent===100){
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    }
    else{
        let arr=[".",".",".",".",".",".",".",".",".","."];
        for (let i = 0; i < percent/10; i++) {
            arr[i]='%';
        }
        console.log(`${percent}% [${arr.join('')}]`);
        console.log('Still loading...')
    }
}
loading(30);