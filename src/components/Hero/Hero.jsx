import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../Utils";

const Hero = () => {
    return (
        <section className={styles.heroSection}>

            <div className={styles.left}>
                <p className={styles.smallTitle}>Hey, I'm Thejus,</p>

                <h1 className={styles.mainTitle}>
                    <span className={styles.titleLine}>A full stack developer</span>
                    <span className={styles.titleLine}>& web designer</span>
                </h1>

                <p className={styles.subtitle}>
                    Crafting digital experiences with modern technologies and creative design solutions
                </p>

                <button  id="contact" className={styles.contactBtn}>Contact Me</button>
            </div>

            <div className={styles.center}>
                <img
                    src={getImageUrl("heroImg.png")}
                    alt="profile"
                    className={styles.heroImg}
                />
            </div>

            <div className={styles.right}>
                <div className={styles.techStack}><h2>JavaScript</h2><p>Core Language</p></div>
                <div className={styles.techStack}><h2>Python</h2><p>Backend & AI</p></div>
                <div className={styles.techStack}><h2>PostgreSQL</h2><p>Database</p></div>
            </div>

        </section>
    );
};

export default Hero;