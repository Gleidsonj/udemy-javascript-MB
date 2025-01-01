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



// 6 - CONSOLE
//console.log("teste!")
//console.error("erro!")// transmite um erro
//console.warn("aviso!")// transmite um aviso



// 7 - IF

/*const m = 10;

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
}*/


// 8 - else
/*const loggendIn = false

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
}*/


// 9 - if else
/*if (1 > 2) {
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
}*/



// 10 - estrutura de repetição - WHILE
/*var p = 0

while (p < 5) {
    console.log("O número agora é: "+p)
    p++
}*/



// 11 - DO WHILE
/*
let o = 10

do {
    console.log(`O valor de o é ${o}`)
    o++
}while (o < 20)
*/



 
// 12 - FOR
/*
for (let t = 0; t < 10; t++) {
    console.log("passa a visão "+t)
}

let r = 10

for (r; r > 0; r--) {
    console.log(`O resultado está diminuindo: ${r}`)
}
*/


// 13 - IDENTAÇÃO
/*for (let u =0; u < 10; u++){
    if(u * 2 > 10) {
        console.log(`Maior que 10! ${u}`)
    } else {
        if (u / 2 === 0) {
            console.log(`deu 0`)
        }
    }
}*/


// 14 - BREAK
/*for ( let g = 20; g > 10; g--) {
    console.log(`O valor de g é ${g}`)

    if (g === 12) {
        console.log(`O g é 12`)
        break;
    }
}*/


// 15 - CONTINUE
/*for (let s = 0; s < 10; s = s + 1) {
    //operador resto = %
    if (s % 2 === 0) {
        console.log(`Número par!`)
        continue
    }
    console.log(s);
}*/

// 16 -SWITCH 
/*const job = "Advogado"

switch (job) {
    case "programador":
        console.log("Você é um programador!")
        break

    case "Advogado":
        console.log("Você é um advogado!")
        break

    case "engenheiro":
        console.log("Você é um engenheiro!")
        break

    default:
        console.log("Profissão não encontrada!")
}*/

// SWITCH - "ERRADO"
/*const I = 100

switch (I) {
    case 200:
        console.log("I é 200!")
    
    case 100:
        console.log("I é 100!")
    
    case 10:
        console.log("I é 10!")

    default:
        console.log("I não foi encontrado!")
}*/


