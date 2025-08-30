console.log("olá,pessoal!");
let form = document.getElementById("contact-form");
form.addEventListener("submit",enviarformulario);
function enviarformulario(event){
    event.preventDefault();
    let nome= document.getElementById("input-nome").value
    console.log(nome);
    alert(nome+" seu contato foi enviado com sucesso!");
    }
