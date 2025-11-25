import React, { useState } from "react";
import styles from "./Experience.module.css";
import experiences from "../../data/exphistory.json";
import { getImageUrl } from "../../Utils";

const Experience = () => {
  const [activeExp, setActiveExp] = useState(0);

  const getSkillsFromExperience = (experience) => {
    const skillsMap = {
      "Python": ["python", "django", "flask"],
      "Django": ["django", "python"],
      "PostgreSQL": ["postgresql", "database", "sql"],
      "React": ["react", "frontend", "javascript"],
      "Full Stack": ["full stack", "full-stack"],
      "RESTful APIs": ["api", "rest", "backend"],
      "JavaScript": ["javascript", "js", "frontend"],
      "CSS": ["css", "styling", "frontend"]
    };

    const expText = experience.Experiences.join(' ').toLowerCase();
    const matchedSkills = [];

    Object.keys(skillsMap).forEach(skill => {
      if (skillsMap[skill].some(keyword => expText.includes(keyword))) {
        matchedSkills.push(skill);
      }
    });

    return matchedSkills.length > 0 ? matchedSkills : ["Python", "Django", "React", "PostgreSQL"];
  };

  return (
    <section id="experience" className={styles.container}>
      {/* Background Elements - Complete Set */}
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
        <h2 className={styles.title}>Work Experience</h2>
        <p className={styles.subtitle}>My professional journey and contributions</p>
      </div>

      <div className={styles.content}>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => {
            const skills = getSkillsFromExperience(exp);
            return (
              <div 
                key={index} 
                className={`${styles.experienceItem} ${activeExp === index ? styles.active : ''}`}
                onClick={() => setActiveExp(index)}
              >
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className={styles.timelineConnector}></div>
                )}

                {/* Timeline Dot */}
                <div className={styles.timelineDot}>
                  <div className={styles.dotCore}></div>
                  <div className={styles.dotPulse}></div>
                </div>

                <div className={styles.experienceCard}>
                  <div className={styles.cardGlow}></div>
                  
                  <div className={styles.cardHeader}>
                    <div className={styles.logoContainer}>
                      <img
                        src={getImageUrl(exp.logo)}
                        alt={`${exp.org} logo`}
                        className={styles.logo}
                      />
                      <div className={styles.logoGlow}></div>
                    </div>
                    <div className={styles.roleInfo}>
                      <h3 className={styles.role}>{exp.role}</h3>
                      <p className={styles.org}>{exp.org}</p>
                      <div className={styles.duration}>
                        <span className={styles.durationIcon}>📅</span>
                        {exp.startdate} - {exp.enddate}
                      </div>
                    </div>
                    <div className={styles.cardBadge}>
                      <span>Internship</span>
                    </div>
                  </div>

                  <div className={styles.experienceContent}>
                    <div className={styles.contentHeader}>
                      <h4 className={styles.contentTitle}>Key Contributions</h4>
                      <div className={styles.contentLine}></div>
                    </div>
                    <ul className={styles.experienceList}>
                      {exp.Experiences.map((point, pointIndex) => (
                        <li key={pointIndex} className={styles.experiencePoint}>
                          <div className={styles.pointMarker}>
                            <div className={styles.markerDot}></div>
                          </div>
                          <span className={styles.pointText}>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.cardFooter}>
                    <div className={styles.skillsSection}>
                      <h5 className={styles.skillsTitle}>Technologies Used</h5>
                      <div className={styles.skillTags}>
                        {skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className={styles.skillTag}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Experience Navigation */}
      <div className={styles.expNavigation}>
        {experiences.map((_, index) => (
          <button
            key={index}
            className={`${styles.navDot} ${activeExp === index ? styles.active : ''}`}
            onClick={() => setActiveExp(index)}
            aria-label={`View experience ${index + 1}`}
          >
            <div className={styles.navDotInner}></div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Experience;