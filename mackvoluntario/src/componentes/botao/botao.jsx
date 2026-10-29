"use client"

import styles from "./botao.module.css";

export default function Botao({onClick, children}) {
    return(
        <button onClick={onClick}>{children}</button>
    )
}