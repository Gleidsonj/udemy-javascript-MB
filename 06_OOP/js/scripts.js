// 1 - MÉTODOS

// Objeto animal
const animal = {
    //propriedade chamada "nome"
    nome: "Bob",

    /*
    -> Um método chamado "latir"
    - é uma FUNÇÂO armazenada como uma propriedade.
    - um método é simplesmente uma função associada a um objeto.
    */
    latir: function(){
        console.log("au au")
    }
}

/* Aqui criamos um objeto literal chamado "animal" que contém:
- Uma propriedade "nome" com o valor "bob" 
- Um método "latir", que quando chamado, exibe "au au* no console
*/

console.log(animal.nome)// Acessa a propriedade "nome" do objeto "animal" e exibe seu valor no console

animal.latir()// Invoca o método "latir" do objeto "animal", executa a função associada ao método, que contém o comando "console.log("au au")"



// APROFUNDANDO EM MÉTODOS

/* métodos são utilizados para "interagir também com as propriedades do seu objeto.
- podemos exibir elas ou modifica-las;
- podemos nos referenciar com o próprio objeto com a palavra reservada THIS" */

const pessoa = {
    nome : "matheus",

    getNome: function () {
        return this.nome;
    },

    //alterando valores, adicionando novo nome usando THIS
    setNome: function(novoNome) {
        this.nome = novoNome;
    }
}

console.log(pessoa.nome)
console.log(pessoa.getNome())

//nome novo, valor alterado
pessoa.setNome("joaquim")
console.log(pessoa.getNome())