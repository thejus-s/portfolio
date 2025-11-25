import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
    const handleContactClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleProjectsClick = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className={styles.heroSection}>
            {/* Dark Background Elements */}
            <div className={styles.backgroundElements}>
                <div className={styles.gradientOrb}></div>
                <div className={styles.gradientOrb2}></div>
                <div className={styles.gridPattern}></div>
                <div className={styles.floatingShapes}>
                    <div className={styles.shape1}></div>
                    <div className={styles.shape2}></div>
                    <div className={styles.shape3}></div>
                    <div className={styles.shape4}></div>
                </div>
                <div className={styles.animatedDots}></div>
                <div className={styles.circuitLines}></div>
            </div>

            <div className={styles.container}>
                {/* Center Section - Dark Theme */}
                <div className={styles.center}>
                    <div className={styles.contentWrapper}>
                        {/* Neon Badge */}
                        <div className={styles.badge}>
                            <span className={styles.badgeDot}></span>
                            <span className={styles.badgeText}>Available for new projects</span>
                            <div className={styles.badgeGlow}></div>
                        </div>
                        
                        {/* Main Title Section */}
                        <div className={styles.titleContainer}>
                            <p className={styles.smallTitle}>
                                <span className={styles.wave}>👋</span> HEY, I'M THEJUS
                            </p>

                            <h1 className={styles.mainTitle}>
                                <span className={styles.titleLine}>
                                    <span className={styles.titleGradient}>FULL STACK</span> DEVELOPER
                                </span>
                            </h1>
                        </div>

                        {/* Cyber Subtitle */}
                        <p className={styles.subtitle}>
                            Crafting <span className={styles.highlight}>digital experiences</span> with cutting-edge technologies 
                            and innovative design solutions. I bridge the gap between 
                            <span className={styles.highlight}> stunning interfaces</span> and 
                            <span className={styles.highlight}> powerful functionality</span>.
                        </p>

                        {/* Glowing CTA Buttons */}
                        <div className={styles.ctaContainer}>
                            <div className={styles.buttonGroup}>
                                <button 
                                    onClick={handleContactClick}
                                    className={`${styles.contactBtn} ${styles.primaryBtn}`}
                                >
                                    <span className={styles.btnIcon}>💬</span>
                                    <span className={styles.btnText}>GET IN TOUCH</span>
                                    <span className={styles.btnArrow}>→</span>
                                    <div className={styles.btnGlow}></div>
                                </button>
                                
                                <button 
                                    onClick={handleProjectsClick}
                                    className={`${styles.contactBtn} ${styles.secondaryBtn}`}
                                >
                                    <span className={styles.btnText}>VIEW PROJECTS</span>
                                    <div className={styles.btnHoverGlow}></div>
                                </button>
                            </div>
                        </div>

                        {/* Animated Tech Stack */}
                        <div className={styles.techScroll}>
                            <div className={styles.techScrollTrack}>
                                <div className={styles.techItems}>
                                    <span className={styles.techItem}>
                                        <span className={styles.techIcon}>⚛️</span>
                                        React
                                    </span>
                                    <span className={styles.techItem}>
                                        <span className={styles.techIcon}>🐍</span>
                                        Python
                                    </span>
                                    <span className={styles.techItem}>
                                        <span className={styles.techIcon}>🟨</span>
                                        JavaScript
                                    </span>
                                    <span className={styles.techItem}>
                                        <span className={styles.techIcon}>🐘</span>
                                        PostgreSQL
                                    </span>
                                    <span className={styles.techItem}>
                                        <span className={styles.techIcon}>🐳</span>
                                        Docker
                                    </span>
                                    <span className={styles.techItem}>
                                        <span className={styles.techIcon}>⚡</span>
                                        Node.js
                                    </span>
                                    <span className={styles.techItem}>
                                        <span className={styles.techIcon}>🎨</span>
                                        Figma
                                    </span>
                                    <span className={styles.techItem}>
                                        <span className={styles.techIcon}>☁️</span>
                                        AWS
                                    </span>
                                </div>
                                <div className={styles.techItems} aria-hidden="true">
                                    <span className={styles.techItem}>
                                        <span className={styles.techIcon}>⚛️</span>
                                        React
                                    </span>
                                    <span className={styles.techItem}>
                                        <span className={styles.techIcon}>🐍</span>
                                        Python
                                    </span>
                                    <span className={styles.techItem}>
                                        <span className={styles.techIcon}>🟨</span>
                                        JavaScript
                                    </span>
                                    <span className={styles.techItem}>
                                        <span className={styles.techIcon}>🐘</span>
                                        PostgreSQL
                                    </span>
                                    <span className={styles.techItem}>
                                        <span className={styles.techIcon}>🐳</span>
                                        Docker
                                    </span>
                                    <span className={styles.techItem}>
                                        <span className={styles.techIcon}>⚡</span>
                                        Node.js
                                    </span>
                                    <span className={styles.techItem}>
                                        <span className={styles.techIcon}>🎨</span>
                                        Figma
                                    </span>
                                    <span className={styles.techItem}>
                                        <span className={styles.techIcon}>☁️</span>
                                        AWS
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className={styles.scrollIndicator}>
                <div className={styles.scrollAnimation}>
                    <div className={styles.scrollLine}></div>
                    <div className={styles.scrollDot}></div>
                </div>
                <span className={styles.scrollText}>SCROLL TO EXPLORE</span>
            </div>
        </section>
    );
};

export default Hero;