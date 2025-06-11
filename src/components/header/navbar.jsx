import "./navbar.css";

export default function Navbar() {
    function callNav() {
        const slideNav = document.querySelector(".slideNavHidden");
        slideNav.classList.add("slideNav");

        slideNav.classList.remove("slideNavHidden");
    }

    function hideNav() {
        const slideNav = document.querySelector(".slideNav");
        slideNav.classList.add("slideNavHidden");

        slideNav.classList.remove("slideNav");
    }

    function Exit(){
        hideNav()
    }


    if (window.innerWidth >= 833){
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
    else{
    return (
        
        <>
            <div className="nav nav-font">
                <div className="left"><a href="#">AKSHAT</a></div>
                <div className="right">
                    <i class="fa-solid fa-ellipsis-vertical threedot" onClick={callNav}></i>
                    <div className="slideNavHidden">
                        <i class="fa-solid fa-xmark cross" onClick={hideNav}></i>
                        <ul className="unorderList">
                            <li><a href="#home" className="active" onClick={Exit}>Home</a></li>
                            <li><a href="#about" onClick={Exit}>About</a></li>
                            <li><a href="#resume" onClick={Exit}>Resume</a></li>
                            <li><a href="#skills" onClick={Exit}>Skills</a></li>
                            <li><a href="#projects" onClick={Exit}>Projects</a></li>
                            <li><a href="#contact" onClick={Exit}>Contact</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </>

    )
    }

}