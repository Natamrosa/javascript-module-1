function magician(yourFunc) {
  console.log(
    "I am magician! Watch as I mutate an array of strings to your heart's content!"
  );
  const namesArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
  ];
  

  const magicOutput = yourFunc(namesArray);

  return magicOutput;
}
function transformNamesToUpperCase2(names) {
    return names.sort().map(function(nombre) {
        return nombre.toUpperCase()
    })
}

function nametoUpperCase(){
    return name.toUpperCase()
}

console.log(magician(transformNamesToUpperCase2));