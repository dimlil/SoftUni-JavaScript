function solve(input) {
    let students=new Map();
    for(const line of input){
        let [name,...gradesInput]=line.split(' ');
        let grades=gradesInput.map(Number);
        if(students.has(name)){
            grades= students.get(name).concat(grades);
        }
        students.set(name,grades);
    }
    const avg=grades=>grades.reduce((a,b)=>a+b)/grades.length;
    [...students.entries()]
        .sort((a,b)=>avg(a[1])-avg(b[1]))
        .forEach(s=>console.log(`${s[0]}: ${s[1].join(', ')}`));
}