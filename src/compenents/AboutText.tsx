import styles from "@/styles/AboutText.module.css";

const AboutText = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.titleDivImg}>
        <img src="/assets/about/titleZECA.png" alt="ZECA CORREIA" className={styles.titleImg}/>
      </div>
      <p className={styles.text}>
        Zeca Correia é um artista que transcende rótulos, misturando o experimentalismo com as raízes ricas de sua cultura pernambucana. 
        Sua sonoridade passeia entre o orgânico e o sintético, incorporando ritmos, texturas e atmosferas que desafiam convenções e criam uma identidade própria.
      </p>
      <p className={styles.text}>
        Nascido e criado em Recife, Zeca carrega consigo a efervescência cultural da cidade, onde o frevo, o maracatu e a cena alternativa se encontram e se reinventam. 
        Suas composições ressoam essa diversidade, ora flertando com beats eletrônicos e harmonias etéreas, ora evocando a cadência e a força da música popular nordestina.
      </p>
      <p className={styles.text}>
        Com um olhar inquieto e inovador, Zeca explora a música como um campo aberto para experimentações, misturando elementos inusitados e criando atmosferas que evocam tanto a tradição quanto o futuro. 
        Seja através de camadas sonoras detalhadas ou letras que refletem suas vivências, ele transforma sua arte em uma ponte entre o íntimo e o coletivo, entre o novo e o ancestral.
      </p>
      <p className={styles.text}>
        Zeca Correia não apenas faz música – ele constrói paisagens sonoras que capturam a essência de sua terra e de sua alma artística, sempre em movimento, sempre explorando.
      </p>
      <div className={styles.divImgAbout}>
        <img src="/assets/about/about-img.jpg" alt="ZECA" className={styles.imgAbout}/>
      </div>
    </section>
  );
};

export default AboutText;