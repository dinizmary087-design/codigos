class Livro{
    // complete o contrutor aqui
    constructor( titulo,autor,anopublicado){
        //Inicialize as propriedade aqui
        this.titulo = titulo;
        this.autor = autor;
        this.anopublicado = anopublicado
        this.disponivel = true;
    }
    //Implemente os métodos abaixo
    obterInformações(){
        //Deve retornar uma string com título, autor e ano
        return '${this.titulo } por ${this.autor} (${this.anopublicado})';
    }
    estaDisponivel(){
        //Deve retornar thue se o livro estiver disponivel
        return this.disponivel;
    }
    emprestar(){
        // Deve marcar o livro como indisponivel
        this.disponivel = false;
    }
    devolver(){
        //Deve marcar o livro como disponivel 
        this.disponivel = true;
    }
}
// Teste sua implementação 
const meuLivro = new Livro("Capitães da Areia","Jorge Amado",1937);
console.log(meuLivro.obterInformações());
console.log("Disponivel:", meuLivro.estaDisponivel());
meuLivro.emprestar();
console.log("disponivel após emprétimo:", meuLivro.estaDisponivel());
meuLivro.devolver();
console.log("Disponivel após devolução:",meuLivro.estaDisponivel());

function carregarLivrosTabela(){
    console.log("chamou tabelaS");
    
    const livros= [
        new Livro("capitães de Areia","Jorge Amado",1937),
        new Livro("O Alienista","Machado de Assis",1900),
        new Livro("Os Setões","Euclides Cunha",1938),
        new Livro("Iracema","José de Alencar",1910) ];

        livros[3].emprestar();
        let tableLivros=
        document.getElementById("livros-tbody");
        for(let livro of livros){
            let row=
            document.createElement("tr");
            let titulo =
             document.createElement("tr");
            titulo.textContent=livro.titulo;
            let autor= document.createElement("td");
            autor.textContent=livro.autor;
            let ano= document.createElement("td");
            ano.textContent=
            livro.anopublicado;
            let disponivel=
            document.createElement("td");
            disponivel.textContent=
            livro.estaDisponivel()?"sim":"não";
            let tdEmprestar=
            document.createElement("td");
            let btnEmprestar=
            document.createElement("button");
            btnEmprestar.textContent= "emprestar";
            btnEmprestar.disabled=!
            livro.estaDisponivel();
            btnEmprestar.addEventListener("clik",()=>{
                livro.emprestar();
                disponivel.textContent= "não";
                btnEmprestar.disablend=true;
            });
            tdEmprestar.appendChild(btnEmprestar);
            row.appendChild(titulo);
             row.appendChild(autor);
             row.appendChild(ano);
             row.appendChild(disponivel);
            row.appendChild(tdEmprestar);
            tableLivros.appendChild(row)
        }
    }
    document.addEventListener("DOMContentLoaded",carregarLivrosTabela);