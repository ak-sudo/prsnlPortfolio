import "./intro.css";
import profileLogo from "../../assets/profile.png";

export default function Intro() {
    return(
        <div className="intro-section body-font" id="home">
            <div className="left-pannel">
                <p className="small-text">HELLO!</p>
                <h2>I'm <span>Akshat Kala</span></h2>
                <p className="description">a freelancing web developer helping out people round the globe</p>
                <div className="cta-buttons">
                    <button>Hire Me</button>
                    <button><a href="#projects">My Works</a></button>
                </div>
            </div>

            <div className="right-pannel">
                <div className="bgoval"></div>
                <img src={profileLogo} alt="Akshat Kala" className="profile-pic"/>
            </div>
        </div>
    )
}