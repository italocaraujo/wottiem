import { useState } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/compenents/Header";
import Navbar from "@/compenents/Navbar";
import Footer from "@/compenents/Footer";
import MusicCover from "@/compenents/MusicCover";
import SpotifyFrame from "@/compenents/SpotifyFrame";
import Clothes from "@/compenents/Clothes";
import Clock from "@/compenents/Clock";
import Photos from "@/compenents/Photos";
import AboutText from "@/compenents/AboutText";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <Head>
        <title>SOBRE | ZECA</title>
        <meta name="description" content="ZECA CORREIA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/wtt-favicon-black.ico"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/wtt-favicon-white.ico"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <Navbar />
      <Clock />
      {/* Conteúdo da página */}
      <div className={`${styles.page}`}>

        <main className={styles.main}>
          <AboutText />
        </main>

        <Footer />
      </div>
    </>
  );
}
