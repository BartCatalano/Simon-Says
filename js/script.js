
// GENERAZIONE NUMERI RANDOM
// creo un array per inserire i numeri
const arrayNumeri = [];

for (let i = 0; i < 5; i++) {
    const numeroRandom = Math.floor(Math.random() * 100); // Numeri casuali tra 0 e 99
    arrayNumeri.push(numeroRandom + 1);
    
  }
  

//   CREO UN CONTO DA 30' A 0'
let contatore = 30;
const conteggio = setInterval(function(){
console.log(contatore);
contatore--;
if (contatore === 0) {
    clearInterval(conteggio);
}

},100);


  
