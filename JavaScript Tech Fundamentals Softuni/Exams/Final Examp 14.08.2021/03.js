/**
 * 
 * @param {Array<String>} input 
 */
function solve(input) {
    let wordsToPutInDictionary = input.shift();
    let wordsForExamp = input.shift();
    let command = input.shift();
    let dictionary = [];
    let obj = {}
    wordsToPutInDictionary.split('|').forEach(e => {
        e = e.trim();
        let newWord = e.split(': ');
        // console.log(newWord);
        let foundTheWord = false;
        for (let i = 0; i < dictionary.length; i++) {
            if (dictionary[i].hasOwnProperty(newWord[0])) {
                dictionary[i][newWord[0]] = dictionary[i][newWord[0]] + ' | ' + newWord[1]
                foundTheWord = true;
            }
        }
        if (foundTheWord == false) {
            obj[newWord[0]] = newWord[1]
            dictionary.push(obj);
        }
        obj = {}
    })
    if (command == 'Hand Over') {
        let result = [];
        dictionary.forEach(e => {
            result.push(Object.keys(e)[0]);
        })
        result.sort((a, b) => a.localeCompare(b))
        console.log(result.join(' '));
    }
    if (command == 'Test') {
        wordsForExamp = wordsForExamp.split(' | ');
        // console.log(wordsForExamp);
        wordsForExamp.forEach(e => {
            for (let i = 0; i < dictionary.length; i++) {
                if (dictionary[i].hasOwnProperty(e)) {
                    // console.log(dictionary[i][e]);
                    let result = '';
                    result += `${e}:\n`;
                    if (dictionary[i][e].includes(' | ')) {
                        let defenitions = dictionary[i][e].split(" | ");
                        defenitions.sort((a, b) => { return b.length - a.length; })
                        defenitions.forEach(el => {
                            result += `-${el}\n`
                        })
                        console.log(result);
                    }
                    else {
                        result += `-${dictionary[i][e]}`;
                        console.log(result);
                    }
                }
            }
        })
    }
}
// solve(["programmer: an animal, which turns coffee into code | programmer: an a| developer: a magician",
//     "fish | domino",
//     "Hand Over"])
solve(["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
    "care | kitchen | flower",
    "Test"])


    //първи ред думи в речника 
    //втори ред думи на които ще бъда изпитван
    //test- подредени дъмите според дължибата им в намаляващ ред
    //hand over само думите подредени по азбучен ред