import "./skills.css";
import React from "react";
export default function Skills() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Python', 'SQL', 'Git', 'Canva', 'Figma'],
      typeSpeed: 200,
      backSpeed: 200,
      shuffle: true,
      backDelay: 900,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };  
  }, []);

  return (
    <div className="skills body-font" id="skills">
        <h1 className="backText">Skills</h1>
        <h1 className="frontText">Skills</h1>
        <h2 className="skillsText">I have experience working with : <span ref={el} /></h2>

        <div className="icons">
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3"></i>
            <i class="fa-brands fa-js"></i>
            <i class="fa-brands fa-react"></i>
            <i class="fa-brands fa-node"></i>
            <i class="fa-solid fa-code"></i>
            <i class="fa-solid fa-database"></i>
            <i class="fa-brands fa-python"></i>
            <i class="fa-solid fa-server"></i>
            <i class="fa-brands fa-git"></i>
            <i class="fa-solid fa-compass-drafting"></i>
            <i class="fa-brands fa-figma"></i>
        </div>
      
    </div>
  );
}