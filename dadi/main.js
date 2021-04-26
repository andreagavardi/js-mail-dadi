/* 
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve? */

/* creo due lanci casuali di due dadi, quindi numeri da 1 a 6 */

var dadoUtente = (Math.floor(Math.random() * 6)) + 1;
var dadoPc = (Math.floor(Math.random() * 6)) + 1;

console.log(dadoUtente);
console.log(dadoPc);

// valuto chi vince tra i due


switch (true) {
    case dadoUtente>dadoPc:
         messaggio = 'hai vinto, complimenti!!';
        break;
    case dadoUtente==dadoPc:
            messaggio = 'Pareggio';
        break;
    case dadoUtente<dadoPc:
            messaggio = 'hai perso, peccato ritenta..';
        break;
    
}

document.getElementById("lancio_utente").innerHTML= dadoUtente;
document.getElementById("lancio_pc").innerHTML= dadoPc;
document.getElementById("msg").innerHTML= messaggio;
