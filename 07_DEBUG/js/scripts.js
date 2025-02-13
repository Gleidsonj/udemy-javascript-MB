// 1 - STRICT
/*"use strict";

calor = "muito quente man"
/* No modo normal (sem "use strict"), o JavaScript criaria automaticamente a variável calor no escopo global. Porém, como o modo estrito está ativado, isso não é permitido e o navegador gerará um erro: */

//const undefined = 10;
/* Esse código vai gerar um erro porque você está tentando sobrescrever a palavra-chave reservada undefined, algo que é proibido no modo estrito ("use strict"). */


// 2 - CONSOLE.LOG - como usar console.log() para Depuração?
// exibir valores de variáveis
let nome = "carlos"
console.log(nome) // a saida esperada é : "carlos"


//depurar fluxo de execução - ajuda a entender a ordem de execução do código
console.log("Inicio do código")
let a = 5;
console.log("O valor é: "+a)
let b = a * 2
console.log(`O valor de b é: ${b}`)
console.log("Fim do código!")



// 3 - DEBUGGER
/* devemos rever esta aula */



// 4 - TRATAMENTO DE DADOS DO USUÁRIO

// Função que verifica se um valor pode ser convertido para número
function checkNumber(n) {
    // Converte o valor recebido para número
    const result = Number(n);

    // Se a conversão resultar em NaN (Not a Number), exibe erro e sai da função
    if (Number.isNaN(result)) {
        console.log("Valor incorreto");
        return; // Encerra a função sem retornar nada (undefined)
    }

    // Se a conversão for bem-sucedida, exibe mensagem e retorna o número
    console.log("Valor correto!");
    return result;
}

// Testes da função
checkNumber(5);       // ✅ Valor correto! → Retorna 5
checkNumber("10");    // ✅ Valor correto! → Retorna 10
checkNumber({});      // ❌ Valor incorreto → Retorna undefined
checkNumber("teste"); // ❌ Valor incorreto → Retorna undefined



// 5 - EXCEPTIONS
// Declara a variável x e atribui o valor 4
/*var x = 4;

// Verifica se x é diferente de 5
if (x != 5) {
    // Se a condição for verdadeira, lança um erro e interrompe a execução do código

    throw new Error('O valor de x não pode ser diferente de 5');
}

// Se x for 5, essa linha será executada (caso contrário, o código será interrompido pelo erro)
console.log("O número digitado é: " + x);*/


// 6 - EXCEPTIONS - TRY CATCH
// Bloco try: Aqui tentamos executar um código que pode gerar um erro
/*try {
    // Tentativa de somar duas variáveis que não foram declaradas
    const soma = x + y;
} 
// Bloco catch: Captura e trata o erro caso ocorra
catch (error) {
    // Exibe uma mensagem personalizada no console informando o erro
    console.log(`Erro no programa, as variáveis x e y não estão definidas!`);
} */



// 7 - FINALLY
// Inicia um bloco try, onde tentamos executar um código que pode gerar um erro
try {
    // Realiza uma divisão por zero (10 / 0)
    // Em JavaScript, isso não gera um erro, mas retorna "Infinity"
    let resultado = 10 / 0;
    
    // Exibe o resultado no console (Infinity)
    console.log(resultado);
} 
// Se ocorrer um erro no bloco try, o bloco catch será executado
catch (erro) {
    // Exibe uma mensagem de erro no console
    console.log("Ocorreu um erro:", erro.message);
} 
// O bloco finally é sempre executado, independentemente de erro ou não
finally {
    console.log("Esse bloco sempre será executado.");
}
