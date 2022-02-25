// Array contenente cinque mail 
const acceptedMail = ["topogigio@gmail.com", "pincopallino@gmail.com", "boolean@gmail.com", "classe55@gmail.com", "peakyblinders@netflix.com"];
// Variabile riferita alla mail dell'utente
const userMail = document.getElementById(`user-mail`);
// Variabile riferita all'output della ricerca dopo il ciclo for
let userOutput = document.getElementById("mail-output");
// Variabile riferita al check della mail
let emailFound = false;

// addEventListener per avviare il ciclo e verificare la mail
document.getElementById("check-mail").addEventListener("click", function(){

    // userMail.value="";
    let newMail = userMail.value.toLowerCase();
    for (i = 0; i < acceptedMail.length; i++){
        
        if (newMail === acceptedMail[i]){
            emailFound = true;
        }
        
    }

    if (emailFound === true){
        emailFound = true;
        userOutput.innerHTML= "La tua mail è presente, puoi accedere";
    } else {
        emailFound = false;
        userOutput.innerHTML= "La tua mail non è presente, non puoi accedere";
    }
})

// Bottone cancella tutto
document.getElementById("clean").addEventListener("click", function(){
    userOutput.innerHTML= "";
    userMail.value="";
})

// Gioco dadi
// Variabile del numero casuale associato all'utente
let userNumber = document.getElementById("my-number");
// Variabile del numero casuale associato al pc
let pcNumber = document.getElementById("pc-number");
// Variabile del risultato del gioco
let gameOutcome = document.getElementById("game-outcome");

// addEventListener su click per avviare il gioco
document.getElementById("play").addEventListener("click", function(){

    // Variabile riferita all'estrazione del numero casuale associato all'utente
    let newUserNumber = userNumber.innerHTML=Math.floor((Math.random()*6)+1);
    // Variabile riferita all'estrazione del numero casuale associato al pc    
    let newPcNumber = pcNumber.innerHTML=Math.floor((Math.random()*6)+1);

    if (newUserNumber > newPcNumber){
        gameOutcome.innerHTML=`Congratulazioni, hai vinto!`;
    } else if (newUserNumber < newPcNumber) {
        gameOutcome.innerHTML=`Mi dispiace, hai perso!`;
    } else {
        gameOutcome.innerHTML=`Nessun vincitore, riprova!`;
    }

})