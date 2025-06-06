import "./navbar.css";

export default function Navbar() {
    return (
        <>
            <div className="nav nav-font">
                <div className="left"><a href="#">AKSHAT</a></div>
                <div className="right">
                    <ul>
                        <li><a href="#home" className="active">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </>

    )
}