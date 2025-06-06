import Navbar from './components/header/navbar.jsx';
import About from './components/main/about.jsx';
import Intro from './components/main/intro.jsx';
import Resume from './components/main/resume.jsx';
import Skills from './components/main/skills.jsx';
import Projects from './components/main/projects.jsx';
import Contact from './components/main/contact.jsx';
import Footer from './components/footer/footer.jsx';
import './mainApp.css';

function App() {

  return (
    <>
      <Navbar/>
      <Intro/>
      <About/>
      <Resume/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
