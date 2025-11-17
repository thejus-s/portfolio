import React, { useState } from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../Utils";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section  id="skills"  className={styles.skillsSection}>
      
      <div className={styles.headerRow}>
        <h3>Tools I Use</h3>
        <p>I'm experienced in these technologies.</p>
      </div>

      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <div 
            className={`${styles.skillBox} ${activeSkill === index ? styles.active : ''}`}
            key={index}
            onMouseEnter={() => setActiveSkill(index)}
            onMouseLeave={() => setActiveSkill(null)}
            onClick={() => setActiveSkill(activeSkill === index ? null : index)}
          >
            <div className={styles.iconContainer}>
              <img
                src={getImageUrl(skill.ImageUrl)}
                alt={skill.title}
                className={styles.icon}
              />
              <div className={styles.hoverEffect}></div>
            </div>
            <span>{skill.title}</span>
            <div className={styles.skillGlow}></div>
          </div>
        ))}
      </div>

      <div className={`${styles.skillDescription} ${activeSkill !== null ? styles.show : ''}`}>
        {activeSkill !== null && (
          <div className={styles.descriptionContent}>
            <h4>{skills[activeSkill].title}</h4>
            <p>Experienced in building modern applications using {skills[activeSkill].title}</p>
          </div>
        )}
      </div>

    </section>
  );
};

export default Skills;