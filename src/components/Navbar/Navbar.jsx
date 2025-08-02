import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { getImageUrl } from '../../Utils'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav className={styles.navbar}>
            <a href="#" className={styles.title}>Thejus S</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={
                    menuOpen ? getImageUrl('closebtn.png') : getImageUrl('menuIcon.png')
                } alt="Menubtn"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(!menuOpen)}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar