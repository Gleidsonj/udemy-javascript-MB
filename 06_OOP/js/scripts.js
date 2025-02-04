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


// 3 - PROTOTYPE
/*const text = "asd";

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeO(bool));

const arr = [];
console.log(Object.getPrototypeOf(arr));*/



// 4 - MAIS SOBRE PROTOTYPE
/*const myObject = {
    a: "b"
}

console.log(Object.getOPrototypeOf(myObject)
)*/


 
// 5 - CLASSES BÁSICAS
const cachorro = {
    raca: null,
    patas: 4
};

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "pastor alemão";

console.log(pastorAlemao);

const rothvaller = Object.create(cachorro);

rothvaller.raca = "rothvaller";

console.log(rothvaller);
console.log(rothvaller.patas)

/* O que é Prototype em JavaScript?
O prototype (protótipo) é um mecanismo de herança em JavaScript. Em vez de copiar propriedades e métodos de um objeto para outro, JavaScript cria uma cadeia de protótipos, onde um objeto pode herdar características de outro.

Cada objeto em JavaScript tem um protótipo, que é outro objeto do qual ele herda propriedades e métodos. Isso significa que, se um objeto não tiver uma propriedade ou método, o JavaScript procurará no seu protótipo. */


// 6 - FUNÇÃO COMO CLASSE - FUNÇÃO CONSTRUTORA
// modo mais sofisticado, mais moderno e simples de fazer!

function criarCachorro(nome, raca) {
    const cachorro = Object.create({}) 

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}

const bob = criarCachorro("bob", "vira lata")
console.log(bob)

const kangal = criarCachorro("kabib", "kangal")
console.log(kangal)



// 7 - FUNÇÕES COMO CLASSE
function Cachorro (nome, raca) {
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro("gregor", "husky")
console.log(husky)



// 8 - MÉTODOS NA FUNÇÃO CONSTRUTORA
// implementando método na função cachorro
Cachorro.prototype.uivar = function () {
    console.log("auuuuuuuu!")
}

console.log(Cachorro.prototype)

husky.uivar()

// funções dentro de objetos são chamados de métodos.
// podemos definir métodos em funções construtoras e classes.
// usar PROTOTYPE economiza memória.
// com ES6, podemos usar classes para organizar melhor métodos e propriedades.




// 9 - CLASSES
// mais usado e mais moderno
/* Vantagens da Classe ES6:

O código fica mais limpo e organizado.
Mais fácil de entender para quem já conhece outras linguagens.
Os métodos são adicionados diretamente no prototype, economizando memória. */
class cachorroClass{
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
}

const bobs = new cachorroClass("tob", "labrador")

console.log(bobs)