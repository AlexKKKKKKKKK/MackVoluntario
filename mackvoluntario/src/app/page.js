"use client"
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import React, { useEffect } from 'react';
import Botao from "../componentes/botao/botao";
import Card from "@/componentes/card/card";
import Navbar from "@/componentes/navbar/navbar";
import { useRouter } from "next/navigation";
import { getProjects } from "@/services/project.service";


let searchURL = "";

let projects = await getProjects();


export default function Home() {
  const [texto, setTexto] = useState("");
  const router = useRouter();

  function addQuery() {
    searchURL = "/search?query=" + texto.trim();
    return true;
  }

  // Adiciona o efeito de hover nos cards (PENDENTE)

  return (
    <>
        <Navbar />
        <main>
            <section className={styles.main}>
                <section>
                    <h1 className={styles.frontTitle}>Faça a diferença na sua comunidade</h1>
                    <p className={styles.secondaryText}>Encontre projetos de voluntariado, conecte-se com organizações locais e transforme vidas.</p>
                    <div className={styles.searchContainer}>
                        <input
                        className={styles.searchTextInput}
                        value={texto}
                        onChange={(e) => setTexto(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && addQuery() && router.push(searchURL)}
                        placeholder="Buscar projeto"
                        />
                        <Link href={searchURL} className={styles.Link}>
                            <Botao onClick={addQuery}>Buscar</Botao>
                        </Link>
                    </div>
                </section>
            </section>
            <section className={styles.mainText}>
                <h2>Projetos em destaque</h2>
                <p className={styles.secondaryText}>Descubra oportundiades para começar a fazer a diferença hoje mesmo.</p>
            </section>
            <section className={styles.cardsSection}>
                {projects.map((project) => (<Card project={project}></Card>))}
            </section>
        </main>
    </>
  );
}
