import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../Utils";

const About = () => {
  return (
    <section id='about' className={styles.container}>
      {/* Background Elements */}
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

      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.subtitle}>Passionate developer crafting digital experiences with modern technologies</p>
      </div>

      <div className={styles.content}>
        
        <div className={styles.profileSection}>
          <div className={styles.imageContainer}>
            <img
              src={getImageUrl("heroImg.jpg")}
              alt="Thejus - Full Stack Developer"
              className={styles.profileImage}
            />
            <div className={styles.imageGlow}></div>
            <div className={styles.imageBorderGlow}></div>
          </div>
          
          <div className={styles.intro}>
            <p className={styles.summary}>
              Python Full Stack Developer with expertise in building responsive web applications using modern 
              technologies. Experienced in Django, React, and PostgreSQL for creating dynamic, user-friendly 
              solutions with secure authentication and role-based systems.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.number}>10+</span>
                <span className={styles.label}>Projects</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>5+</span>
                <span className={styles.label}>Technologies</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>1+</span>
                <span className={styles.label}>Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutItem}>
            <div className={styles.itemHeader}>
              <div className={styles.icon}>⚡</div>
              <h3>Frontend Developer</h3>
            </div>
            <div className={styles.aboutItemText}>
              <p>I build responsive and optimized sites using React, HTML, CSS, JavaScript, and Bootstrap with focus on user experience and performance.</p>
              <div className={styles.skillTags}>
                <span>React</span>
                <span>JavaScript</span>
                <span>HTML/CSS</span>
                <span>Bootstrap</span>
                <span>Tailwind</span>
              </div>
            </div>
            <div className={styles.itemGlow}></div>
          </div>

          <div className={styles.aboutItem}>
            <div className={styles.itemHeader}>
              <div className={styles.icon}>🔧</div>
              <h3>Backend Developer</h3>
            </div>
            <div className={styles.aboutItemText}>
              <p>I develop robust back-end systems, REST APIs, and databases with Django and PostgreSQL, ensuring scalability and security.</p>
              <div className={styles.skillTags}>
                <span>Python</span>
                <span>Django</span>
                <span>PostgreSQL</span>
                <span>REST API</span>
                <span>Authentication</span>
              </div>
            </div>
            <div className={styles.itemGlow}></div>
          </div>

          <div className={styles.aboutItem}>
            <div className={styles.itemHeader}>
              <div className={styles.icon}>🎨</div>
              <h3>Full Stack Solutions</h3>
            </div>
            <div className={styles.aboutItemText}>
              <p>I create complete web applications with secure authentication, role-based access, and optimized workflows from concept to deployment.</p>
              <div className={styles.skillTags}>
                <span>Docker</span>
                <span>Git</span>
                <span>Deployment</span>
                <span>System Design</span>
                <span>Agile</span>
              </div>
            </div>
            <div className={styles.itemGlow}></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;