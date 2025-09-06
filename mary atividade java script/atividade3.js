let largura=7;
let altura=3.0;
let comprimento= 2*(altura+largura);
let area = largura*altura;

console.log("largura:",largura,);
console.log("altura:",altura,"m²");
console.log("area:",area);
console.log("comprimento:",comprimento);



function calcular(){
    let largura=parseFloat(document.getElementById("largura").value);
    let altura=parseFloat(Document.getElementById("altura").value);
    let m=largura/(largura*altura);
    console.log("largura:"+ altura+"M");
    document.getElementById("resultado").value="seu valor é:"+largura.toFixed(2);
}