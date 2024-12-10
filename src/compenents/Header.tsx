import styles from "@/styles/MainVid.module.css";

const Header = () => (
    <section className={styles.videoContainer}>
        <video className={styles.mainVideo} autoPlay loop muted playsInline>
            <source src="/assets/main-video-banner.mp4" type="video/mp4" />
        </video>
    </section>
);

export default Header;