import React from 'react'
import { getImageUrl } from '../../Utils'
import styles from './Hero.module.css'
import SplitText from "../ReactBits/SplitText";
import Magnet from '../ReactBits/Magnet'

const Hero = () => {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <SplitText
                    as='h1'
                    text="Hi, I'm Thejus"
                    className={styles.title}
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
                <p className={styles.description}>I’m a Full‑Stack Developer specializing in Python, Django, and React.
                    I build dynamic and scalable web applications—reach out to collaborate or learn more!</p>
                <div className={styles.buttonGroup}>
                    <Magnet padding={70} disabled={false} magnetStrength={50}>
                        <a href="mailto:sthejus47@gmail.com" className={`${styles.contactBtn} ${styles.mobileOnly}`}>Contact Me</a>
                        <a href="https://mail.google.com/mail/u/0/?fs=1&to=sthejus47@gmail.com&tf=cm" target='_blank' rel='noopener noreferrer' className={`${styles.contactBtn} ${styles.desktopOnly}`}>Contact Me</a>
                    </Magnet>
                    <Magnet padding={70} disabled={false} magnetStrength={50}>
                        <a href={getImageUrl("Thejus_Resume.pdf")} className={styles.downloadBtn} target='_blank' rel='noopener noreferrer'>Download CV</a>
                    </Magnet>
                </div>
            </div>
            <img src={getImageUrl('heroImg.png')} alt="HeroImage" className={styles.heroImg} />
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>

    )

}

export default Hero