import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import { getImageUrl } from '../../Utils'
import ShinyText from '../ReactBits/ShinyText';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className={styles.navbar}>
            <ShinyText text="THEJUS S" disabled={false} speed={3} className={styles.title} />
            <div className={styles.menu}>
                <img className={`${styles.menuBtn} ${menuOpen ? styles.menuOpen : ''}`} src={
                    menuOpen ? getImageUrl('closebtn.png') : getImageUrl('menuIcon.png')
                } alt="Menubtn"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
                    <li><a href="#about" onClick={() => setMenuOpen(!menuOpen)}>About</a></li>
                    <li><a href="#experience" onClick={() => setMenuOpen(!menuOpen)}>Experience</a></li>
                    <li><a href="#projects" onClick={() => setMenuOpen(!menuOpen)}>Projects</a></li>
                    <li><a href="#contact" onClick={() => setMenuOpen(!menuOpen)}>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar