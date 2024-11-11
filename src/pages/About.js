import React from "react";
import logo from "../components/assets/aboutpicture.jpg";
import Footer from "../components/Footer";
import "../styles/About.css";

const styles = {
  paragraph: {
    color: "yellow",
  },
};

export default function About() {
  return (
    <div>
      <div id="about">
        <img id="aboutimg" src={logo}></img>
        <div>
          <p>
            I'm HYUNSIK KIM (Eng: kayden) who is a Software Engineer with
            proficiency in application development, testing, and optimization.
            Demonstrates excellence in collaborating on the planning,
            programming, and implementation of core modules from the ground up.{" "}
            In my career as a software engineer, I have two years of experience
            working for Otherhome Pty Ltd in the startup field.
            <br></br>
            <br></br>
            <span style={styles.paragraph}>
              At Otherhome Pty Ltd, I a cloud computing-based server system for
              an in-house messenger application while balancing performance and
              cost efficiency. Also built the company’s email system, developed
              its main website and ticketing platform using WordPress, and
              improved customer communication. I also designed and implemented a
              CI/CD pipeline for a LAMP stack-based community website for Korean
              immigrants, which I developed and that has over 200,000 visitors.
            </span>
            <br></br>
            <br></br>
            Throughout my career, I have been recognized as a person who is a
            good team leader, very hardworking , organised and good
            communicator.
            <span style={styles.paragraph}>
              {" "}
              With solid experience in cloud infrastructure, system
              administration, and full-stack development, I’m confident I can
              contribute effectively to your team.
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
