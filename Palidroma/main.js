// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.


// *** function ***

function palindroma(imput){
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
        console.log(reverseWord)
        if( reverseWord === word){
            console.log("è una parola palindroma");
    }else {
        console.log( word, "non è una parola palindroma");
    }
}
}

// *** function ***

// *** Main ***
 const word = prompt("inserire una parola");

 let reverseWord = ""

 palindroma(word);

// if (word.length %2 === 0){
//     palindroma(word);
// }else
// {
//     console.log( word, "non è una parola palindroma")

//     for (let i = word.length - 1; i >= 0; i--) {
//         reverseWord += word[i];
//         console.log(reverseWord)
//         if( reverseWord === word){
//             console.log("è palindroma");
//     }

// }    
// 
