import { useState } from "react";
import styles from "@/styles/Clothes.module.css";

const Clothes = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index); // Define qual botão foi clicado
      setTimeout(() => {
        setCopiedIndex(null); // Reseta o estado após 2 segundos
      }, 2000);
    });
  };

  const clothes = [
    {
      imgSrc: "/assets/clothes/tshirt-n1.png",
      title: "WOT TTT IEM T-SHIRT",
      details: ["100% ALGODÃO", "MADE IN BRAZIL"],
      status: "ESGOTADO",
      link: "https://wottiem.vercel.app",
    },
    {
      imgSrc: "/assets/clothes/tshirt-n2.png",
      title: "WOTTIEM T-SHIRT",
      details: ["100% ALGODÃO", "MADE IN BRAZIL"],
      status: "ESGOTADO",
      link: "https://wottiem.vercel.app",
    },
    {
      imgSrc: "/assets/clothes/tshirt-n3.png",
      title: "BEN BIRD T-SHIRT",
      details: ["100% ALGODÃO", "MADE IN BRAZIL"],
      status: "ESGOTADO",
      link: "https://wottiem.vercel.app",
    },
    {
      imgSrc: "/assets/clothes/tshirt-n4.png",
      title: "FACES T-SHIRT",
      details: ["100% ALGODÃO", "MADE IN BRAZIL"],
      status: "ESGOTADO",
      link: "https://wottiem.vercel.app",
    },
  ];

  return (
    <section className={styles.videoContainer}>
      {clothes.map((item, index) => (
        <div key={index} className={styles.tshirt}>
          <img id={styles.shirtImg} src={item.imgSrc} alt={item.title} />
          <h1 id={styles.title}>{item.title}</h1>
          {item.details.map((detail, detailIndex) => (
            <p key={detailIndex} id={styles.subtitle}>
              {detail}
            </p>
          ))}
          <h1 id={styles.title}>{item.status}</h1>
          <div
            id={styles.btnLink}
            className={styles.btnLink}
            onClick={() => handleCopy(item.link, index)}
          >
            {copiedIndex === index ? "Copiado!" : "LINK"}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Clothes;
