import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Main page="about"/>

      <Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </Footer>
    </div>
  );
}
