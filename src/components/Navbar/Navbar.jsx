import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../Utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      
      <div className={styles.logo}>
        <span>THEJUS</span>
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      
      <button 
        className={styles.menuBtn} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <img 
          src={getImageUrl("menu.svg")} 
          alt="menu" 
        />
      </button>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
