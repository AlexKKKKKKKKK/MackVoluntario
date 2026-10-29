"use client"

import styles from "./card.module.css";

export default function Card({project}) {
    return(
        <a href="./projeto" className={styles.card}>
            <article className = {styles.cards}>
                <header className={styles.cardHeader}>
                    <h3>{project.title}</h3>
                    <div className={styles.tag}>{project.category}</div>
                </header>
                <main className ={styles.cardMain}>
                    <p className={styles.secondaryText}>{project.subtitle}</p>
                </main>
                <footer className={styles.cardFooter}>
                    <div>
                    </div>
                    <p className={styles.secondaryText}>{project.location}</p>
                </footer>
            </article>
        </a>
    )
}