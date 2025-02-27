// // MODOS DE COMO SELECIONAR ELEMENTOS

// //getElementByID() ------------
// /* Seleciona um elemento pelo seu id.
// 🔹 Retorna um único elemento (ou null se não existir). */
// const titulo = document.getElementById("titulo")
// console.log(titulo)


// //getEletmentsByClassName()---------
// /* Seleciona todos os elementos que possuem uma determinada classe.
// 🔹 Retorna uma coleção (HTMLCollection). */
// const itens = document.getElementsByClassName("item")
// console.log(itens)


// //getElementsByTagName()-----------
// /* Seleciona todos os elementos de uma determinada tag (<div>, <p>, <span>, etc.).
// 🔹 Retorna uma coleção (HTMLCollection). */
// const paragrafos = document.getElementsByTagName("p")
// console.log(paragrafos)


// //querySelector()--------
// /* Seleciona o primeiro elemento que corresponde a um seletor CSS. */
// const primeiroItem = querySelector(".item")
// console.log(primeiroItem)


// //querySelectorAll() ----------------
// /* Seleciona todos os elementos que correspondem a um seletor CSS.
// 🔹 Retorna uma NodeList (permite forEach!). */
// const todosOsItens = querySelectorAll(".item")
// console.log(todosOsItens)




// // 1 - Movendo de pelo DOM
// // Exibe o elemento <body> inteiro no console
// console.log(document.body); 

// // Acessa o segundo nó filho do <body> e o exibe no console
// console.log(document.body.childNodes[1]); 

// // Exibe todos os nós filhos do segundo nó filho do <body>
// console.log(document.body.childNodes[1].childNodes); 

// // Exibe o conteúdo de texto do segundo nó filho do segundo nó filho do <body>
// console.log(document.body.childNodes[1].childNodes[1].textContent); 


// 2 - selecionando por tag
const listItens = document.getElementsByTagName("li")
console.log(listItens)


// 3 - selecionando por ID ----------
// com o método getElementByID selecionamos um unico elemento
const title = document.getElementById("title")
console.log(title)


// 4 - selecionando elementos por CLASSE ----------
/* com o método getElementsByClassName selecionamos um conjunto de elementos por classe em comum */
const products = document.getElementsByClassName("product")
console.log(products)


// 5 - encontrando elementos por CSS - querySelector e querySelectorAll ---------
// querySelectorAll() pega TODOS os elementos
const productsQuery = document.querySelectorAll(".product")
console.log(productsQuery)

// querySelector() pega apenas o primeiro elemento
const mainContainer = document.querySelector("#main-container")
console.log(mainContainer)



// 6 - insertBefore ---------
const p = document.createElement("p")

const novoElement = title.parentElement;

novoElement.insertBefore(p, title)
