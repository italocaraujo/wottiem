import styles from "@/styles/MusicCover.module.css";
import { useState } from "react";

// Array contendo os dados dos álbuns
const albums = [
  {
    title: "?",
    releaseDate: "2025",
    imageUrl: "/assets/music/what.png",
    altText: "?",
    listenUrl: "https://www.instagram.com/zec4correia/",
  },
  // Adicione mais álbuns aqui, se necessário
];

const MusicCover = () => {
  // Estado para controlar qual botão foi clicado
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Função para copiar texto para a área de transferência
  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index); // Define o índice do botão clicado
      setTimeout(() => {
        setCopiedIndex(null); // Reseta a mensagem depois de 2 segundos
      }, 2000);
    });
  };

  return (
    <section className={styles.musicsCover}>
      {albums.map((album, index) => (
        <div key={index} className={styles.albumParasita}>
          <a href={album.listenUrl} target="_blank" rel="noopener noreferrer">
            <img
              className={styles.imgMusicsLinks}
              src={album.imageUrl}
              alt={album.altText}
            />
          </a>
          <div className={styles.infContent}>
            <h1 className={styles.titleAlbum}>{album.title}</h1>
            <p className={styles.descAlbumDate}>{album.releaseDate}</p>
            <div
              id="btn-link"
              className={styles.btnLinkMusic}
              onClick={() => handleCopy("2025", index)}
            >
              {copiedIndex === index ? "Ainda não!" : "Ouvir"}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MusicCover;