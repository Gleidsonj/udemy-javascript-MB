// 1 - HERANÇA
// Classe base (superclasse) que representa um carro genérico
class Carro {  
    /**
     * Construtor da classe Carro
     * @param {string} nome - Nome do carro
     * @param {string} ronco - Som do motor do carro
     */
    constructor(nome, ronco) {
        this.nome = nome;   // Define o nome do carro
        this.ronco = ronco; // Define o som do motor do carro
    }
}

// Subclasse MilitarA, que representa um carro militar com portas e bancos adicionais
class MilitarA extends Carro {  
    /**
     * Construtor da classe MilitarA
     * @param {string} nome - Nome do carro militar
     * @param {string} ronco - Som do motor do carro militar
     * @param {number} portas - Número de portas do carro militar
     * @param {number} bancos - Número de bancos do carro militar
     */
    constructor(nome, ronco, portas, bancos) {
        super(nome, ronco); // Chama o construtor da superclasse (Carro)
        this.portas = portas; // Adiciona a propriedade "portas"
        this.bancos = bancos; // Adiciona a propriedade "bancos"
    }
}

// Criando um objeto da classe MilitarA
const militar1 = new MilitarA("Honda Civic", "Vruum", 4, 6);
console.log(militar1);  
// Saída esperada: MilitarA { nome: "Honda Civic", ronco: "Vruum", portas: 4, bancos: 6 }


// Criando outra subclasse MilitarB, que representa outro tipo de carro militar sem novas propriedades
class MilitarB extends Carro {  

    constructor(nome, ronco) {
        super(nome, ronco); // Chama o construtor da superclasse (Carro)
    }
}

// Criando um objeto da classe MilitarB
const militar2 = new MilitarB("Boing", "Vruum");
console.log(militar2);  
// Saída esperada: MilitarB { nome: "Boing", ronco: "Vruum" }



//-----------------------------------------
console.log("------------------------------------------------------------")
//----------------------------------------



class dadoBase {
    constructor(nome, cargo) {
        this.nome = nome;
        this.cargo = cargo;
    }

    falar () {
        console.log(`Funcionarios - Nome: ${this.nome} Cargo: ${this.cargo} Idade:${this.idade}.`)
    }
}

class funcionario extends dadoBase {
    constructor(nome, cargo, idade) {
        super(nome, cargo)
        this.idade = idade;
    }
}

const joaoFuncionario = new funcionario("joão", "repositor", 22)
console.log(joaoFuncionario)
console.log(joaoFuncionario.falar())



//---------------------------------------------------------------------
console.log("----------------------------------------------------------------")
//---------------------------------------------------------------------


// MÉTODOS EM HERANÇAS 
// Classe base (superclasse)
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    // Método da superclasse
    fazerSom() {
        console.log("Som genérico...");
    }
}

// Subclasse que herda de Animal
class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome); // Chama o construtor da superclasse
        this.raca = raca;
    }
}

// Criando um objeto da subclasse
const dog = new Cachorro("Rex", "Labrador");

// Chamando um método herdado
dog.fazerSom(); // Saída: "Som genérico..."



//------------------------------------------------------------------------------------
console.log("-------------------sobrescrevendo métodos--------------------")
//------------------------------------------------------------------------------------

class ANimal {
    constructor(nome) {
        this.nome = nome;
    }

    fazendoSom() {
        console.log("Som genérico...");
    }
}

class cachorro extends ANimal {
    constructor(nome, raca) {
        super(nome);
        this.raca = raca;
    }

    // Sobrescrevendo o método da superclasse
    fazendoSom() {
        console.log("Au Au! 🐶");
    }
}

const Dog = new cachorro("Rex", "Labrador");

Dog.fazendoSom(); // Saída: "Au Au! 🐶"




//--------------------------------------------------------------------
console.log("---------------------------------Chamando um Método da SuperClasse com 'SUPER'-------------------------------------------")
//--------------------------------------------------------------------


class ANImal {
    constructor(nome) {
        this.nome = nome;
    }

    emitirSom() {
        console.log("Som genérico...");
    }
}

class Gato extends ANImal {
    constructor(nome) {
        super(nome);
    }

    // Sobrescrevendo o método, mas chamando o original da superclasse
    emitirSom() {
        super.emitirSom(); // Chama o método da superclasse
        console.log("Miau Miau! 🐱");
    }
}

const gato = new Gato("Whiskers");
gato.emitirSom();
// Saída:
// "Som genérico..."
// "Miau Miau! 🐱"