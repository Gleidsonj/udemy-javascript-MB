// 1 - tentando entender PROMISES -------------
/*const calculo = new Promise((resolve, reject) => {
    let res = 1 + 1

    if (res == 2) {
        resolve(`Concluido com sucesso`)
    } else {
        reject(`Algo deu errado!`)
    }
})

calculo
.then((result) => {
    console.log(result)
}).catch((erro) => {
    console.log(erro)
})*/


// 2 - Entendendo setTimeout -----------
/*setTimeout(() => {
    console.log("setTimeout esperando o tempo certo para ser executado!")
}, 2000);*/ // é executado após 4 segundos


// 3 - Entendendo setIntervel ----------
/*setInterval(()=> {
    console.log("Executando após intervalo de tempo")
}, 4000)*/ // sendo executado de 4 em 4 segundos sem parar


// 4 - Armazenando uma Promise em uma const --------------
/*const carregarDados = new Promise(() => {
    setTimeout(() => {
        console.log("Esperando tempo certo para ser executada")
    }, 3000);


})
    console.log("Executando antes de promise")

carregarDados.then((resultado) => {
    console.log(resultado)
})*/


// 5 - Armazenando uma Promise em uma function -------------
/*function pegarDados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Problema resolvido!")
        }, 2000)
    })
}

pegarDados().then((resultado) => {
    console.log(resultado)
})

console.log("chamando a função...")*/


// OUTRO EXEMPLO - usando uma Promise dentro de uma function  -------------------

/*function resultSoma(){
    return new Promise((resolve, reject) => {
    let soma = 1 + 2

    if(soma == 2) {
        resolve("Executado com sucesso")
    } else{
        reject("Erro...")
    }
    })
}

resultSoma().then((result) => {
    console.log(result)
}).catch((erro) => {
    console.log(erro)
})

console.log("executando...")*/

//USANDO PROMISE DENTRO DE UMA FUNÇÃO
// function verificarIngredientes(){
//     return new Promise((resolve, reject) => {
//         let temIngrediente = false;

//         if(temIngrediente){
//             resolve("Tem ingredientes, sucesses!")
//         }else {
//             reject("Ingredientes insuficiente, falied!")
//         }
//     })
// }

// verificarIngredientes().then((result) => {
//     console.log(result)
// }).catch((erro) => {
//     console.log(erro)
// })



//USANDO PROMISE EM UMA CONST
// const resultApost = new Promise((resolve, reject) => {
//     let resultJogo = true;

//     if(resultJogo){
//         resolve("Você ganhou aposta, success!")
//     }else {
//         reject("Você perdeu na aposta, falied!")
//     }
// })

// resultApost
// .then((result) => {
//     console.log(result)
// }).catch((erro) => {
//     console.log(erro)
// })


//PRATICANDO ----------------------

// Variável que indica se a partida foi ganha ou não
//let partidaGanha = true;

/**
 * Função que simula o resultado de uma partida de futebol.
 * Retorna uma Promise que será resolvida se a partida for ganha
 * ou rejeitada se a partida for perdida.
 */
// function partidaFutebol() {
//     return new Promise((resolve, reject) => {
//         // Simula um atraso de 2 segundos (2000ms) para processar o resultado da partida
//         setTimeout(() => {
//             if (partidaGanha) {
//                 resolve("Você ganhou a partida, bom jogo!"); // Resolve a Promise com uma mensagem de vitória
//             } else {
//                 reject("Você perdeu, seu perdedor!"); // Rejeita a Promise com uma mensagem de derrota
//             }
//         }, 2000);
//     });
// }

// // Alteramos o valor da variável para false, simulando uma partida perdida
// partidaGanha = false;

// // Chamamos a função que retorna a Promise e tratamos o resultado
// partidaFutebol()
//     .then((result) => {
//         console.log(result); // Caso a Promise seja resolvida, exibe a mensagem de vitória
//     })
//     .catch((falied) => {
//         console.log(falied); // Caso a Promise seja rejeitada, exibe a mensagem de derrota
//     });

// console.log("A partida vai começar....."); // Essa linha será executada imediatamente antes da Promise ser resolvida ou rejeitada




// // Criamos uma Promise já resolvida com o valor da soma 5 + 5
// const promessa = Promise.resolve(5 + 5);

// /**
//  * Como a Promise já está resolvida, o método `.then()` é chamado imediatamente.
//  * Ele recebe o valor da Promise (10) e exibe no console.
//  */
// promessa.then((value) => {
//     console.log(`O resultado da soma é ${value}`); // Exibe: "O resultado da soma é 10"
//     return value; // Retorna o valor (10), mas não estamos utilizando ele em outra operação
// });


// Promisse.ALL -------------------
/**
 * Função que retorna uma Promise que será resolvida após 2 segundos,
 * retornando o valor "10".
 */
function promessa1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`10`); // Após 2 segundos, a Promise é resolvida com o valor "10"
        }, 2000);
    });
}

/**
 * Função que retorna uma Promise resolvida imediatamente com o valor "20".
 */
function promessa2() {
    return new Promise((resolve) => {
        resolve(`20`); // A Promise é resolvida imediatamente com o valor "20"
    });
}

/**
 * Função que retorna uma Promise que será resolvida após 4 segundos,
 * retornando o valor "30".
 */
function promessa3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`30`); // Após 4 segundos, a Promise é resolvida com o valor "30"
        }, 4000);
    });
}

// Exibe no console antes da execução das Promises
console.log(`Executando...`);

/**
 * Promise.all espera todas as Promises serem resolvidas.
 * Somente após todas concluírem, o then() é executado.
 */
Promise.all([promessa1(), promessa2(), promessa3()])
    .then((resultPromess) => {
        console.log("Todos os dados carregados:");
        console.log(resultPromess); // Exibe um array com os resultados das Promises
    })
    .catch((erro) => {
        console.log("Erro ao carregar dados:" + erro); // Caso alguma Promise falhe, o erro será capturado aqui
    });
