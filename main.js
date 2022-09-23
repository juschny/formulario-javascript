const formulario = document.getElementById("formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

formulario.addEventListener("submit", (e) =>{

    
    e.preventDefault();
    

    if(!regUserName.test(userName.value)) {
        alert('formato no válido');
        return ;
    }
    if(!regUserEmail.test(userEmail.value)) {
        console.log("formato no válido");
        return ;
    }



    console.log("formulario enviado");

    //console.log("formulario procesado");
    //console.log(userName.value);
    //console.log(userEmail.value);

});