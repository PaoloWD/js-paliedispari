const choiseEO = prompt("Scegli pari o dispari");
const choiseNum = prompt("Scegli un numero da 1 a 5");
if (isNaN(choiseNum) || choiseNum < 1 || choiseNum > 5) {
  alert("Inserisci un numero valido");
} else if (choiseEO !== "pari" && choiseEO !== "dispari") {
  alert("Scegli tra pari e dispari");
}
const numChois = parseInt(choiseNum);
console.log("numero scelto", numChois);
const randomNumInt = parseInt(randomNum());
console.log("numero casuale", randomNumInt);
let resultAdd = numChois + randomNumInt;
console.log("la somma è:", resultAdd);
resultfunc = numEO(resultAdd);
if (
  (choiseEO === "pari" && resultfunc === true) ||
  (choiseEO === "dispari" && resultfunc === false)
) {
  console.log("hai vinto");
} else {
  console.log("hai perso");
}

function randomNum(min, max) {
  min = 1;
  max = 5;
  return Math.floor(Math.random() * (1 + max - min)) + min;
}

function numEO(num) {
  if (num % 2 == 0) {
    console.log("il risultato è pari");
    return true;
  } else {
    console.log("il risultato è dispari");
    return false;
  }
}
