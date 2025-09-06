let peso=70;
let altura=1.75;
let imc=peso
console.log("peso:70;"+peso+"kg");
console.log("altura:"+ altura+"m");
console.log("seu IMC é:"+imc.toFixed(2));
function calcularIMC(){
    let peso=parseFloat(document.getElementById("peso").value);
    let altura=parseFloat(Document.getElementById("altura").value);
    let IMC=peso/(altura*altura);
    console.log("peso:"+ peso +"kg");
    document.getElementById("resultado").value="seu IMC é:"+imc.toFixed(2);
}
let button= document.getElementById("calcular");
 button.addEventListener("click", calcularIMC);
