const students = ["Pep", "Nando", "Dó", "Arthur", "Abe"];
function showName(array) {
    for (let i = 0; i < students.length; i++) {
        const studentsMessage = "& name of the student is: " + students[i];
        const indexMessage = "Index number is: " + i;
        console.log(indexMessage, studentsMessage);
    }
}
showName(students);