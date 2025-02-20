// APRENDENDO FUNÇÕES ASYNC - AWAIT

// // Função que simula uma Promise. Ela retorna um valor após 2 segundos.
// function promessa1() {
//     return new Promise((resolve) => { // Cria uma nova Promise.
//         setTimeout(() => { // Função que será executada após 2 segundos.
//             resolve(`Primeira Promessa 1`); // Quando a Promise for resolvida, esse valor é retornado.
//         }, 2000); // A Promise será resolvida após 2 segundos.
//     });
// }

// // Função que simula outra Promise. Ela retorna um valor após 3 segundos.
// function promessa2() {
//     return new Promise((resolve) => { // Cria uma nova Promise.
//         setTimeout(() => { // Função que será executada após 3 segundos.
//             resolve(`Segunda Promessa 2`); // Quando a Promise for resolvida, esse valor é retornado.
//         }, 3000); // A Promise será resolvida após 3 segundos.
//     });
// }

// // Função que simula mais uma Promise. Ela retorna um valor após 4 segundos.
// function promessa3() {
//     return new Promise((resolve) => { // Cria uma nova Promise.
//         setTimeout(() => { // Função que será executada após 4 segundos.
//             resolve(`Terceira Promessa 3`); // Quando a Promise for resolvida, esse valor é retornado.
//         }, 4000); // A Promise será resolvida após 4 segundos.
//     });
// }

// // Função assíncrona que aguarda as Promises uma por uma, na ordem.
// async function retornaDados() {
//     // Aqui, a execução do código vai aguardar a resolução de cada Promise em sequência.
//     const resultado1 = await promessa1(); // Espera a resolução de 'promessa1'
//     console.log(resultado1); // Exibe o valor resolvido pela 'promessa1'

//     const resultado2 = await promessa2(); // Espera a resolução de 'promessa2'
//     console.log(resultado2); // Exibe o valor resolvido pela 'promessa2'

//     const resultado3 = await promessa3(); // Espera a resolução de 'promessa3'
//     console.log(resultado3); // Exibe o valor resolvido pela 'promessa3'
// }

// // Chama a função assíncrona para iniciar o processo
// retornaDados();





// 2 - PRATICANDO PROMISE
// Definindo a função assíncrona 'dados'
// async function dados() {
//     // Retorna uma Promise que será resolvida após 2 segundos (1000 milissegundos)
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             // A Promise será resolvida com a mensagem após o tempo do setTimeout
//             resolve(`Esperando o tempo de setTimeout...`);
//         }, 2000); // Espera 2 segundos antes de resolver
//     });
// }

// // Chamando a função 'dados' e manipulando o resultado com o '.then'
// dados().then((result) => {
//     // Quando a Promise for resolvida, o valor retornado será impresso no console
//     console.log(result); // Exibe: "Esperando o tempo de setTimeout..." após 2 segundos
// });


// 3 - FUNCTION ASSÍNCRONA
let problema = false;

function meusDados(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(problema){
                resolve(`Resolvido, Sucess!`)
            }else {
                reject(`Erro: Falied!`)
            }
        }, 3000)   
    })
}

meusDados()
.then((result) => {
    console.log(result)
})
.catch((error) => {
    console.log(error)
})


// 4 - ASYNC/FUNCTION com FUNCTION
function plano1() {
    return new Promise((resolve) => {
        resolve(`Plano 1 funcionou, sucess!`)
    })
}
function plano2() {
    return new Promise((resolve) => {
        resolve(`Plano  funcionou, sucess!`)
    })
}
function plano3() {
    return new Promise((resolve) => {
        resolve(`Plano 3 funcionou, sucess!`)
    })
}


Promise.all([plano1(), plano2(), plano3()])
.then((resultPlan) => {
    console.log(resultPlan)
})
