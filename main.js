
//dichiaro i 16 numeri in un array NON random
//
// var array = [13, 14, 9, 18, 15, 3, 46, 68, 44, 37, 88, 24, 99, 56, 67, 76,];

//faccio pushare la variabile nell array

var arrayNumericomputer = [];

//funzione che dichiara la scelta di un numero random

function getRandom(min,max) {
  return Math.floor(Math.random () * (max-min +1) +min );
}

//ciclo For che resituisce 16 numeri random

for (var i = 0; i < 16; i++) {
  var numero = getRandom(1,100);
  arrayNumericomputer.push(numero);
}

console.log(arrayNumericomputer);

//chiedo all utente un numero da 1 a 100 e lo inserisco in un array utente

var arrayUtente=[];

var numeroUtente = parseInt(prompt("Inserisci il numero da 1 a 100"));

arrayUtente.push(numeroUtente);

console.log(arrayUtente);



provaNumero = true;
numeroUtente = 1;

for (var i = 0; i < arrayNumericomputer.length; i++)
{
  if (arrayUtente == arrayNumericomputer[i])
  {
    provaNumero = true;
  }
  console.log(provaNumero);
}



//pausa.
