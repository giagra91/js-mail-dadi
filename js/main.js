const acceptedMail = ["topogigio@gmail.com", "pincopallino@gmail.com", "boolean@gmail.com", "classe55@gmail.com", "peakyblinders@netflix.com"];
const userMail = document.getElementById(`user-mail`);


document.getElementById("check-mail").addEventListener("click", function(){

    for (i = 0; i < acceptedMail.length; i++){
        
        let newMail = userMail.value;
        console.log(newMail);
        // console.log(acceptedMail[i]);
    
        // if (newMail === acceptedMail[i]){
        //     console.log("Puoi accedere");
        // } else if (newMail !== acceptedMail[i]) {
        //     console.log("Non puoi accedere");

        // }
    }
})
