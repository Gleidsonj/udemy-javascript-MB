// 1 - adicionando eventos
// Seleciona o botão no HTML que possui o ID "btn"
const btn = document.querySelector("#btn");

/* 
 Adiciona um evento de clique ao botão.
 Quando o botão for clicado, a função anônima será executada, 
 exibindo a mensagem "Olá, você clicou aqui" no console.
*/
btn.addEventListener("click", function() {
    console.log("Olá, você clicou aqui");
});
