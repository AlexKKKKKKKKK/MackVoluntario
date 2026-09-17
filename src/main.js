const project = {
    category: "Educação",
    image: "https://www.mackenzie.br/fileadmin/user_upload/bibliotecacentral.jpg",
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
};

document.querySelector("#category").textContent = project.category;

document.querySelector("#hero-image").src = project.image;
document.querySelector("#hero-image").alt = project.imageAlt;

document.querySelector("#title").textContent = project.title;
document.querySelector("#subtitle").textContent = project.subtitle;

document.querySelector("#schedule").textContent = project.schedule;
document.querySelector("#location").textContent = project.location;
document.querySelector("#spots").textContent = project.spots;
document.querySelector("#duration").textContent = project.duration;

document.querySelector("#description").textContent = project.description;
document.querySelector("#additional-info").textContent = project.additionalInfo;
