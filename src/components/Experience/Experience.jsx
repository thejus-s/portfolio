import React from "react";
import styles from "./Experience.module.css";
import experiences from "../../data/exphistory.json";
import { getImageUrl } from "../../Utils";

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h1 className={styles.title}>Experience</h1>
      <div className={styles.content}>
        
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.experienceItem}>
              
              {index !== experiences.length - 1 && (
                <div className={styles.timelineConnector}></div>
              )}

              <div className={styles.experienceCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.logoContainer}>
                    <img
                      src={getImageUrl(exp.logo)}
                      alt={`${exp.org} logo`}
                      className={styles.logo}
                    />
                  </div>
                  <div className={styles.roleInfo}>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.org}>{exp.org}</p>
                    <p className={styles.duration}>
                      {exp.startdate} - {exp.enddate}
                    </p>
                  </div>
                </div>

                <div className={styles.experienceContent}>
                  <ul className={styles.experienceList}>
                    {exp.Experiences.map((point, pointIndex) => (
                      <li key={pointIndex} className={styles.experiencePoint}>
                        <div className={styles.pointMarker}></div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.skillTags}>
                    <span>Python</span>
                    <span>Django</span>
                    <span>PostgreSQL</span>
                    <span>React</span>
                    <span>Full Stack</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;