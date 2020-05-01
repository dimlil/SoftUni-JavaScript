function f(words,searchigWords,comand) {
    let wordAndDictionary;
    while(words.includes("|")===true){
        wordAndDictionary=words.substr(0,10);
    }
    console.log(wordAndDictionary);
}
f("programmer: an animal, which turns coffee into code | developer: a magician","Pesho | Gosho",
    "List")