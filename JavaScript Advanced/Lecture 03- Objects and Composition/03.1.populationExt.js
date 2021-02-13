function solve(townsArray) {
    const towns = {};
    for (let townAsStrings of townsArray) {
        let tokens = townAsStrings.split(' <-> ');
        let name = tokens[0];
        let polpulation = Number(tokens[1]);

        if (towns[name] == undefined) {
            towns[name] = polpulation;
        }
        else {
            towns[name] += polpulation;
        }
    }
    for (const name in towns) {
        console.log(`${name} : ${towns[name]}`);
    }
}