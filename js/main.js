const word = prompt("Inserisci una parola");
const wordInv = wordRev(word);
if (word === wordInv) {
  console.log("La parola è palindroma");
} else {
  console.log("La parola non è palindroma");
}

function wordRev(wordReverse) {
  const wordReve = wordReverse.split("").reverse().join("");
  return wordReve;
}
