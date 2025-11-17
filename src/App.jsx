import styles from "./App.module.css"
import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Projects  from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
function App() {

  return (
    <div className={styles.App}>
     <Navbar/>
     <Hero/>
     <Skills/>
     <Experience />
     <About/>
     <Projects/>
     <Footer/>
    </div>
  )
}

export default App
