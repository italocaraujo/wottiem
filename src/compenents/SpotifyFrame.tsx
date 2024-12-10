import { useEffect } from "react";
import styles from '@/styles/Spotify.module.css';

const SpotifyFrame = () => {
    useEffect(() => {
        // Carregar o script do Spotify Iframe API
        const script = document.createElement("script");
        script.src = "https://open.spotify.com/embed/iframe-api/v1";
        script.async = true;

        script.onload = () => {
            if (typeof window.onSpotifyIframeApiReady === "undefined") {
                window.onSpotifyIframeApiReady = (IFrameAPI: any) => {
                    const element = document.getElementById("embed-iframe");
                    if (element) {
                        const options = {
                            width: "100%", // Ajuste para ocupar 100% da largura
                            height: "900", // Ajuste de altura
                            uri: "spotify:playlist:4pomryuY2J4dgsrYycJqul?si=264a0b39cb9644c0", // URI da playlist
                            theme: "dark", // Tema escuro
                        };

                        const callback = (EmbedController: any) => {
                            document.querySelectorAll(".episode").forEach((episode) => {
                                const element = episode as HTMLElement;
                                element.addEventListener("click", () => {
                                    EmbedController.loadUri(element.dataset.spotifyId || "");
                                });
                            });
                        };

                        IFrameAPI.createController(element, options, callback);
                    }
                };
            }
        };

        document.body.appendChild(script);

        // Cleanup para remover o script ao desmontar o componente
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className={styles.spotifyEmbed}>
            <div id="embed-iframe"></div>
        </div>
    );
};

export default SpotifyFrame;
