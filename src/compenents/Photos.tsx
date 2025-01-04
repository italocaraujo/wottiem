import { useState } from "react";
import styles from "@/styles/Photo.module.css";

const Photos = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index); // Define qual botão foi clicado
      setTimeout(() => {
        setCopiedIndex(null); // Reseta a mensagem depois de 2 segundos
      }, 2000);
    });
  };

  const photos = [
    {
      src: "/assets/photos/phnumber2.jpg",
      alt: "WOTTIEM 2",
      link: "https://wottiem.vercel.app/pages/photo.html",
    },
    {
      src: "/assets/photos/phnumber1.jpg",
      alt: "WOTTIEM 1",
      link: "https://wottiem.vercel.app/pages/photo.html",
      description: "Caiu shampoo no meu olho, essa bosta tá ardendo.", // Adiciona descrição
    },
  ];

  return (
    <section>
      {photos.map((photo, index) => (
        <div key={index} className={styles.ph}>
          <img src={photo.src} alt={photo.alt} />
          {photo.description && <p className={styles.description}>"{photo.description}"</p>}
          <div
            id="btn-link"
            className={styles.btnLink}
            onClick={() => handleCopy(photo.link, index)}
          >
            {copiedIndex === index ? "Copiado!" : "LINK"}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Photos;
