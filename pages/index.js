import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Newhome from "../components/Newhome";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> ˚∆˚ </title>
        <link href="../asset/Kodchasan/Kodchasan-Medium.ttf" rel="stylesheet" />
        <meta name="title" content="* ˚∆˙ *"></meta>
        <meta
          property="og:image"
          content="https://aphextwins.com/public/skycube.gif"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
