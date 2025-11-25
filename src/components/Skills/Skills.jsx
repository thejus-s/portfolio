import React, { useState } from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../Utils";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const handleSkillInteraction = (index) => {
    setActiveSkill(activeSkill === index ? null : index);
  };

  return (
    <section id="skills" className={styles.skillsSection}>
      {/* Background Elements - Same as Hero */}
      <div className={styles.backgroundElements}>
        <div className={styles.gradientOrb}></div>
        <div className={styles.gradientOrb2}></div>
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
        <h2 className={styles.title}>Skills & Technologies</h2>
        <p className={styles.subtitle}>Technologies I work with to create amazing digital experiences</p>
      </div>

      <div className={styles.capsuleContainer}>
        {skills.map((skill, index) => (
          <div 
            className={`${styles.skillCapsule} ${activeSkill === index ? styles.active : ''}`}
            key={skill.id || index}
            onMouseEnter={() => setActiveSkill(index)}
            onMouseLeave={() => setActiveSkill(null)}
            onClick={() => handleSkillInteraction(index)}
          >
            <div className={styles.capsuleContent}>
              <div className={styles.iconWrapper}>
                <img
                  src={getImageUrl(skill.ImageUrl)}
                  alt={skill.title}
                  className={styles.skillIcon}
                />
                <div className={styles.iconGlow}></div>
              </div>
              <span className={styles.skillName}>{skill.title}</span>
            </div>
            <div className={styles.capsuleGlow}></div>
          </div>
        ))}
      </div>

      <div className={`${styles.skillDescription} ${activeSkill !== null ? styles.show : ''}`}>
        {activeSkill !== null && (
          <div className={styles.descriptionContent}>
            <h4>{skills[activeSkill].title}</h4>
            <p>{skills[activeSkill].description || `Experienced in building modern applications using ${skills[activeSkill].title}`}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;