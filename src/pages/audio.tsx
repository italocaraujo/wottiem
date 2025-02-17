import Head from "next/head";
import Navbar from "@/compenents/Navbar";
import Clock from "@/compenents/Clock";
import MusicCover from "@/compenents/MusicCover";
import SpotifyFrame from "@/compenents/SpotifyFrame";
import Footer from "@/compenents/Footer";

export default function Photo() {
    return(
        <>
            <Head>
                <title>ÁUDIO | ZECA</title>
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

            <main style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <MusicCover />
                <SpotifyFrame />
            </main>

            <Footer />
        </>
    )
}