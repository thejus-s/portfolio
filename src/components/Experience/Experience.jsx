import React from 'react'
import styles from './Experience.module.css'
import skills from '../../data/skills.json'
import { getImageUrl } from '../../Utils'
import histories from '../../data/exphistory.json'

const Experience = () => {
  return (
    <section id='experience' className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skill,id)=>{
                    return(
                        <div key={id} className={styles.skill}>
                            <div className={styles.skillImage}><img src={getImageUrl(skill.ImageUrl)} alt={skill.title} /></div>
                            <p>{skill.title}</p>
                        </div>
                    )
                }
                )}
            </div>
            <ul className={styles.history}>
                {histories.map((history,id)=>{
                    return(
                        <li key={id} className={styles.historyItem}>
                            <img src={getImageUrl(history.logo)} alt={`${history.org}`} />
                            <div className={styles.historyItemDetails}>
                                <h3>{`${history.role}, ${history.org}`}</h3>
                                <p>{`${history.startdate}, ${history.enddate}`}</p>
                                <ul>{history.Experiences.map((experience,id) =>{
                                    return <li key={id}>{experience}</li>
                                }
                            )}</ul>
                            </div>
                        </li>
                    )
                }
            )}
            </ul>
        </div>
    </section>
  )
}

export default Experience