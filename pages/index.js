import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Newhome from "../components/Newhome";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> * ˚∆˙ *</title>

        <meta name="title" content="* ˚∆˙ *">
        <meta name="description" content="skycube.gif">


        <meta property="og:type" content="website">
        <meta property="og:url" content="https://www.aphextwins.com/">
        <meta property="og:title" content="* ˚∆˙ *">
        <meta property="og:description" content="skycube.gif">
        <meta property="og:image" content="skycube.gif">


        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="https://www.aphextwins.com/">
        <meta property="twitter:title" content="* ˚∆˙ *">
        <meta property="twitter:description" content="skycube.gif">
        <meta property="twitter:image" content="skycube.gif">


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
