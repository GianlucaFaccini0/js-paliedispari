// Questo è il primo dei due esercizi richiesti - La parola sarà palindroma oppure no?

function isPalindroma(parola) {
    let parolaSenzaSpazi = parola.replace(/\s/g, "").toLowerCase();
    let parolaInvertita = parolaSenzaSpazi.split("").reverse().join("");
    return parolaSenzaSpazi === parolaInvertita;
}

let parolaUtente = prompt("Inserisci una parola:"); //Con l'ausilio di questa variabile, indico all'utente che dovrà inserire la parola che verrà esaminata.
let risultato = isPalindroma(parolaUtente) ? "La parola è palindroma!" : "La parola non è palindroma."; //Questa variabile ha al suo interno una funziona che determinerà se la parole è palindroma o meno.

console.log(risultato); //Con il console log l'utente vedrà stampato sulla console il risultato.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Questo è il secondo esercizio - pari o dispari?

function generaNumeroCasuale() {
    return Math.floor(Math.random() * 5) + 1;
}

function isPari(numero) {
    return numero % 2 === 0;
}

let sceltaUtente = prompt("Scegli pari o dispari:");
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));

let numeroComputer = generaNumeroCasuale();

let somma = numeroUtente + numeroComputer;

let risultato = isPari(somma) ? "pari" : "dispari";

if ((risultato === "pari" && sceltaUtente.toLowerCase() === "pari") || (risultato === "dispari" && sceltaUtente.toLowerCase() === "dispari")) {
    console.log("Hai vinto!");
} else {
    console.log("Il computer ha vinto!");
}

console.log("Numero utente: " + numeroUtente);
console.log("Numero computer: " + numeroComputer);
console.log("Somma: " + somma);
console.log("La somma è " + risultato + ".");