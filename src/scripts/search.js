// pega os botões de filtro e os cards
var botoesFiltro = document.querySelectorAll(".filter-button");
var cards = document.querySelectorAll(".card");

// clique nos botões de categoria
botoesFiltro.forEach(function (botao) {
  botao.addEventListener("click", function () {

    // tira o "active" de todos e coloca só no botão clicado
    botoesFiltro.forEach(function (b) {
      b.classList.remove("active");
    });
    botao.classList.add("active");

    var categoria = botao.getAttribute("data-categoria");

    cards.forEach(function (card) {
      if (categoria === "Todas" || card.getAttribute("data-categoria") === categoria) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// busca por texto no campo de pesquisa
var form = document.getElementById("search-form");
var input = document.getElementById("search-input");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  var texto = input.value.toLowerCase();

  cards.forEach(function (card) {
    var conteudo = card.textContent.toLowerCase();
    if (conteudo.includes(texto)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
