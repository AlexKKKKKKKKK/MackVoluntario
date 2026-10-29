import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/componentes/navbar/navbar";

const project = {
    category: "Educação",
    image: "/biblioteca.jpg",
    imageAlt: "Biblioteca",
    title: "Biblioteca Comunitária",
    subtitle: "Ajude na organização de livros e no atendimento de crianças em atividades de leitura e contação de histórias. Essa iniciativa busca fortalecer a literatura infantil e promover o hábito da leitura em nossa comunidade.",
    schedule: "Sábados, 9h-12h",
    location: "Vila Mariana, São Paulo",
    spots: "8 voluntários",
    duration: "6 meses",
    description: "A Biblioteca Comunitária é um espaço de acolhimento e aprendizado para crianças e jovens da região. Nosso objetivo é criar um ambiente acolhedor onde a leitura seja uma porta para novos mundos. Como voluntário, você será fundamental para manter a biblioteca organizada, auxiliar nas sessões de contação de histórias e incentivar o amor pela literatura.",
    additionalInfo: "Além disso, você terá a oportunidade de interagir com as crianças, entender suas necessidades e contribuir para o desenvolvimento de suas habilidades cognitivas e sociais. Trabalhamos com um método de educação lúdica, garantindo que o aprendizado seja divertido e significativo.",
}

export default function Project(){
    return(
        <>
        <Navbar/>
        <main className={styles.container}>
            <section className={styles.heroBanner}>
                <span className={styles.categoryBadge}>
                    {project.category}
                </span>
                <Image
                 className={styles.BrandLogo}
                 src={project.image}
                 alt={project.imageAlt}
                 width={1200}
                 height={600}
                 priority
                 />
            </section>

            <header className={styles.projectHeader}>
                <h1 className={styles.projectTitle}></h1>
                <p className={styles.projectSubtitle}></p>
            </header>

            <section className={styles.infoGrid}>
                <div className={styles.infoCard}>
                    <span className={styles.infoCardLabel}>Horário</span>
                    <span className={styles.infoCardValue}>
                        {project.schedule}
                    </span>
                </div>

                <div className={styles.infoCard}>
                    <span className={styles.infoCardLabel}>Local</span>
                    <span className={styles.infoCardValue}>
                        {project.location}
                    </span>
                </div>

                <div className={styles.infoCard}>
                    <span className={styles.infoCardLabel}>Vagas</span>
                    <span className={styles.infoCardValue}>
                        {project.spots}
                    </span>
                </div>

                <div className={styles.infoCard}>
                    <span className={styles.infoCardLabel}>Duração</span>
                    <span className={styles.infoCardValue}>
                        {project.spots}
                    </span>
                </div>
            </section>

            <section className={styles.aboutSection}>
                <h2>Sobre o projeto</h2>
                <p>{project.description}</p>
                <p>{project.additionalInfo}</p>
            </section>
        </main>
        </>
    );
}