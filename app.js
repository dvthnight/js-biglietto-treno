/*Descrizione:
Il programma dovrà chiedere all’utente il numero di chilometri 
che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
L’esercizio richiede di fare un minimo di controlli sui dati inseriti dall’utente.*/


// chiedere all'utente di inserire i dati

const chilometriUtente = prompt("Inserisci il numero dei chilometri che vorresti percorrere");
console.log(chilometriUtente);

const etàUtente = prompt("Inserisci la tua età");
console.log(etàUtente);

// calcolo prezzo totale in base ai chilometri

let prezzoTotale = 0.21 * chilometriUtente;
console.log(prezzoTotale);

// prezzoTotale = prezzoTotale.toFixed(2)
// console.log(prezzoTotale)


const preventivo = document.getElementById("preventivo");

// applico sconto se minore di 18 anni

if(etàUtente <= 18){
    prezzoTotale = prezzoTotale - (prezzoTotale * 20) / 100;
}

console.log(prezzoTotale)


preventivo.innerHTML = prezzoTotale;
console.log(preventivo);