import styles from "@/styles/MusicCover.module.css";

const MusicCover = () => (
    <section className={styles.musicsCover}>
        <div className={styles.albumParasita}>
            <a href="https://youtube.com/playlist?list=PLFWypV3Onhh5HNVEm_8Syq-y9qXjXAuna&si=N2QR4fRdOzA9UBAA" target="_blank">
                <img className={styles.imgMusicsLinks} src="/assets/music/parasita.jpg" alt="Parasita" />
            </a>
            <div className={styles.infContent}>
                <h1 className={styles.titleAlbum}>PARASITA</h1>
                <p className={styles.descAlbumDate}>Released October 16, 2023</p>
                <div className={styles.btnLinkMusic}>
                <a href="https://youtube.com/playlist?list=PLFWypV3Onhh5HNVEm_8Syq-y9qXjXAuna&si=N2QR4fRdOzA9UBAA" target="_blank">Ouvir</a>
            </div>
          </div>
        </div>
    </section>
);

export default MusicCover;