const arrayOfNames = ["Xio", "Nata", "Gabo", "Miguel", "Oswaldo"];

function findByName(names, nameToFind) {
    const userFinded = names.find((name)=>{
        return name.toLowerCase() === nameToFind.toLowerCase()
    })
    if (userFinded) {
        return "User Found " + userFinded
    } else {
        "User not Found"
    }
}

console.log(findByName(arrayOfNames, "Miguel"));