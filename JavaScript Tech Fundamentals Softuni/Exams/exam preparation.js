function f(input) {
    let games=[];
    let gamesWithDLC=[];
    let gamesWithoutDLC=[];

    let inputArr=input[0].slice(', ');
    for (let strng of inputArr) {
        let obj={};
        if(!string.includes((":"))){
            let [name,prace]=string.split("-");
            prace+=price;
            if(games.find((el)=>el.name===name)){
                obj.name=name;
                obj.price=price;
                games.push(obj);
            }
        }
        else{
            let [name,dlc]=string.split(":");
            let gameToAddDlc=games.find((el)=>el.name===name);
            if(gameToAddDlc){
                gameToAddDlc.dlc=dlc;
                gameToAddDlc.price=gameToAddDlc.price+(gameToAddDlc*0.2);
            }
        }
    }
    for (let obj of games) {
        if(obj.hasOwnProperty('dlc')){
            obj.price=obj.price*0.5;
            gamesWithDLC.push(obj);
        }
        else{
            obj.price=obj.price-(obj.price*0.2);
            gamesWithoutDLC.push(obj);
        }
    }
    gamesWithDLC.sort((a,b)=>{
        return a.price-b.price;
    });
    gamesWithoutDLC.sort((a,b)=>{
        return b.price-a.price;
    });
    for (let obj of gamesWithDLC) {
        console.log(`${obj.name}- ${obj.dlc}- ${obj.price.toFixed(2)}`);
    }
    for (let obj of gamesWithDLC) {
        console.log(`${obj.name}- ${obj.price.toFixed(2)}`);
    }

}