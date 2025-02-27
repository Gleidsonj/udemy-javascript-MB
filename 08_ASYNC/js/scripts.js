// // 1 - SETTIMEOUT ------------------

// // Exibe a mensagem "Ainda não executou" imediatamente no console
// console.log("Ainda não executou");

// // A função setTimeout permite que o código espere um certo tempo (2000ms = 2 segundos) 
// // antes de executar a função fornecida, sem bloquear o restante do código.
// setTimeout(function(){
//     // Esta função será executada após 2 segundos e exibe "Requisição Assincrona"
//     console.log("Requisição Assincrona");
// }, 2000);

// // Exibe a mensagem "Ainda não executou 2" imediatamente no console,
// // sem esperar a execução do setTimeout.
// console.log("Ainda não executou 2");

// /*Esse comportamento ilustra como a programação assíncrona funciona: o código continua sendo executado enquanto espera a conclusão de tarefas demoradas (como o setTimeout), permitindo que o programa continue fluindo sem bloqueios.*/



// // 2 - SETINTERVAL ---------------------

// // Exibe a mensagem "foi executada" imediatamente no console
// console.log("foi executada");

// // O setInterval é usado para repetir a execução de uma função a cada 20 segundos (20000ms).
// // A função exibirá a mensagem "seiIntervel sendo executada" no console a cada 20 segundos.
// /*setInterval(function(){
//     console.log("Intervalo assincrono"); // Exibe a mensagem a cada 20 segundos
// }, 20000);*/

// // Exibe a mensagem "foi executada 2" imediatamente no console
// // Este comando será executado logo após o primeiro console.log().
// console.log("foi executada 2");


// /* O setInterval configura a execução de uma função que vai exibir "seiIntervel sendo executada" no console a cada 20 segundos (20000 milissegundos). Porém, a execução da função só começará após 20 segundos, e continuará se repetindo a cada 20 segundos, indefinidamente, até que o intervalo seja cancelado. */


// // 3 - PROMISES -------------------------
// // Criação de uma Promise que já é resolvida imediatamente com o valor da soma de 5 + 5 (que resulta em 10)
// const promessa = Promise.resolve(5 + 5);

// // Exibe a mensagem "Algum código" imediatamente no console
// console.log("Algum código");

// // Aqui, a Promise é resolvida e o valor (10) é passado para o primeiro `.then()`.
// promessa.then((value) => {
//     // O valor da Promise (10) é impresso no console
//     console.log(`A soma é ${value}`);
//     // Retorna o valor para o próximo `.then()`
//     return value;
// })

// // O próximo `.then()` recebe o valor retornado do anterior (10), subtrai 1 e retorna o novo valor (9)
// .then((value) => value - 1)

// // O próximo `.then()` recebe o valor (9) e imprime no console a mensagem "O valor agora é 9"
// .then((value) => console.log(`O valor agora é ${value}`));

// // Exibe a mensagem "Outro código" imediatamente no console
// console.log("Outro código");


// // 4 - FALHA NA PROMISE -----------------


// // Cria uma Promise resolvida imediatamente com o resultado de 4 * "asd".
// // Como "asd" não é um número, a multiplicação resulta em NaN.
// Promise.resolve(4 * "asd")

// // O primeiro .then() recebe o valor resolvido da Promise, que será NaN.
// .then((n) => {
//     // Verifica se o valor recebido é NaN usando Number.isNaN(n).
//     if (Number.isNaN(n)) {
//         // Se for NaN, lança um erro com a mensagem "Valores inválidos".
//         throw new Error("Valores inválidos");
//     }
// })

// // O .catch() captura qualquer erro ocorrido no .then() anterior.
// .catch((err) => {
//     // Exibe no console a mensagem de erro capturada.
    
//     console.log(`Um erro ocorreu: ${err}`);
// });


// 5 - REJEITANDO PROMISES
/* não entendi nada */
/*function checkNumber(n){
    return new Promise((resolve, reject)=> {
        if (n > 10){
            resolve(`O número é maior que 10`)
        } else {
            reject(`O número é muito baixo`)
        }
    })
}

const a = checkNumber(10)
const b = checkNumber(20)

a.then((v) => console.log(`O resultado é ${v}`)).catch((err)=> console.log(`Um erro ocorreu: ${err}`));

b.then((v) => console.log(`O resultado é ${v}`)).catch((err)=> console.log(`Um erro ocorreu: ${err}`));*/



// 8 - ASYNC AWAIT
function dados(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`o problema foi resolvido!`)
        }, 2000)
        
    })
}

console.log(`O problema está sendo solucionado...`)

async function dadosCarregados(){
    const resultado = await dados()
    console.log(`Resultado: ${resultado}`)
    console.log("Sucess!")
}

dadosCarregados()   