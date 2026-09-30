import { projects } from "./main.js"; // Lista de projetos disponíveis

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

let search_button = document.getElementById("search-button")

search_button.onclick = () =>  window.location = "./search.html";


function createCard(project) {
    let card = document.createElement("a");
    card.href = "./project.html" + "?id=" + String(project.id);

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
