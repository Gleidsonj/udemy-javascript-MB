// 1 - variáveis
let nome = "Gleidson"

console.log(nome);

nome = "Gleidson Lima";

console.log(nome)

const idade = 17

console.log(idade)

// 2 - mais sobre variáveis

// let 2teste = "inválido"
// let @teste = "inválido"

let a = 10,
b = 20,
c = 30;

console.log(a, b, c);

const nomecompleto = "Matheus Battisti";
const nomeCompleto = "Gleidson Lima";

console.log(nomecompleto);
console.log(nomeCompleto);


// 3 - prompt
//const cuida = prompt("digite seu nome, coração!");
//console.log(`Seja bem vindo ${cuida}`);


// 4 - alert
//alert(`Seja bem vindo!`)
//let Name = prompt("Digite seu nome:")
//console.log(`Sejá bem vindo ${Name}`);



// 5 - Math

    //math.max
    console.log(Math.max(5, 2, 1, 10));//retorna o maior número
    //math.floor
    console.log(Math.floor(9.7));//arredonda para o número abaixo
    //Math.ceil
    console.log(Math.ceil(3.9))//arredonda para o número acima



// 6 - Console
//console.log("teste!")
//console.error("erro!")// transmite um erro
//console.warn("aviso!")// transmite um aviso



// 7 - if
 

const m = 10;

if (m > 5) {
    console.log("m é maior que 5");
}

const user = "joão"

if (user === "joão") {
    console.log("Sim, esse é joão")
}

if (user === "maria") {
    console.log("boa tarde"+user)
}else {
    console.log("Boa tarde "+user)
}


// 8 - else
const loggendIn = false

if (loggendIn){
    console.log("Está autenticado!")
}else {
    console.log("Não está autenticado!")
}

const q = 10;
const w = 15;

if (q > 5 && w > 20) {
    console.log("Os números são mais altos");
}else {
    console.log("Os números não são mais altos");
}


// 9 - if else
if (1 > 2) {
    console.log("teste")
}else if (2 > 3){
    console.log("teste 2")
}else if (5 > 1) {
    console.log("Agora sim!")
}


const userName = "Matheus"
const userAge = 31

if (userName === "José"){
    console.log("Bem vindo josé!")
} else if (userName === "Matheus" && userAge === 31) {
    console.log("Olá Matheus, você tem 31 anos")
} else {
    console.log("Nenhuma condição aceita!")
}



// 10 - estrutura de repetição - WHILE
var p = 0

while (p < 5) {
    console.log("O número agora é: "+p)
    p++
};



// 11 - do while
/*
let o = 10

do {
    console.log(`O valor de o é ${o}`)
    o++
}while (o < 20)
*/



 
// 12 - for
/*
for (let t = 0; t < 10; t++) {
    console.log("passa a visão "+t)
}

let r = 10

for (r; r > 0; r--) {
    console.log(`O resultado está diminuindo: ${r}`)
}
*/


// 13 - identação