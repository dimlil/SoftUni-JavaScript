function f(text,word) {
    let censored=text.replace(word,repeat(word));
    while(censored.includes(word)){
        censored=censored.replace(word,repeat(word));
    }
    function repeat(word) {
        let count=[];
/*        for(let i=0;i<word;i++){
            count=count+"*";
        }*/
        while(count.length===word.length){
            count.push("*");
        }
        count.join
        return count;
    }
    console.log(censored);
}
f("A small sentence with some words",'small');