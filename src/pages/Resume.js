import React from "react";
import CV from "../components/assets/resume/Kayden Hyunsik Kim_Resume.pdf";
import CL from "../components/assets/resume/KaydenKim__Coverletter.pdf";
import download from "../components/assets/download.jpg";
import Footer from "../components/Footer";

import "../styles/Resume.css";

export default function Resume() {
  return (
    <div>
      <div id="resume" className="resume-div">
        <div className="skill-div">
          {/* --------Frontend Skills------------ */}
          <div className="fskill">
            <h2>Frontend Skills</h2>
            <div className="tag">
              <span>JavaScript</span>
              <span>React</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>JQuery</span>
              <span>Bulma</span>
              <span>JSON</span>
              <span>AJAX</span>
              <span>APIs</span>
              <span>The DOM</span>
            </div>
          </div>

          {/* --------Backtend Skills------------ */}
          <div className="skill">
            <h2>Backtend Skills</h2>
            <div className="tag">
              <span>PHP</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>GraphQL</span>
              <span>MySQL</span>
              <span>NoSQL</span>
              <span>MongoDB</span>
              <span>Mongoose</span>
              <span>Testing</span>
            </div>
          </div>
          <div className="skill">
            <h2>DevOps Skills</h2>
            <div className="tag">
              <span>AWS</span>
              <span>Google cloud</span>
              <span>Vultr</span>
              <span>VPS</span>
              <span>Linux Web hosting</span>
              <span>Wordpress hosting</span>
              <span>C-panel</span>
            </div>
          </div>
        </div>
        {/* download CV */}
        <a
          href={CV}
          target="_blank"
          rel="noopener noreferrer"
          className="download"
        >
          Download Resume
          <img
            id="download"
            alt="download"
            style={{ display: "inline" }}
            src={download}
            className="download-icon"
          />
        </a>
        {/* download Coverletter */}
        <a
          href={CL}
          target="_blank"
          rel="noopener noreferrer"
          className="download"
        >
          Download Cover Letter
          <img
            id="download"
            alt="download"
            style={{ display: "inline" }}
            src={download}
            className="download-icon"
          />
        </a>
      </div>
      <Footer />
    </div>
  );
}
