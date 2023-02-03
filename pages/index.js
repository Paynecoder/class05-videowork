import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.container} id="colouring">
      <nav>
        <Link href="/about">About</Link>
      </nav>
    </main>
  );
}
