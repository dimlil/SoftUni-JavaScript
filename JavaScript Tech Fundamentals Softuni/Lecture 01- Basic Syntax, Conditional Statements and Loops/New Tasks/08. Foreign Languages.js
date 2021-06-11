function solve(contry) {
    if (contry == "USA" || contry == "England") {
        console.log("English");
    }
    if (contry == "Spain" || contry == "Argentina" || contry == "Mexico") {
        console.log("Spanish");
    }
    if(contry != "USA" && contry != "England" && contry != "Spain" && contry != "Argentina" && contry != "Mexico") {
        console.log("unknown");
    }
}
solve('USAasfasd')
solve('USA')
solve('Spain')