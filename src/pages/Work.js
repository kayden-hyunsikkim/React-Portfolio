import React from "react";
import Project from "../components/Project";
// import images
import pic1 from '../components/assets/jetty.jpg';
import pic2 from '../components/assets/person.jpg';
import pic3 from '../components/assets/man.jpg';
import pic4 from '../components/assets/refactor.jpg';
import pic5 from '../components/assets/keyboard.jpg';
import pic6 from '../components/assets/coffee.jpg';
import pic7 from '../components/assets/githublogo.jpg';
import pic8 from '../components/assets/coffee.jpg';

import '../styles/Work.css';



export default function Portfolio() {
  const projects = [
    {
      title: "Flightdex 🔗",
      descriiption: "Flight, hotel and event searching application.",
      image: pic1,
      github: "https://github.com/joce1ynn/fitness-tracker-MERN",
      page: "https://craigrobertsdev.github.io/flightdex/",
    },
    {
      title: "Spicy Pencils Skills Matcher 🔗",
      descriiption:
        "Node.js - spicy-pencils-skills-matcher.",
      image: pic2,
      github: "https://github.com/joce1ynn/book-search-engine-MERN",
      page: "https://spicy-pencils-skills-matcher-1.herokuapp.com/",
    },
    {
      title: "SQL-Employee-Tracker 🔗",
      descriiption:
        " Backend Employee tracker applicationby using mySQL ",
      image: pic3,
      github: "https://github.com/kayden-hyunsikkim/SQL-Employee-Tracker",
      page: "https://drive.google.com/file/d/1BbBmZkulRwrM5OaTwZwZYpg9277hc3H6/view",
    },
    {
      title: "PWA - Text Editor 🔗",
      descriiption:
        "Backend Text Editor application wth PWA.",
      image: pic4,
      github: "https://github.com/kayden-hyunsikkim/Progressive-Web-Applications-PWA-Text-Editor",
      page: "https://text-editor-19-pwa.herokuapp.com/",
    },

    {
      title: "Weather Dashboard 🔗",
      descriiption: "A weather app that provides weather outlook for multiple cities.",
      image: pic5,
      github: "https://github.com/kayden-hyunsikkim/JavaScript-Weather-Dashboard-serversideAPI",
      page: "https://kayden-hyunsikkim.github.io/JavaScript-Weather-Dashboard-serversideAPI/",
    },
    {
      title: "InfiniteLoop Code Quiz 🔗",
      descriiption: "A simple InfiniteLoop coding quiz app.",
      image: pic6,
      github: "https://github.com/kayden-hyunsikkim/InfiniteLoop-Code-Quiz-JavaScript",
      page: "https://kayden-hyunsikkim.github.io/InfiniteLoop-Code-Quiz-JavaScript/",
    },

    {
      title: "Comming soon 🔗",
      descriiption: "It could be with you !!!",
      image: pic7,
      github: "#",
      page: "#",
    },

    {
      title: "InfiniteLoop Code Quiz 🔗",
      descriiption: "It could be with you !!!",
      image: pic8,
      github: "https://github.com/kayden-hyunsikkim/InfiniteLoop-Code-Quiz-JavaScript",
      page: "#",
    }


  ];

  const projectItem = projects.map((projects) => (
    <Project
      key={projects.title}
      title={projects.title}
      descriiption={projects.descriiption}
      image={projects.image}
      github={projects.github}
      page={projects.page}
    />
  ));

  return (
    <div  id="work"  className="container">
      <div className="row project">{projectItem}</div>
    </div>
  );
}


