import "./about.css";
import aboutImage from "../../assets/profile11.png";
import cv from "../../assets/Resume.pdf";

export default function About() {
  return (
    <>
    <div className="about body-font" id="about">
        <div className="left-section">
            <img src={aboutImage} ></img>
        </div>
        <div className="right-section">
            <h1 className="backText">About</h1>
            <h1 className="frontText"><b>About Me</b></h1>
            <p className="Descriptive-text">A web developer with a passion for clean design and functional code, I specialize in building responsive, user-focused websites that make a lasting impact. With a strong foundation in front-end and back-end technologies, I aim to deliver digital solutions that are not only visually appealing but also optimized for performance and user experience. Whether it's a simple landing page or a complex web application, every project is built with precision, creativity, and a focus on results.</p>
            <div className="details">
                <div className="heads">
                    <li>Name</li>
                    <li>Date of birth</li>
                    <li>Address</li>
                    <li>Zip code</li>
                    <li>E-mail</li>
                    <li>Phone</li>
                </div>
                <div className="info">
                    <li>Akshat kala</li>
                    <li>November 05, 2005</li>
                    <li>Himalayan colony, Najibabad</li>
                    <li>246763</li>
                    <li>itzakshat706@gmail.com</li>
                    <li>+91 8923 700017</li>
                </div>

            </div>
            <div className="NoOfProjects">
                <p><span>5+</span> Projects Worked on </p>
                <a href={cv} download='CV.pdf'>
                    <button type="button" class="cvBtn">Download CV</button>
                </a>
            </div>

        </div>
    </div>
    </>

  );
}