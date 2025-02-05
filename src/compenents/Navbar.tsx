import { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Navbar.module.css";
import ListenSection from "@/compenents/ListenSection";
import OuvirSection from "@/compenents/ListenSection";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false); // Estado para o fechamento
  const [isListenVisible, setIsListenVisible] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuClosing(true); // Ativa a classe de fechamento
      setTimeout(() => {
        setMenuOpen(false); // Fecha o menu após a animação
        setMenuClosing(false); // Reseta o estado
      }, 300); // Duração da animação de transição (ajustável conforme o CSS)
    } else {
      setMenuOpen(true);
    }
  };

  const getDynamicLink = (href: string) => {
    if (router.pathname === "/photo" && href === "/#all") {
      return "/";
    }
    return href;
  };

  const toggleListenSection = () => {
    setIsListenVisible((prev) => !prev);
  };

  return (
    <>
      <div
        className={`${styles.listenWrapper} ${
          isListenVisible ? styles.show : ""
        }`}
      >
        <OuvirSection onClose={toggleListenSection} />
      </div>

      <nav className={styles.navbar}>
        <div className={styles.left} onClick={toggleListenSection}>
          <button className={styles.leftLink}>OUVIR</button>
        </div>

        <div className={`${styles.center} ${menuOpen ? styles.active : ""}`}>
          <a href={getDynamicLink("/#all")}>ALL</a>
          <a href="/photo">PHOTO</a>
          <a href="/video">VIDEO</a>
          <a href="/audio">AUDIO</a>
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            aria-hidden="true"
            focusable="false"
            fill="none"
            viewBox="0 0 32 32"
          >
            <g fill="currentColor">
              <path d="m9 11h14v2h-14z"></path>
              <path d="m9 15h14v2h-14z"></path>
              <path d="m9 19h14v2h-14z"></path>
            </g>
          </svg>
        </div>

        <div className={styles.right}>
          <a
            className={styles.rightLink}
            href="https://www.kyotorecords.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            KYOTO
          </a>
        </div>

        {/* Overlay e Sidebar */}
        {menuOpen && (
          <>
            <div
              className={`${styles.overlay} ${
                menuOpen ? styles.active : ""
              }`}
              onClick={toggleMenu}
            ></div>
            <div
              className={`${styles.sidebar} ${
                menuOpen ? styles.open : ""
              } ${menuClosing ? styles.closing : ""}`}
            >
              <div className={styles.divCloseBtn}>
                <span className={styles.closeBtn} onClick={toggleMenu}>
                  <svg
                    fill="#000000"
                    opacity={0.8}
                    height="10px"
                    width="10px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 512,452.922 315.076,256" />
                    </g>
                  </svg>
                </span>
              </div>
              <a href={getDynamicLink("/#all")}>ALL</a>
              <a href="/photo">PHOTO</a>
              <a href="/video">VIDEO</a>
              <a href="/audio">AUDIO</a>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
