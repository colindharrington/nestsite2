import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Newhome from "../components/Newhome";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> * ˚∆˙ *</title>
        <meta name="description" content="skycube.gif" />
        <meta property="og:image" content="skycube.gif" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Newhome />
      </main>

      {/* <footer className={styles.footer}>
        <pre>Brought to you by the internet.</pre>
      </footer> */}
    </div>
  );
}
