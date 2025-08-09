import React from 'react'
import styles from "./project.module.css"
import projects from "../../data/projects.json"
import ProjectCard from './ProjectCard'


export const Projects = () => {
  return (
    <section id='projects' className={styles.container}>
       <h2 className={styles.title}>Projects</h2>
       <div className={styles.content}>
        {projects.map((project,id) => {
            return <ProjectCard key={id} project={project} />
        }
    )}
       </div>
    </section>
  )
}
