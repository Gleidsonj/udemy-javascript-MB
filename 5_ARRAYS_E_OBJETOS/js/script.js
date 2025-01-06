// 1 - ARRAYS
/*const lista = [1, 2, 3, 4, 5,]

console.log(lista)
console.log(typeof lista)



const itens = ["Gleidson", true, 2, 1.29, []];

console.log(itens);

// 2 - mais sobre arrays
const arr = ["a", "b", "c", "d"];

console.log(arr[0])
console.log(arr[2])
console.log(arr[9])

// 3 - PROPRIEDADES
const numbers = [5, 3, 7]

console.log(numbers.length)
console.log(numbers["length"])

// 4 - MÉTODOS
const otherNumbers = [1, 2, 3];
const twoNumbers = numbers.concat(otherNumbers)

console.log(twoNumbers) // método de concatenação

// outro exemplo de método
let nome = "gleidson lima"
console.log(nome.toUpperCase()) //deixará o texto em maiusculo

let name2 = "GLEIDSON LIMA"
console.log(name2.toLocaleLowerCase()) //deixará o texto em minusculo

console.log(name2.indexOf("G")) //procurará o letra que você escolheu, nesse caso "L" e mostrará o indice


// 5 - OBJETOS (Object Literals)
const person = {
    name: "Gleidson" ,
    age: 22 ,
    jog: "Desenvolvedor"
};

console.log(person); //<- mostrará toda a lista do objeto literal

console.log(person.name); //<- mostrará o "name" que está no objeto, você pode escolhar o que vai aparecer

console.log(person.name.length); //<- mostrará quando caracteres há no name que está dentro do objeto  */


// 6 - CRIANDO E DELETANDO PROPRIEDADES
const car = {
    motor: 2.0,
    marca: "vw",
    modelo: "tiguan",
    km: 20000,
}

console.log(car);//<- mostrando o que tem dentro do objeto literal

car.portas = 4 //<- adicionando nova propriedade ao objeto

console.log(car)//<- mostrando depois de adicionar

delete car.km //<- deletando propriedade

console.log(car)//<- mostrando depois de deletar     


// 7 - MAIS SOBRE OBJETOS

// -> Podemos copiar todas as propriedades de um objeto para outro com o método "ASSIGN"
// -> O object literal é uma instância de um objeto, chamado "Object"
// -> Um objeto ou array criando com Const pode ter seus elementos modificados e propriedades modificados!

//obj: É um objeto literal.
//Object: É o construtor padrão para objetos em JavaScript.
const obj = {
    a: "teste",
    b: true
};

console.log(obj instanceof Object); //-> obj instanceof Object: Retorna true porque obj foi criado como um objeto e herda de Object.prototype


const obj2 = {
    c: []
}

Object.assign(obj2, obj); //copiando de obj para obj2

console.log(obj2)
//o método Object.assign() para copiar as propriedades de obj para obj2]


// 8 - CONHECENDO MELHOR OS OBJETOS
/* 
 - podemos verificar as propriedades de um objeto pelo método Keys de Object;
 - com o método Entries, recebemos arrays dos nomes das propriedades com seus valores.
 */

console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))
//O método Object.keys() em JavaScript é usado para obter um array contendo as chaves (nomes das propriedades) de um objeto. Ele retorna apenas as propriedades enumeráveis próprias do objeto, ou seja, aquelas que não estão na cadeia de protótipos e que são configuradas como enumeráveis.

//Com Entries conseguimos retornar as chaves e valor
console.log(Object.entries(car))


// 9 - MUTAÇÃO (Mutability)
const a = {
    name: "matheus",
}

const b = a
console.log(b)
console.log(a)

console.log(a === b);

a.age = 31 // adicionando propriedade para verificar se "b" também recebe

console.log(b) // "b" também recebeu, cuidado ao usar 

delete b.age // e se deletarmos no "b", continuará no "a"?

console.log(a)// não, o que fizer no "b" acontecerá no "a", isso é um erro no inicio da carreira dos novatos


// 10 - LOOPS EM ARRAYS
/*const users = ["Gleidson", "Gabriel", "Glenda", "Glebyson"]

for (let i = 0; i < users.length; i++) {
    console.log(`O usuário é ${users[i]}`)
} //criando loops em arrays */


// 11 - PUSH E POP
const array = ["a" , "b" , "c"]
array.push("d") //Método "PUSH" adiciona elementos no final do array, podendo adicionar vários elementos separados por virgula
console.log(array)



const frutas = ["banana", "beterraba", "melancia"]
frutas.pop()//Método "POP" usado para remover último elemento do array, diminuindo seu tamanho
console.log(frutas)



//12 - SHIFT E UNSHIFT
const letters = ["a", "b", "c", "d"]

const addLetter = letters.shift() //Método "SHIFT" remove o primeiro elemento do array, diminuindo seu tamannho
console.log(letters)
console.log(addLetter)


const Letters = ["u", "b", "ç"]

const newLetters = Letters.unshift("b", "v")//Método "UNSHIFT" adiciona elementos no inicio do array, aumentando o seu tamanho 
console.log(Letters)
console.log(newLetters)



// 13 - indexOf e lastIndexOf
const myElements = ["morango", "maça", "abacate", "pêra", "abacate", "maça"]

//indexOf procura o primeiro elemento e retorna o indice, dois exemplos abaixo
console.log(myElements.indexOf("maça"))
console.log(myElements.indexOf("abacate"))

console.log(myElements[2])//retorna o valor do indice 2
console.log(myElements[myElements.indexOf("abacate")])//esse também


//lastIndexOf retorna o indice do ultimo elemento que corresponde o valor
console.log(myElements.lastIndexOf("abacate"))
console.log(myElements.lastIndexOf("maça"))


// 14 - SLICE
const testeSlice = ["a", "b", "c", "d", "e", "f"]

const subArray = testeSlice.slice(2,5)

//O método slice() em JavaScript é utilizado para extrair uma cópia superficial de uma porção de um array ou string, sem modificar o array original. Ele retorna um novo array (ou string), contendo os elementos ou caracteres dentro do intervalo especificado
console.log(subArray)

const subArray2 = testeSlice.slice(1, 4 + 1)//com o + podemos adicionar mais quantos indices quisermos
console.log(subArray2)


const subArray3 = testeSlice.slice(3)//pegará todos apartir do indice 3
console.log(subArray3)