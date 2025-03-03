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



// EXEMPLO DO CHATGPT -----




// 6 - insertBefore ---------
// Cria um novo elemento <p> (parágrafo)
const p = document.createElement("p");

// Obtém o elemento pai do elemento 'title'
// 'title' é uma variável que representa um elemento que já existe no DOM
const novoElement = title.parentElement;

// Insere o novo parágrafo 'p' antes do elemento 'title'
// Isso significa que 'p' será adicionado como irmão (sibling) do 'title',
// logo acima dele na estrutura do DOM.
novoElement.insertBefore(p, title);


// 7 - appendChild -----------
/* com appendChild é possivel adicionar um elemento dentro de outro, este elemento adicionado será o último do elementopai. */
const navLinks = document.querySelector("nav ul") 

const li = document.createElement("li")

li.textContent = "novo item"

navLinks.appendChild(li)


// 8 - replaceChild --------------
/* Já o método replaceChild é utilizado para trocar um elemento, novamente precisamos do elemento pai, e também o elemento para ser substituido e o que vai substituir. */
// --------------código em outro arquivo html-----------------



// 9 - createTextNode ----------------
// 1️⃣ Criando um nó de texto
const myText = document.createTextNode("Agora vamos colocar mais um título!");

console.log(myText); // Exibe o nó de texto no console

// 2️⃣ Criando um elemento <h3>
const h3 = document.createElement("h3");

// 3️⃣ Adicionando o texto ao elemento <h3>
h3.appendChild(myText);

// 4️⃣ Adicionando o <h3> dentro de um elemento pai (mainContainer)
mainContainer.appendChild(h3);


// 10 - trabalhando com atributos - getAttribute ----------
// 5️⃣ Trabalhando com atributos - getAttribute
const meuLInk = document.getElementById("link"); // Seleciona o link pelo ID "link"

// 6️⃣ Obtendo o valor do atributo "href"
const valor = meuLInk.getAttribute("href");

console.log(valor); // Exibe no console o valor do href (o link definido no HTML)

// 7️⃣ Definindo o atributo "target" como "_blank"
meuLInk.setAttribute("target", "_blank");



// 11 - offSetWidth e offSetHeight -----------
// Seleciona o elemento <footer> da página
const pegandoValor = document.querySelector("footer");

// Exibe no console a largura total do footer (incluindo padding e borda)
console.log(pegandoValor.offsetWidth);

// Exibe no console a altura total do footer (incluindo padding e borda)
console.log(pegandoValor.offsetHeight);

// Exibe no console a largura interna do footer (incluindo padding, mas sem borda)
console.log(pegandoValor.clientWidth);

// Exibe no console a altura interna do footer (incluindo padding, mas sem borda)
console.log(pegandoValor.clientHeight);



// 12 - getClientBoudingRect - posição do elemento
const product2 = document.getElementById("bouding")

const valorDasDimencoes = product2.getBoundingClientRect();

console.log(valorDasDimencoes)


// 13 - CSS com JS
// Define a cor de fundo do elemento mainContainer para vermelho
mainContainer.style.backgroundColor = "red"; 

// Define a cor do texto dentro de mainContainer para verde
mainContainer.style.color = "green"; 


// 14 - htmlCollection
/* pesquise para saber mais sobre    */