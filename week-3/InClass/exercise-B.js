const student = ["Jacobo", "Oswaldo", "Linda", "Lina"];
const students2 = ["Miguel", "Luis", "Gabo", "Fernanda", "Andrea"]; 

const allStudents = student.concat(students2);
console.log(allStudents.sort());

function name (person, students) {
    if (students.includes(person) ) {
        return person + " is at the class with " + students.filter(names => names !== "Linda" );
    }
    else {
        return person + " is not at the class with " + students
    }
}
console.log(name("Linda", allStudents));


