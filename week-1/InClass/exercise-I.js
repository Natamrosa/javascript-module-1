function calculateBornYear(age) {
    return 2022 - age;
}
const result = calculateBornYear(33);
console.log (result);

function getInfoPerson (name, age){
    const bornAge = calculateBornYear (age);
    return "My name is "+ name + " and I was born in " +
    calculateBornYear(age);
}
const greeting = getInfoPerson("Juan",33);
console.log (greeting);