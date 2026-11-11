import { Suspense } from "react";
import Link from "next/link";
import Navbar from "@/componentes/navbar/navbar";
import Card from "@/componentes/card/card";
// Lê direto do JSON do projeto: a busca não depende da API nem do .env.local
import projects from "@/data/projects.json";
import styles from "./page.module.css";

export const metadata = {
    title: "Resultados da busca | MackVoluntário",
};

// Remove acentos e maiúsculas: "educacao" encontra "Educação"
function normalizar(texto) {
    return String(texto)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

// Se o parâmetro aparecer repetido na URL, usa o primeiro valor
function valor(param) {
    return Array.isArray(param) ? param[0] : param;
}

// Monta a URL da busca mantendo texto e categoria
function montarUrl(query, categoria) {
    const params = new URLSearchParams();

    if (query) params.set("query", query);
    if (categoria !== "Todas") params.set("categoria", categoria);

    const texto = params.toString();
    return texto ? `/search?${texto}` : "/search";
}

// Tudo que depende da URL e dos dados fica aqui dentro, protegido por Suspense
async function Resultados({ searchParams }) {
    // Parâmetros enviados pela home: /search?query=texto
    const params = await searchParams;
    const query = (valor(params?.query) ?? "").trim();
    const categoriaParam = valor(params?.categoria) ?? "Todas";

    // Os filtros vêm das categorias que existem nos projetos
    const categorias = ["Todas", ...new Set(projects.map((p) => p.category))];
    const categoriaSelecionada = categorias.includes(categoriaParam)
        ? categoriaParam
        : "Todas";

    const busca = normalizar(query);

    const resultados = projects.filter((project) => {
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

        return correspondeCategoria && (busca === "" || conteudo.includes(busca));
    });

    return (
        <>
                <nav className={styles.filterSection} aria-label="Filtrar por categoria">
                    {categorias.map((categoria) => {
                        const ativo = categoria === categoriaSelecionada;

                        return (
                            <Link
                                key={categoria}
                                href={montarUrl(query, categoria)}
                                className={`${styles.filterButton} ${
                                    ativo ? styles.filterButtonActive : ""
                                }`}
                                aria-current={ativo ? "true" : undefined}
                            >
                                {categoria}
                            </Link>
                        );
                    })}
                </nav>

                {/* Formulário GET: envia /search?query=... e mantém a categoria */}
                <form action="/search" method="get" className={styles.searchForm}>
                    <input
                        key={query}
                        type="text"
                        name="query"
                        defaultValue={query}
                        className={styles.searchInput}
                        placeholder="Buscar projetos por tema, local ou horário"
                        aria-label="Buscar projetos"
                        autoComplete="off"
                    />
                    {categoriaSelecionada !== "Todas" && (
                        <input type="hidden" name="categoria" value={categoriaSelecionada} />
                    )}
                    <button type="submit" className={styles.searchButton}>
                        Buscar
                    </button>
                </form>

                <section className={styles.cardsSection}>
                    {resultados.length === 0 ? (
                        <div className={styles.emptyState}>
                            <h2>Nenhum projeto encontrado</h2>
                            <p>
                                Tente buscar por outro termo ou selecionar uma categoria
                                diferente.
                            </p>
                        </div>
                    ) : (
                        resultados.map((project) => (
                            <Card key={project.id} project={project} />
                        ))
                    )}
                </section>
        </>
    );
}

export default function SearchPage({ searchParams }) {
    return (
        <>
            <Navbar />
            <main className={styles.container}>
                <section className={styles.searchHeader}>
                    <h1>Resultados da busca</h1>
                    <p>
                        Encontre oportunidades de voluntariado que combinam com seus
                        interesses e habilidades.
                    </p>
                </section>

                <Suspense fallback={<p className={styles.loading}>Carregando projetos...</p>}>
                    <Resultados searchParams={searchParams} />
                </Suspense>
            </main>
        </>
    );
}
