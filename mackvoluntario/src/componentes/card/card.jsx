"use client"

import styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";

let projectURL = "";

export default function Card({project}) {
    return(
        <Link href={"./projetos/" + project.id} className={styles.card}>
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
                        <Image 
                            src={"/local_icon.png"}
                            alt={"local icon"}
                            width={24}
                            height={24}
                            >
                        </Image>
                    </div>
                    <p>{project.location}</p>
                </footer>
            </article>
        </Link>
    )
}