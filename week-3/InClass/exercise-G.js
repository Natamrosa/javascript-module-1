const birthYear = [ 1964, 2008, 1999, 2005,1978, 1985, 1919];
function getAge (year) {
    return new Date().getFullYear() - age
}
function getDrivingStatus(years2){

    const age = getAge(years2)
    if (age >= 17) {
        console.log(`Born in ${years2} can drive`);
    }  
    else {
        const yearsToDrive = 17-age
        console.log(`Born in ${years2} can drive in ${yearsToDrive} years`);
    }
}

const canDrive = birthYear.map(getDrivingStatus);