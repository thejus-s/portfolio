import React from 'react'
import styles from "./About.module.css"
import { getImageUrl } from '../../Utils'

const About = () => {
  return (
    <section id='about' className= {styles.container}>
      <h1 className= {styles.title}>About</h1>
      <div className= {styles.content}>
        <img src={getImageUrl('sittingwithlap.png')} alt="sitting with lap" className= {styles.aboutImg}/>
        <ul className= {styles.aboutItems}>
          <li className= {styles.aboutItem}>
            <img src={getImageUrl('cursor.png')} alt="Cursor Image" />
            <div className= {styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I’m a front-end developer with experience in building responsive and optimized sites</p>
            </div>
          </li>
          <li className= {styles.aboutItem}>
            <img src={getImageUrl('server.png')} alt="Server Image" />
            <div className= {styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have experience developing fast and optimised back-end systems and APIs</p>
            </div>
          </li>
          <li className= {styles.aboutItem}>
            <img src={getImageUrl('UI.png')} alt="UI Icon" />
            <div className= {styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>I have designed multiple landing pages and have created design systems as well</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About