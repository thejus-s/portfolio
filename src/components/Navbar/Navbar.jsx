import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (section) => {
    setActiveLink(section);
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      
      <div className={styles.logo}>
        <span className={styles.logoText}>THEJUS</span>
        <div className={styles.logoGlow}></div>
      </div>

      <ul className={styles.navLinks}>
        <li>
          <a 
            href="#home" 
            className={activeLink === "home" ? styles.active : ""}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            className={activeLink === "about" ? styles.active : ""}
            onClick={() => handleLinkClick("about")}
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            className={activeLink === "projects" ? styles.active : ""}
            onClick={() => handleLinkClick("projects")}
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#skills" 
            className={activeLink === "skills" ? styles.active : ""}
            onClick={() => handleLinkClick("skills")}
          >
            Skills
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className={activeLink === "contact" ? styles.active : ""}
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </a>
        </li>
      </ul>

      <button 
        className={`${styles.menuBtn} ${isOpen ? styles.open : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <div className={styles.mobileMenuContent}>
          <a 
            href="#home" 
            className={activeLink === "home" ? styles.active : ""}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={activeLink === "about" ? styles.active : ""}
            onClick={() => handleLinkClick("about")}
          >
            About
          </a>
          <a 
            href="#projects" 
            className={activeLink === "projects" ? styles.active : ""}
            onClick={() => handleLinkClick("projects")}
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className={activeLink === "skills" ? styles.active : ""}
            onClick={() => handleLinkClick("skills")}
          >
            Skills
          </a>
          <a 
            href="#contact" 
            className={activeLink === "contact" ? styles.active : ""}
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;