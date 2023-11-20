// Questo è il primo dei due esercizi richiesti - La parola sarà palindroma oppure no?

function isPalindroma(parola) {
    let parolaSenzaSpazi = parola.replace(/\s/g, "").toLowerCase();
    let parolaInvertita = parolaSenzaSpazi.split("").reverse().join("");
    return parolaSenzaSpazi === parolaInvertita;
}

let parolaUtente = prompt("Inserisci una parola:"); //Con l'ausilio di questa variabile, indico all'utente che dovrà inserire la parola che verrà esaminata.
let risultato = isPalindroma(parolaUtente) ? "La parola è palindroma!" : "La parola non è palindroma."; //Questa variabile ha al suo interno una funziona che determinerà se la parole è palindroma o meno.

console.log(risultato); //Con il console log l'utente vedrà stampato sulla console il risultato.