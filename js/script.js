// IMPORTO DA HTML
const startBtn = document.getElementById("start-btn");
const listaNumeri = document.getElementById("lista-Numeri");
const contatoretempo = document.getElementById("contatore-tempo");
const colStart = document.getElementById("col-start");
const colnumber = document.getElementById("col-number");
//prendo gli input vuoti dei numeri da inserire e il bottone submit
const primoNumero = document.getElementById("primo-num");
const secondoNumero = document.getElementById("secondo-num");
const terzoNumero = document.getElementById("terzo-num");
const quartoNumero = document.getElementById("quarto-num");
const quintoNumero = document.getElementById("quinto-num");
const invioDati = document.getElementById("invio-dati");


// GENERAZIONE NUMERI RANDOM
// creo un array per inserire i numeri
// CREO EVENTO DI GIOCO CON PULSANTE CHE AVVIA IL CONTEGGIO
// INSERISCO TUTTO NEL CLICK DEL BOTONE
// RENDO INVISIBILE TUTTO ALLA FINE DEL CD
const arrayNumeriCasuali = [];
let contatore = 15;
startBtn.addEventListener("click", function() {
    for (let i = 0; i < 5; i++) {
        const numeroRandom = Math.floor(Math.random() * 100); // Numeri casuali tra 1 e 100
        arrayNumeriCasuali.push(numeroRandom + 1);
        listaNumeri.innerHTML = arrayNumeriCasuali.join(", ");
        startBtn.disabled = true;
        
        
      }
      
    const conteggio = setInterval(function(){
        contatore--;
        contatoretempo.innerHTML = contatore;
        if (contatore === 0) {
            clearInterval(conteggio);
            // Nascondi il div 'colStart'
            colStart.style.display = "none";
            //visualizza il div "colnumber"
            colnumber.style.display = "inline";
            
        }
        
        },1000);
    
    
});

// PRENDO I DATI INSERITI DALL UTENTE
// event per prendere i numeri inseriti dall'utente e pusharli in array

    const arrayNumeriUtente = [];
invioDati.addEventListener("click", function(event) {
    const numeroUno = parseInt(primoNumero.value);
    const numeroDue = parseInt(secondoNumero.value);
    const numeroTre = parseInt(terzoNumero.value);
    const numeroQuattro = parseInt(quartoNumero.value);
    const numeroCinque = parseInt(quintoNumero.value); 
    arrayNumeriUtente.push(numeroUno,numeroDue,numeroTre,numeroQuattro,numeroCinque);
    event.preventDefault();


});    

// confronto tra numeri utente e numeri random con ciclo for
let numeriCorretti = 0;
    for (let i = 0; i < 5; i++) {
        if (arrayNumeri.includes(arrayNumeriUtente[i])) {
            numeriCorretti++;
        }
    }











  
