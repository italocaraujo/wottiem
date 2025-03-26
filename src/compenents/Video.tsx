import { useState } from "react";
import styles from "@/styles/Video.module.css";

const Video = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index); // Define o índice do botão clicado
      setTimeout(() => {
        setCopiedIndex(null); // Reseta o estado após 2 segundos
      }, 2000);
    });
  };

  const videos = [
    {
        src: "https://www.youtube.com/embed/8L9MEuahScA?si=lFEjc2R5t0A6OnAw",
        link: "https://www.youtube.com/watch?v=8L9MEuahScA",
    },
  ];

  return (
    <section className={styles.videoContainer}>
      {videos.map((video, index) => (
        <div key={index} className={styles.video}>
          <iframe
            width="100%"
            height="600px"
            src={video.src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div
            className={styles.btnLink}
            onClick={() => handleCopy(video.link, index)}
          >
            {copiedIndex === index ? "Copiado!" : "LINK"}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Video;
