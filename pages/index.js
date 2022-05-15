import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Newhome from "../components/Newhome";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> * ˚∆˙ *</title>

        <meta name="title" content="* ˚∆˙ *"></meta>
        <meta name="description" content="skycube.gif"></meta>

        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.aphextwins.com/"></meta>
        <meta property="og:title" content="* ˚∆˙ *"></meta>
        <meta property="og:description" content="skycube.gif"></meta>
        <meta property="og:image" content="skycube.gif"></meta>

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta
          property="twitter:url"
          content="https://www.aphextwins.com/"
        ></meta>
        <meta property="twitter:title" content="* ˚∆˙ *"></meta>
        <meta property="twitter:description" content="skycube.gif"></meta>
        <meta property="twitter:image" content="skycube.gif"></meta>
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
