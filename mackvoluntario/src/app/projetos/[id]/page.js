import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/componentes/navbar/navbar";
import { notFound } from "next/navigation";
import { getProjectById } from "@/services/project.service";

export default async function Project({ params }) {
    const { id } = await params;

    const project = await getProjectById(id);

    if (!project) {
        notFound();
    }

    return (
        <>
            <Navbar />

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
                    <h1 className={styles.projectTitle}>
                        {project.title}
                    </h1>

                    <p className={styles.projectSubtitle}>
                        {project.subtitle}
                    </p>
                </header>

                <section className={styles.infoGrid}>
                    <div className={styles.infoCard}>
                        <span className={styles.infoCardLabel}>
                            Horário
                        </span>
                        <span className={styles.infoCardValue}>
                            {project.schedule}
                        </span>
                    </div>

                    <div className={styles.infoCard}>
                        <span className={styles.infoCardLabel}>
                            Local
                        </span>
                        <span className={styles.infoCardValue}>
                            {project.location}
                        </span>
                    </div>

                    <div className={styles.infoCard}>
                        <span className={styles.infoCardLabel}>
                            Vagas
                        </span>
                        <span className={styles.infoCardValue}>
                            {project.spots}
                        </span>
                    </div>

                    <div className={styles.infoCard}>
                        <span className={styles.infoCardLabel}>
                            Duração
                        </span>
                        <span className={styles.infoCardValue}>
                            {project.duration}
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
