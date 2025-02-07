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



