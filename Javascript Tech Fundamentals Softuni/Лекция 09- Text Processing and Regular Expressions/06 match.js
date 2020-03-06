function solve(text) {
    let pattern=/\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let result=[];
    let modify=[];
        while((modify=pattern.exec(text))!==null){
            result.push(modify[0]);
        }
    console.log(result.join(' '));
}
solve(['Ivan Ivanov', 'Ivan ivanov', 'ivan Ivanov', 'IVan Ivanov', 'Test Testov', 'Ivan	Ivanov']);