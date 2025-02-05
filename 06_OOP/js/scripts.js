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



// 8 - MÉTODOS NA FUNÇÃO CONSTRUTORA --------------------------
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




// 9 - CLASSES ES6 ----------------------
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

//mais um exemplo
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    falar() {
        console.log(`Olá, meu nome é ${this.nome}.`)
    }
}

const pessoa1 = new Pessoa("Gleidson", 22);
console.log(pessoa1);
pessoa1.falar()

//Olhando o prototype
console.log(Object.getPrototypeOf(pessoa1));



// 10 - MAIS SOBRE CLASSES ----------------------
class caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }

    sobreCaminhao() {
        console.log(`O caminhão tem ${this.eixos} e a cor ${this.cor}`);
    }
}

const caminhaoA = new caminhao(8, "vermelho")

console.log(caminhaoA)
caminhaoA.sobreCaminhao();

//mais um exemplo
class carros {
    constructor (marca, ano){
        this.marca = marca;
        this.ano = ano;
    }

    sobreCarro() {
        console.log(`Então, meu carro é um ${this.marca} e é de ${this.ano}.`)
    }
    
}

const carro1 = new carros("corola" , 2002)

console.log(carro1)

carro1.sobreCarro();



// 11 - OVERRIDE (sobrescreve) - sobrescrevendo propriedades ------------------
class moto {
    constructor(nome, cor) {
        this.nome = nome;
        this.cor = cor;
    }
}

const moto1 = new moto("titan", "vermelho")
console.log(moto1)

//criando uma propriedade no prototypo
moto.prototype.cor = "sem cor!"

const moto2 = new moto("CG15")  


console.log(moto2)// apareca normal mas a cor será undefined

console.log(moto.prototype.cor)//aqui veremos a propriedade que está no prototypo




// 12 - SYMBOL  ----------------------------------
/*
Symbol() cria um identificador único.
Esse símbolo será usado como chave de propriedade "oculta".
Propriedades Symbol não aparecem em loops for...in ou Object.keys(), tornando-as "privadas" para uso interno.
*/
class aviao {
    constructor(nome, turbinas) {
        this.nome = nome;
        this.turbinas = turbinas;
    }
}


const asas = Symbol() // Symbol() cria um identificador único.

aviao.prototype[asas] = 2;
/* Estamos adicionando uma nova propriedade no prototype da classe aviao.
[asas] significa que a chave da propriedade é o símbolo asas.
O valor associado é 2 (representando duas asas no avião).
Como a propriedade está no prototype, todas as instâncias de aviao compartilharão essa propriedade. */

const latam = new aviao("latam", 5);

console.log(latam);

console.log(latam[asas]) //Assim acessaremos o valor do Symbol



// 13 - GETTERS e SETTERS ---------------------------