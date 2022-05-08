// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// chiedere all'utente di scegliere pari o dispari

let sceltaUtente = prompt("Scegli pari o dispari")

const pari = sceltaUtente

let numeroUtente = Number(prompt("inserire numero da 1 a 5)"));


// il computer genera randomicamente un numero e lo salva 

let numeroPc = Math.floor(Math.random() * 5) + 1;
console.log(numeroPc);

// sommare le due variabili 

sum = (numeroUtente + numeroPc);
console.log(sum);

function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}



// funzione pari dispari richiamata
isEven(sum)
if (true)
        if (sceltaUtente === pari){
            console.log ("you win");
        }else{
            console.log(" try again");
        }
   
else if (false){
        if (sceltaUtente != pari){
            console.log ("you win");
        }else{
            console.log(" try again");
        }
    }

// se la variabile del giocatore è uguale all'esito della funzione

// hai vinto

// else try again

