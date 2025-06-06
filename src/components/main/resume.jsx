import "./resume.css";

export default function Resume() {
  return (
    <>
      <div className="resume body-font" id="resume">
        <h1 className="backText">Resume</h1>
        <h1 className="frontText">Resume</h1>

        <p className="description">
          Freelance web developer with hands-on experience in building
          responsive, fast, and user-friendly websites. Skilled in HTML, CSS,
          JavaScript, React, and modern frameworks, with a focus on clean design
          and efficient code. Dedicated to delivering high-quality digital
          solutions that meet both client goals and user needs.
        </p>

        <div className="cards">
          <div className="card">
            <h3 className="years">2024-2028</h3>
            <h3 className="education">Bachelor's</h3>
            <p className="institute">
              dr apj abdul kalam institute of technology, tanakpur
            </p>
            <p className="abtInstitute">
              Bachelor of Technology – Artificial Intelligence & Machine
              Learning<br></br>
              Pursuing technical education with a focus on AI, ML, and software
              development. Actively involved in projects, hackathons, and
              team-based learning.
            </p>
          </div>

          <div className="card">
            <h3 className="years">2022-2024</h3>
            <h3 className="education">Intermediate</h3>
            <p className="institute">krist jayanti school bariya</p>
            <p className="abtInstitute">
              Completed Higher Secondary Education with a focus on Science
              (PCM). Developed strong analytical and problem-solving skills
              during this period.
            </p>
          </div>

          <div className="card">
            <h3 className="years">2022</h3>
            <h3 className="education">Secondary</h3>
            <p className="institute">krist jayanti school, bariya</p>
            <p className="abtInstitute">
              Completed foundational education with distinction. Gained early exposure to computers, logical thinking, and active participation in co-curricular activities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
