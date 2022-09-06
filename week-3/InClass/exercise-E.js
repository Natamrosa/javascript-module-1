/*function birthYears (birthYears) {
    return birthYears - 2022;
}

const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919 ];
const age = birthYears.forEach();

console.log(age);*/

const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919 ];
function edad (birthYear) {
    return new Date().getFullYear() - birthYear
}
const edadperson = birthYears.map(edad);
console.log(edadperson);



