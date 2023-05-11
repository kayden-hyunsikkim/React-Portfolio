import React from "react";
import Project from "../components/Project";
// import images
import pic1 from '../components/assets/jetty.jpg';
import pic2 from '../components/assets/person.jpg';
import pic3 from '../components/assets/man.jpg';
import pic4 from '../components/assets/refactor.jpg';
import pic5 from '../components/assets/keyboard.jpg';
import pic6 from '../components/assets/coffee.jpg';


import '../styles/Components.css';

export default function Portfolio() {
  const projects = [
    {
      title: "Fitness Tracker 🔗",
      descriiption: "A mern-stack app for tracking daily exercises.",
      image: pic1,
      github: "https://github.com/joce1ynn/fitness-tracker-MERN",
      page: "https://fittrack-mlvj.onrender.com/",
    },
    {
      title: "Book Search Engine 🔗",
      descriiption:
        "A MERN-stack app that allows users to search and save books.",
      image: pic2,
      github: "https://github.com/joce1ynn/book-search-engine-MERN",
      page: "https://book-search-mern.onrender.com/",
    },
    {
      title: "The Matrix Experience 🔗",
      descriiption:
        "A Matrix fan page that lets users save or delete their favorite hovercrafts.",
      image: pic3,
      github: "https://github.com/AmHum/The-Matrix-Experience",
      page: "https://matrix-hovercraft.herokuapp.com/",
    },
    {
      title: "Chirp Travel Planner 🔗",
      descriiption:
        "A travel app that provides users with events and tourist attractions nearby.",
      image: pic4,
      github: "https://github.com/dhalladay/travel-app-events",
      page: "https://dhalladay.github.io/travel-app-events/",
    },

    {
      title: "Weather Dashboard 🔗",
      descriiption: "A weather app that provides weather outlook for multiple cities.",
      image: pic5,
      github: "https://github.com/joce1ynn/weather-dashboard-API",
      page: "https://joce1ynn.github.io/weather-dashboard-API/",
    },
    {
      title: "Code Quiz 🔗",
      descriiption: "A simple coding quiz app.",
      image: pic6,
      github: "https://github.com/joce1ynn/code-quiz-API",
      page: "https://joce1ynn.github.io/code-quiz-API/",
    },

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


