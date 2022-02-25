const acceptedMail = ["topogigio@gmail.com", "pincopallino@gmail.com", "boolean@gmail.com", "classe55@gmail.com", "peakyblinders@netflix.com"];
const userMail = document.getElementById(`user-mail`);
let userOutput = document.getElementById("mail-output");

let emailFound = false;

document.getElementById("check-mail").addEventListener("click", function(){

    // userMail.value="";
    let newMail = userMail.value.toLowerCase();
    for (i = 0; i < acceptedMail.length; i++){
        
    
        if (newMail === acceptedMail[i]){
            console.log("Puoi accedere");
            emailFound = true;
        }
        
    }

    if (emailFound === true){
        emailFound = true;
        userOutput.innerHTML= "Puoi accedere";
    } else {
        emailFound = false;
        userOutput.innerHTML= "Non puoi accedere";
    }
})


// Gioco dadi
let userNumber = document.getElementById("my-number");
let pcNumber = document.getElementById("pc-number");
let gameOutcome = document.getElementById("game-outcome");

document.getElementById("play").addEventListener("click", function(){

    let newUserNumber = userNumber.innerHTML=Math.floor((Math.random()*6)+1);
    let newPcNumber = pcNumber.innerHTML=Math.floor((Math.random()*6)+1);

    if (newUserNumber > newPcNumber){
        gameOutcome.innerHTML=`Congratulazioni, hai vinto!`;
    } else if (newUserNumber < newPcNumber) {
        gameOutcome.innerHTML=`Mi dispiace, hai perso!`;
    } else {
        gameOutcome.innerHTML=`Nessun vincitore, riprova!`;
    }

})