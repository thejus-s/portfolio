import React from 'react'
import styles from "./Footer.module.css"
import { getImageUrl } from '../../Utils'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id='contact' className={styles.container}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.footerOrb}></div>
        <div className={styles.footerGrid}></div>
        <div className={styles.circuitLines}></div>
      </div>

      <div className={styles.content}>
        {/* Main Footer Content */}
        <div className={styles.mainSection}>
          <div className={styles.text}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              <span className={styles.badgeText}>Let's Connect</span>
              <div className={styles.badgeGlow}></div>
            </div>
            <h2 className={styles.title}>Ready to Create Something <span className={styles.gradientText}>Amazing?</span></h2>
            <p className={styles.subtitle}>Let's bring your ideas to life with cutting-edge technology and innovative solutions.</p>
          </div>

          {/* Contact Links with Cyber Style */}
          <div className={styles.contactSection}>
            <div className={styles.contactGrid}>
              <div className={styles.contactCard}>
                <div className={styles.cardIcon}>
                  <img src={getImageUrl("mail.png")} alt="Email" />
                  <div className={styles.iconGlow}></div>
                </div>
                <div className={styles.cardContent}>
                  <h3>Email</h3>
                  <div className={styles.linkGroup}>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sthejus47@gmail.com" target='_blank' rel='noopener noreferrer' className={styles.desktop}>
                      sthejus47@gmail.com
                    </a>
                    <a href="mailto:sthejus47@gmail.com" className={styles.mobile}>
                      sthejus47@gmail.com
                    </a>
                    <div className={styles.linkHover}></div>
                  </div>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.cardIcon}>
                  <img src={getImageUrl("linkedin.png")} alt="LinkedIn" />
                  <div className={styles.iconGlow}></div>
                </div>
                <div className={styles.cardContent}>
                  <h3>LinkedIn</h3>
                  <div className={styles.linkGroup}>
                    <a href="https://www.linkedin.com/in/thejs/" target='_blank' rel='noopener noreferrer'>
                      Connect with me
                    </a>
                    <div className={styles.linkHover}></div>
                  </div>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.cardIcon}>
                  <img src={getImageUrl("git.png")} alt="GitHub" />
                  <div className={styles.iconGlow}></div>
                </div>
                <div className={styles.cardContent}>
                  <h3>GitHub</h3>
                  <div className={styles.linkGroup}>
                    <a href="https://github.com/thejus-s" target='_blank' rel='noopener noreferrer'>
                      View my work
                    </a>
                    <div className={styles.linkHover}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links
        <div className={styles.quickLinks}>
          <div className={styles.quickLink}>
            <span className={styles.linkNumber}>01</span>
            <a href="#home" onClick={scrollToTop}>Home</a>
          </div>
          <div className={styles.quickLink}>
            <span className={styles.linkNumber}>02</span>
            <a href="#projects">Projects</a>
          </div>
          <div className={styles.quickLink}>
            <span className={styles.linkNumber}>03</span>
            <a href="#experience">Experience</a>
          </div>
        </div> */}

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            <div className={styles.copyrightGlow}></div>
            <p>&copy; 2024 Thejus. All rights reserved.</p>
            <span className={styles.copyrightSub}>Crafted with passion and innovation</span>
          </div>
          
          <div className={styles.scrollTop} onClick={scrollToTop}>
            <div className={styles.scrollIcon}>
              <span>↑</span>
              <div className={styles.scrollGlow}></div>
            </div>
            <span>Back to Top</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer