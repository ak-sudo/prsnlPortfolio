import './projects.css';
import img1 from '../../assets/project1.png';

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
                    <img src={img1} alt="project pic"/>
                    <p className="project-type">Travel Website</p>
                    <p className="project-title">AirBnb Clone</p>
                </div>

                <div className="card">
                    <img src={img1} alt="project pic"/>
                    <p className="project-type">Travel Website</p>
                    <p className="project-title">AirBnb Clone</p>
                </div>

                <div className="card">
                    <img src={img1} alt="project pic"/>
                    <p className="project-type">Travel Website</p>
                    <p className="project-title">AirBnb Clone</p>
                </div>
                
                <div className="card">
                    <img src={img1} alt="project pic"/>
                    <p className="project-type">Travel Website</p>
                    <p className="project-title">AirBnb Clone</p>
                </div>

                <div className="card">
                    <img src={img1} alt="project pic"/>
                    <p className="project-type">Travel Website</p>
                    <p className="project-title">AirBnb Clone</p>
                </div>
            </div>
        </div>
        </>
    )
}