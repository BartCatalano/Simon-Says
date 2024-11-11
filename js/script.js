// IMPORTO DA HTML
const startBtn = document.getElementById("start-btn");
const listaNumeri = document.getElementById("lista-Numeri");
const contatoretempo = document.getElementById("contatore-tempo");




// GENERAZIONE NUMERI RANDOM
// creo un array per inserire i numeri
// CREO EVENTO DI GIOCO CON PULSANTE CHE AVVIA IL CONTEGGIO
// INSERISCO TUTTO NEL CLICK DEL BOTONE
const arrayNumeri = [];
let contatore = 30;
startBtn.addEventListener("click", function() {
    for (let i = 0; i < 5; i++) {
        const numeroRandom = Math.floor(Math.random() * 100); // Numeri casuali tra 0 e 99
        arrayNumeri.push(numeroRandom + 1);
        listaNumeri.innerHTML = arrayNumeri;
        
        
      }
    const conteggio = setInterval(function(){
        console.log(contatore);
        contatore--;
        contatoretempo.innerHTML = contatore;
        if (contatore === 0) {
            clearInterval(conteggio);
        }
        
        },1000);
    
    
});









  
