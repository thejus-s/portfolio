import React, { useState } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../Utils";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const allSkills = ["All", ...new Set(projects.flatMap(project => project.skills))];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.skills.includes(activeFilter));

  const handleProjectClick = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="projects" className={styles.container}>
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

      <div className={styles.content}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>My Projects</h2>
          <p className={styles.subtitle}>Here are some of my recent works that showcase my skills and experience</p>
        </div>

        <div className={styles.filterContainer}>
          {allSkills.map(skill => (
            <button
              key={skill}
              className={`${styles.filterBtn} ${activeFilter === skill ? styles.active : ''}`}
              onClick={() => setActiveFilter(skill)}
            >
              {skill}
              {activeFilter === skill && <div className={styles.filterGlow}></div>}
            </button>
          ))}
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className={styles.projectCard}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={styles.cardGlow}></div>
              
              <div className={styles.cardHeader}>
                <div className={styles.imageContainer}>
                  <img
                    src={getImageUrl(project.imageurl)}
                    alt={project.title}
                    className={styles.projectImage}
                  />
                  <div className={`${styles.imageOverlay} ${hoveredProject === index ? styles.visible : ''}`}>
                    <div className={styles.projectLinks}>
                      <button 
                        className={`${styles.viewButton} ${!project.liveUrl || project.liveUrl === '#' ? styles.disabled : ''}`}
                        onClick={() => handleProjectClick(project.liveUrl)}
                        disabled={!project.liveUrl || project.liveUrl === '#'}
                      >
                        <span className={styles.btnIcon}>🌐</span>
                        <span className={styles.btnText}>
                          {project.liveUrl && project.liveUrl !== '#' ? 'Live Demo' : 'Coming Soon'}
                        </span>
                      </button>
                      <button 
                        className={`${styles.codeButton} ${!project.codeUrl || project.codeUrl === '#' ? styles.disabled : ''}`}
                        onClick={() => handleProjectClick(project.codeUrl)}
                        disabled={!project.codeUrl || project.codeUrl === '#'}
                      >
                        <span className={styles.btnIcon}>💻</span>
                        <span className={styles.btnText}>
                          {project.codeUrl && project.codeUrl !== '#' ? 'View Code' : 'Private'}
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className={styles.projectBadge}>
                    <span>{project.skills[0]}</span>
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
            <div className={styles.noProjectsIcon}>🔍</div>
            <p>No projects found for <span className={styles.filterText}>{activeFilter}</span></p>
            <p className={styles.noProjectsSub}>Try selecting another filter or check back later!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;