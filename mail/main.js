/* 
Chiedi all’utente la sua email, 
controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo. */


// creo una lista di mail tramite un array

var listaMail = ['andrea@gmail.com', 'marco@gmail.com', 'luca@gmail.com', 'mario@gmail.com', 'francesca@gmail.com', 'elisabetta@gmail.com', 'federica@gmail.com', 'ivan@gmail.com'];
console.log(listaMail);

// chiedo all'utente di inserire la sua mail

var mailUtente = prompt('Inserisci la tua mail e controlleremo se è presente nei nostri sistemi');

// controllo se è presente nell'elenco

var messaggio = 'la tua mail non è presente nell\'elenco';
for (let i = 0; i < listaMail.length; i++) { 

    if (mailUtente == listaMail[i]) {
        messaggio = 'la tua mail è presente nell\'elenco';
    }  
}

document.getElementById("lista_mail").innerHTML = "l\'elenco disponibile è " + listaMail;
document.getElementById("mail_utente").innerHTML = "la mail inserita è: " + mailUtente;
document.getElementById("msg").innerHTML = messaggio;
console.log(messaggio);