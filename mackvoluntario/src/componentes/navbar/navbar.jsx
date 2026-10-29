import Image from "next/image";
import Link from "next/link";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <Link href="/" className={style.brand}>
        <Image
          src="/M_vermelho.png"
          alt="Mack Logo"
          width={50}
          height={50}
          className={style.brandLogo}
        />
        <span>MackVoluntário</span>
      </Link>

      <ul className={style.navLinks}>
        <li>
          <Link href="/projetos">Projetos</Link>
        </li>
        <li>
          <Link href="/sobre">Sobre</Link>
        </li>
        <li>
          <Link href="/contato">Contato</Link>
        </li>
        <li>
          <Link href="/login" className={style.btnLogin}>
            Entrar
          </Link>
        </li>
      </ul>
    </header>
  );
}