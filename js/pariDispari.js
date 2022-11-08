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
if (numEO(resultAdd) == true) {
  if (choiseEO == "pari") {
    alert(
      "la somma è: " + resultAdd + " il numero è pari il giocatore ha vinto"
    );
  } else {
    alert(
      "la somma è: " + resultAdd + " il numero è dispari il computer ha vinto"
    );
  }
} else {
  alert("il numero è dispari");
  if (choiseEO == "dispari") {
    alert(
      "la somma è: " + resultAdd + " il numero è dispari il giocatore ha vinto"
    );
  } else {
    alert(
      "la somma è: " + resultAdd + " il numero è pari il computer ha vinto"
    );
  }
}

function randomNum(min, max) {
  min = 1;
  max = 5;
  return Math.floor(Math.random() * (1 + max - min)) + min;
}

function numEO(number) {
  if (number % 2 == 0) {
    return true;
  }
}
