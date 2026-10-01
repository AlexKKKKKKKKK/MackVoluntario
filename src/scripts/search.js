import { projects } from "./main.js";

const botoesFiltro = document.querySelectorAll(".filter-button");
const cardsSection = document.getElementById("cards-section");
const form = document.getElementById("search-form");
const input = document.getElementById("search-input");

let categoriaSelecionada = "Todas";

/* =========================
CRIAÇÃO DOS CARDS
========================= */

function criarCard(project) {
const card = document.createElement("article");

card.classList.add("card");
card.setAttribute("data-categoria", project.category);

card.innerHTML = `
    <div class="card-header">
        <h2>${project.title}</h2>
        <span class="tag">${project.category}</span>
    </div>

    <div class="card-main">
        <p>${project.subtitle}</p>

        <span class="card-location">
            ${project.location} - ${project.schedule}
        </span>
    </div>

    <div class="card-footer">
        <span>
            ${project.spots}
        </span>

        <span>
            Duração: ${project.duration}
        </span>
    </div>
`;

/*
 * Ao clicar no card, abre a página
 * do projeto utilizando o ID.
 */
card.addEventListener("click", function () {
    window.location.href = `project.html?id=${project.id}`;
});

return card;


}

/* =========================
RENDERIZAÇÃO
========================= */

function renderizarProjetos(lista) {
cardsSection.innerHTML = "";

if (lista.length === 0) {
    cardsSection.innerHTML = `
        <div class="empty-state">
            <h2>Nenhum projeto encontrado</h2>
            <p>
                Tente buscar por outro termo ou
                selecionar uma categoria diferente.
            </p>
        </div>
    `;

    return;
}

lista.forEach(function (project) {
    const card = criarCard(project);
    cardsSection.appendChild(card);
});


}

/* =========================
FILTRO E BUSCA
========================= */

function filtrarProjetos() {

const texto = input.value
    .trim()
    .toLowerCase();

const resultados = projects.filter(function (project) {

    /*
     * Verifica a categoria.
     */
    const correspondeCategoria =
        categoriaSelecionada === "Todas" ||
        project.category === categoriaSelecionada;


    /*
     * Junta os campos relevantes
     * para realizar a busca.
     */
    const conteudo = `
        ${project.title}
        ${project.category}
        ${project.subtitle}
        ${project.location}
        ${project.schedule}
        ${project.duration}
        ${project.description}
        ${project.additionalInfo}
    `.toLowerCase();


    /*
     * Se não houver texto, todos passam.
     */
    const correspondeBusca =
        texto === "" ||
        conteudo.includes(texto);


    return correspondeCategoria && correspondeBusca;
});


renderizarProjetos(resultados);


}

/* =========================
FILTROS DE CATEGORIA
========================= */

botoesFiltro.forEach(function (botao) {

botao.addEventListener("click", function () {

    botoesFiltro.forEach(function (b) {
        b.classList.remove("active");
    });

    botao.classList.add("active");

    categoriaSelecionada =
        botao.getAttribute("data-categoria");

    filtrarProjetos();
});


});

/* =========================
BUSCA
========================= */

form.addEventListener("submit", function (evento) {

evento.preventDefault();

const texto = input.value.trim();

/*
 * Atualiza o parâmetro "query" da URL.
 */
const url = new URL(window.location.href);

if (texto) {
    url.searchParams.set("query", texto);
} else {
    url.searchParams.delete("query");
}

window.history.pushState({}, "", url);

filtrarProjetos();


});

/* =========================
QUERY DA URL
========================= */

const parametros = new URLSearchParams(
window.location.search
);

const query = parametros.get("query");

if (query) {
input.value = query;
}

/* =========================
INICIALIZAÇÃO
========================= */

filtrarProjetos();