function main(inputArray) {
    let countOfStudents=Number(inputArray.shift());
    let countOfLecturs=Number(inputArray.shift());
    let initialBonus=Number(inputArray.shift());
    initialBonus+=5;
    let attendancesOfEachStudent=inputArray;
    let highesBonus=0;
    let highesAttendances=0;
    for (let i = 0; i < countOfStudents; i++) {
 
        let attendances=Number(attendancesOfEachStudent[i]);
        let result=(attendances*initialBonus)/countOfLecturs;
        if(result>highesBonus){
            highesBonus=result;
            highesAttendances=attendances;
        }
    }
    console.log(`Max Bonus: ${highesBonus.toFixed(0)}.`);
    console.log(`The student has attended ${highesAttendances} lectures.`);
    
}
main([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ])
  main([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ])