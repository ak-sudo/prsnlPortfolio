import './projects.css';
import img1 from '../../assets/project1.png';
import img2 from '../../assets/project2.jpg';
import img3 from '../../assets/project3.png';
import img4 from '../../assets/project4.jpg';
import img5 from '../../assets/project5.png';
import img6 from '../../assets/project6.png';

export default function Projects() {
    return (
        <>
        <div className="projects body-font" id='projects'>
            <h1 className="backText">Projects</h1>
            <h1 className="frontText">Projects</h1>

            <div className="cards">
                <div className="card">
                    <img src={img1} alt="project pic"/>
                    <p className="project-type">Travel Website</p>
                    <p className="project-title"><a href='https://wonderlust-wtkf.onrender.com/'>AirBnb Clone</a></p>
                </div>

                <div className="card">
                    <img src={img2} alt="project pic"/>
                    <p className="project-type">Music Player Clone (Not Functional)</p>
                    <p className="project-title"><a href='https://ak-sudo.github.io/spotifyClone/'>Spotify Clone</a></p>
                </div>

                <div className="card">
                    <img src={img3} alt="project pic"/>
                    <p className="project-type">PG Website</p>
                    <p className="project-title"><a href='https://ak-sudo.github.io/pandeyPg/'></a>Pandey Pg</p>
                </div>

                <div className="card">
                    <img src={img4} alt="project pic"/>
                    <p className="project-type">Institutional Website</p>
                    <p className="project-title"><a href='https://ak-sudo.github.io/kjs/'>School Website</a></p>
                </div>
                
                <div className="card">
                    <img src={img5} alt="project pic"/>
                    <p className="project-type">Non-Commercial Website</p>
                    <p className="project-title"><a href='https://ak-sudo.github.io/petAdoption'>Pet Adoption</a></p>
                </div>

                <div className="card">
                    <img src={img6} alt="project pic"/>
                    <p className="project-type">Website Using Bootstrap Framework</p>
                    <p className="project-title"><a href='https://ak-sudo.github.io/BS/homereturn.html'>iCoder</a></p>
                </div>  
            </div>
        </div>
        </>
    )
}