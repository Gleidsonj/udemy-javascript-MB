// 1 - criando uma função
/*function minhaFuncao(){
    console.log("testando!")
}

minhaFuncao();
minhaFuncao();

const minhaFuncaoEmVariavel = function() {
    console.log("Função em variavel")
}

minhaFuncaoEmVariavel();

function funcaoComParametro (txt) {
    console.log(`Imprimindo: ${txt}`)
}

funcaoComParametro("Imprimindo alguma coisa!")

funcaoComParametro("Outra função")*/


// 2 - RETURN
/*const a = 10
const b = 20
const c = 30
const d = 40

function soma (n1, n2) {
    return n1 + n2
}

const resultado = soma(a, b)

console.log(resultado)

console.log(soma(d , c))*/


// 3 - ESCOPO DAS FUNÇÕES
//as variáveis dentro das funções não interferem as globais, e visse versa

/*let y = 10

function testandoEscopo() {
    let y = 20
    console.log(`Y dentro da função é: ${y}`)
}

testandoEscopo()

console.log(`Y fora da função é: ${y}`)*/


// 4 - ESCOPO ANINHADO (Nested Scopes)
/*let m = 10

function escopoAninhado() {
    let m = 20

    if (true) {
        let m = 30

        if (true) {
            let m = 40

            console.log(m)
        }

        console.log(m)
    }

    console.log(m)

}

escopoAninhado()//temos que chamar

console.log(m)*/


// 5 - ARROW FUNCTION
/*const testeArrow = () => {
    console.log(`Está é uma arrow function`)
}

testeArrow()//temos que chamar


const parOuImpar = (n) => {
    if (n % 2 === 0) {
        console.log("É par")
        return
    } 

    console.log("É impar")
}

parOuImpar(7)

parOuImpar(4)*/


// 6 - MAIS SOBRE - ARROW FUNCTION
/*const raizQuadrada = (x) => {
    return x * x
}

console.log(raizQuadrada(4))
console.log(raizQuadrada(14))



// outro exemplo
const raizQuadrada2 = (x) => {
    return x * x
}

console.log(raizQuadrada2(9))
console.log(raizQuadrada2(14))


//outro exemplo
const helloworld = () => console.log(`Hello World`)

helloworld()

// exemplo com erro 
const hellowolrd2 = () => console.log(`hello world`)

console.log(hellowolrd2())
//não execulte console.log com outro console.log que pode gerar error*/



// 7 - ARGUMENTOS OPCIONAIS
/*const multiplication = (n, m) => {
//criamos esse if, caso o m não recebesse o valor, o resultado seria "NaN", então se não receber o valor ele multiplicará por 2

    if (m === undefined) {
       return n * 2
    } else {
        return n * m
    }
}

console.log(multiplication(2, 8))
console.log(multiplication(3))*/


//mais um exemplo 
/*const bemVindo = (name) => {
    if (name === undefined) {
        return console.log("Olá, bem vindo!")
    } else {
        return console.log(`Olá, bem vindo, ${name}!`)
    }
}

bemVindo()
bemVindo("gleidson")*/



// 8 - VALOR DEFAULT
const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`
}

console.log(customGreeting("Gleidson"))
console.log(customGreeting("Julia" , "Bom dia"))

// repeat
const repeatText = (text, repeat = 2) => {
    for (let i = 0; i < repeat; i++)
        console.log(text)
}

repeatText("Flamengo campeão!!!")



// 9 - CLOSURE
/*function someFunction () {
    let txt = "Alguma coisa"

    function display(){
        console.log(txt);
    }
    display()
}

someFunction()*/

// 10 - MAIS SOBRE CLOSURE
/*const multiplicationClosure = (n) => {
    return(m) => {
        return n * m;
    }
}

const c1 = multiplicationClosure(5)
const c2= multiplicationClosure(10)

console.log(c1)
console.log(c2)
console.log(c1(5))
console.log(c2(10))*/



// 11 - RECURSION
/*const untilten = (n, m) => {
    if (n < m){
        console.log("A funçaõ parou de funcionar!")
    }else {
        const x = n - m;

        console.log(x);

        untilten(x, m);
    }
}

untilten(90, 9)*/


// mais um exemplo
/*function factorial(x) {
    if (x === 0) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
}

const num = 6;

const result = factorial(num);

console.log(`O factorial do número ${num} é ${result}`);*/