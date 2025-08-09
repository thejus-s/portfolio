import React from 'react'
import styles from "./Footer.module.css"
import { getImageUrl } from '../../Utils'

const Footer = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li>
                <img src={getImageUrl("mail.png")} alt="email" />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sthejus47@gmail.com" target='_blank' rel='noopener noreferrer' className={styles.desktop} >sthejus47@gmail.com</a>

                <a href="mailto:sthejus47@gmail.com" className={styles.mobile}>sthejus47@gmail.com</a>
            </li>
            <li>
                <img src={getImageUrl("linkedin.png")} alt="LinkedIn" />
                <a href="https://www.linkedin.com/in/thejs/">LinkedIn</a>
            </li>
            <li>
                <img src={getImageUrl("git.png")} alt="GitHub" />
                <a href="https://github.com/thejus-s">GitHub</a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer