"use client"
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import React, { useEffect } from 'react';
import Botao from "../componentes/botao/botao";

const projects = [{
    id: 1,
    category: "Educação",
    image: "./src/commons/biblioteca.jpg",
    imageAlt: "Biblioteca",

    title: "Biblioteca Comunitária",

    subtitle:
        "Ajude na organização de livros e no atendimento de crianças em atividades de leitura e contação de histórias. Essa iniciativa busca fortalecer a literatura infantil e promover o hábito da leitura em nossa comunidade.",

    schedule: "Sábados, 9h-12h",
    location: "Vila Mariana, São Paulo",
    spots: "8 voluntários",
    duration: "6 meses",

    description:
        "A Biblioteca Comunitária é um espaço de acolhimento e aprendizado para crianças e jovens da região. Nosso objetivo é criar um ambiente acolhedor onde a leitura seja uma porta para novos mundos. Como voluntário, você será fundamental para manter a biblioteca organizada, auxiliar nas sessões de contação de histórias e incentivar o amor pela literatura.",

    additionalInfo:
        "Além disso, você terá a oportunidade de interagir com as crianças, entender suas necessidades e contribuir para o desenvolvimento de suas habilidades cognitivas e sociais. Trabalhamos com um método de educação lúdica, garantindo que o aprendizado seja divertido e significativo."
},

{
    id: 2,
    category: "Meio Ambiente",
    image: "./src/commons/horta.jpg",
    imageAlt: "Horta Comunitária",

    title: "Horta Comunitária",

    subtitle:
        "Participe do cultivo e cuidado de uma horta comunitária, ajudando na preparação do solo, plantio e manutenção das plantas. A iniciativa busca incentivar a alimentação saudável e aproximar a comunidade da agricultura sustentável.",

    schedule: "Domingos, 8h-11h",
    location: "Pinheiros, São Paulo",
    spots: "10 voluntários",
    duration: "4 meses",

    description:
        "A Horta Comunitária é um projeto criado para transformar espaços urbanos em áreas de cultivo e convivência. O objetivo é promover práticas sustentáveis, incentivar o consumo de alimentos naturais e fortalecer os vínculos entre os moradores da região. Como voluntário, você poderá participar do preparo da terra, plantio, irrigação e cuidados com as hortaliças.",

    additionalInfo:
        "Durante as atividades, os voluntários também terão contato com técnicas básicas de agricultura urbana e compostagem. Não é necessário ter experiência, pois todas as tarefas serão orientadas pela equipe responsável pelo projeto."
},

{
    id: 3,
    category: "Assistência Social",
    image: "./src/commons/idosos.jpg",
    imageAlt: "Convivência com Idosos",

    title: "Companhia e Convivência",

    subtitle:
        "Dedique algumas horas da semana para conversar, realizar atividades recreativas e acompanhar idosos em momentos de convivência. O projeto busca combater a solidão e proporcionar momentos de carinho, atenção e interação social.",

    schedule: "Quartas-feiras, 14h-17h",
    location: "Mooca, São Paulo",
    spots: "6 voluntários",
    duration: "3 meses",

    description:
        "O projeto Companhia e Convivência promove encontros entre voluntários e idosos da comunidade, criando oportunidades para conversas, jogos, atividades culturais e momentos de descontração. Como voluntário, você ajudará a tornar esses encontros mais acolhedores e contribuirá para uma rotina com mais interação e participação social.",

    additionalInfo:
        "As atividades são planejadas de acordo com os interesses e possibilidades dos participantes. Os voluntários receberão orientações da equipe antes do início das atividades e poderão sugerir novas dinâmicas, jogos e ações para os encontros."
}
];

let searchURL = "";


export default function Home() {
  const [texto, setTexto] = useState("");

  function addQuery() {
    searchURL = "/search?query=" + texto.trim();
  }

  useEffect(() => {
  let cards = [];

  // Cria cards com base nos projetos disponíveis
  for (let i = 0; i < projects.length; i++) {
      let project = projects.find(project => project.id === i+1);

      cards[i] = createCard(project);
      document.getElementById("cards-section").appendChild(cards[i]);
  }

  // Adiciona o efeito de hover nos cards
  for (let i = 0; i < cards.length; i++) {
      addLiftEffect(cards[i].firstChild);
  }

  function createCard(project) {
      let card = document.createElement("a");
      card.href = "./projeto" + "" ;

      let article = document.createElement("article");
      card.appendChild(article);

      article.className = "cards";


      let header = document.createElement("header");
      article.appendChild(header);

      header.className = "card-header";


      let h3 = document.createElement("h3");
      header.appendChild(h3);

      h3.innerHTML = project.title;


      let div = document.createElement("div");
      header.appendChild(div);

      div.className = "tag";
      div.innerHTML = project.category;


      let main = document.createElement("main");
      article.appendChild(main);

      main.className = "card-main";


      let p = document.createElement("p");
      main.appendChild(p);

      p.innerHTML = project.subtitle;
      p.className = "secondary-text";


      let footer = document.createElement("footer");
      article.appendChild(footer);

      footer.className = "card-footer";


      div = document.createElement("div");
      footer.appendChild(div);


      let img = document.createElement("img");
      div.appendChild(img);

      img.src = "./src/commons/local_icon.png";
      img.alt="place_icon";
      img.className="local-icon"


      p = document.createElement("p");
      footer.appendChild(p);

      p.innerHTML = project.location;
      p.className = "secondary-text";

      card.style.width -= 20;
      return card;
  }

  function addLiftEffect(element, liftAmount = 8) {
      element.addEventListener('mouseover', () => {
          element.style.transform = `translateY(-${liftAmount}px)`;
          element.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
      });

      element.addEventListener('mouseleave', () => {
          element.style.transform = 'translateY(0)';
          element.style.boxShadow = 'none';
      });
  }

  });

  return (
    <main>
        <section id="main-page-section">
            <section>
                <h1 id="front-title">Faça a diferença na sua comunidade</h1>
                <p class="secondary-text">Encontre projetos de voluntariado, conecte-se com organizações locais e transforme vidas.</p>
                <div id="search-container">
                    <input
                      value={texto}
                      onChange={(e) => setTexto(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && addQuery()}
                      placeholder="Buscar projeto"
                    />
                    <Link href={searchURL}>
                    <Botao onClick={addQuery}>Buscar</Botao>
                    </Link>
                </div>
            </section>
        </section>
        <section id="main-text">
            <h2>Projetos em destaque</h2>
            <p className={"secondary-text"}>Descubra oportundiades para começar a fazer a diferença hoje mesmo.</p>
        </section>
        <section id="cards-section"></section>
    </main>
  );
}
