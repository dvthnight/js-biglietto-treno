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

// effettuo controlli sulla validità dei chilometri inseriti

if(chilometriUtente <= 9288.2){
    // effettuo controlli sull'età dell'utente

    if(etàUtente < 0 || etàUtente > 120){
        alert("Errore. L'età inserita non può essere accettata. Ti invitiamo a ricaricare la pagina.")
    }else {

        // calcolo prezzo totale in base ai chilometri

        let prezzoTotale = 0.21 * chilometriUtente;
        console.log(prezzoTotale);

        // prezzoTotale = prezzoTotale.toFixed(2)
        // console.log(prezzoTotale)




        // applico sconto se minore di 18 anni o maggiore di 65

        if(etàUtente <= 18){
            prezzoTotale = prezzoTotale - (prezzoTotale * 20) / 100;
        } else if(etàUtente >= 65){
            prezzoTotale = prezzoTotale - (prezzoTotale * 40) / 100;
        }


        console.log(prezzoTotale);


        // mostro la cifra all'utente

        const preventivo = document.getElementById("preventivo");

        preventivo.innerHTML = `${prezzoTotale}€`;
        console.log(preventivo);


    }

}else{
    alert("Errore. La tratta ferroviaria più lunga al mondo è la Transiberiana con i suoi 9288.2km. La invitiamo a ricaricare la pagina.")
}


