import React, { useState } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../Utils";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const allSkills = ["All", ...new Set(projects.flatMap(project => project.skills))];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.skills.includes(activeFilter));

  return (
    <section id="projects" className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>My Projects</h1>
        <p className={styles.subtitle}>Here are some of my recent works that showcase my skills and experience</p>
        <div className={styles.filterContainer}>
          {allSkills.map(skill => (
            <button
              key={skill}
              className={`${styles.filterBtn} ${activeFilter === skill ? styles.active : ''}`}
              onClick={() => setActiveFilter(skill)}
            >
              {skill}
            </button>
          ))}
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.cardHeader}>
                <div className={styles.imageContainer}>
                  <img
                    src={getImageUrl(project.imageurl)}
                    alt={project.title}
                    className={styles.projectImage}
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.projectLinks}>
                      <button 
                        className={styles.viewButton}
                        onClick={() => window.open(project.liveUrl || '#', '_blank')}
                      >
                        <span>🌐</span> Live Demo
                      </button>
                      <button 
                        className={styles.codeButton}
                        onClick={() => window.open(project.codeUrl || '#', '_blank')}
                      >
                        <span>💻</span> View Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.features}>
                  {project.features && project.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className={styles.featureTag}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.skillsContainer}>
                  {project.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className={styles.skillTag}
                      onClick={() => setActiveFilter(skill)}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className={styles.noProjects}>
            <p>No projects found for {activeFilter}. Try another filter!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;