import React from 'react'
import styles from './ProjectCard.module.css'
import { getImageUrl } from '../../Utils'
import SpotlightCard from '../ReactBits/SpotlightCard';

const ProjectCard = ({ project }) => {
    return (
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(8, 200, 255, .3)">
            <div className={styles.container} >
                <img src={getImageUrl(project.imageurl)} alt={`${project.title} Image`} className={styles.projectImg} />
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <ul className={styles.skills}>
                    {project.skills.map((skill, id) => {
                        return <li key={id} className={styles.skill}>{skill}</li>
                    })}
                </ul>
                <div className={styles.links}>
                    <a href="#">Demo</a>
                    <a href="#">Source</a>
                </div>
            </div>
        </SpotlightCard>
    )
}

export default ProjectCard