import { useState } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/compenents/Header";
import Navbar from "@/compenents/Navbar";
import Footer from "@/compenents/Footer";
import MusicCover from "@/compenents/MusicCover";
import SpotifyFrame from "@/compenents/SpotifyFrame";
import Clothes from "@/compenents/Clothes";
import Links from "@/compenents/Links";
import Clock from "@/compenents/Clock";
import Photos from "@/compenents/Photos";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <Head>
        <title>WOTTIEM</title>
        <meta name="description" content="Generated by create next app" />
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
      <Header />
      <Navbar />
      <Links />
      <Clock />
      {/* Conteúdo da página */}
      <div className={`${styles.page}`}>

        <main className={styles.main}>
          
          <Clothes />
          <Photos />
          <MusicCover />
          <SpotifyFrame />
        </main>

        <Footer />
      </div>
    </>
  );
}
