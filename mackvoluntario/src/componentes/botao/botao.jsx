"use client"

import styles from "./botao.module.css";

export default function Botao({onClick, disabled, children}) {
    return(
        <button onClick={onClick} disabled={disabled}>{children}</button>
    )
}