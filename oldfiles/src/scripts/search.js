import { projects } from "./main.js";

const filterSection = document.getElementById("filter-section");
const cardsSection = document.getElementById("cards-section");
const form = document.getElementById("search-form");
const input = document.getElementById("search-input");

let categoriaSelecionada = "Todas";

/* Remove acentos e maiúsculas: "educacao" encontra "Educação" */
function normalizar(texto) {
    return String(texto)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

/* =========================
FILTROS (gerados a partir dos dados)
========================= */

function criarFiltros() {
    const categorias = ["Todas", ...new Set(projects.map(p => p.category))];

    categorias.forEach(function (categoria) {
        const botao = document.createElement("button");
        botao.type = "button";
        botao.className = "filter-button";
        botao.textContent = categoria;
        botao.dataset.categoria = categoria;
        botao.setAttribute("aria-pressed", categoria === "Todas");

        if (categoria === "Todas") {
            botao.classList.add("active");
        }

        botao.addEventListener("click", function () {
            filterSection.querySelectorAll(".filter-button").forEach(function (b) {
                b.classList.remove("active");
                b.setAttribute("aria-pressed", "false");
            });

            botao.classList.add("active");
            botao.setAttribute("aria-pressed", "true");

            categoriaSelecionada = categoria;
            filtrarProjetos();
        });

        filterSection.appendChild(botao);
    });
}

/* =========================
CARDS (mesma estrutura da home: <a> > article)
========================= */

function criarCard(project) {
    const link = document.createElement("a");
    link.className = "card-link";
    link.href = `./project.html?id=${project.id}`;

    link.innerHTML = `
        <article class="card">
            <header class="card-header">
                <h3>${project.title}</h3>
                <div class="tag">${project.category}</div>
            </header>

            <div class="card-main">
                <p>${project.subtitle}</p>
            </div>

            <footer class="card-footer">
                <div class="card-place">
                    <img src="./src/commons/local_icon.png" alt="" class="local-icon">
                    <span>${project.location}</span>
                </div>
                <span>${project.schedule}</span>
                <span>${project.spots}</span>
                <span>Duração: ${project.duration}</span>
            </footer>
        </article>
    `;

    return link;
}

function renderizarProjetos(lista) {
    cardsSection.innerHTML = "";

    if (lista.length === 0) {
        cardsSection.innerHTML = `
            <div class="empty-state">
                <h2>Nenhum projeto encontrado</h2>
                <p>Tente buscar por outro termo ou selecionar uma categoria diferente.</p>
            </div>
        `;
        return;
    }

    lista.forEach(function (project) {
        cardsSection.appendChild(criarCard(project));
    });
}

/* =========================
FILTRO E BUSCA
========================= */

function filtrarProjetos() {
    const texto = normalizar(input.value.trim());

    const resultados = projects.filter(function (project) {
        const correspondeCategoria =
            categoriaSelecionada === "Todas" ||
            project.category === categoriaSelecionada;

        const conteudo = normalizar(`
            ${project.title}
            ${project.category}
            ${project.subtitle}
            ${project.location}
            ${project.schedule}
            ${project.duration}
            ${project.description}
            ${project.additionalInfo}
        `);

        return correspondeCategoria && (texto === "" || conteudo.includes(texto));
    });

    renderizarProjetos(resultados);
}

/* =========================
BUSCA (formulário)
========================= */

form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const texto = input.value.trim();
    const url = new URL(window.location.href);

    if (texto) {
        url.searchParams.set("query", texto);
    } else {
        url.searchParams.delete("query");
    }

    window.history.pushState({}, "", url);
    filtrarProjetos();
});

/* Botões voltar/avançar do navegador */
window.addEventListener("popstate", function () {
    input.value = new URLSearchParams(window.location.search).get("query") || "";
    filtrarProjetos();
});

/* =========================
INICIALIZAÇÃO
========================= */

criarFiltros();

const queryInicial = new URLSearchParams(window.location.search).get("query");
if (queryInicial) {
    input.value = queryInicial;
}

filtrarProjetos();
