"use client"

import styles from "./botao.module.css";
import Image from "next/image";

export default function Botao({onClick, children}) {
    return(
        <button onClick={onClick} className={styles.searchButton}>
            <Image 
                src={"/search_icon.png"}
                alt={"search icon"}
                width={18}
                height={18}
                >
            </Image>
        </button>
    )
}