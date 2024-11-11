import React from "react";
import Project from "../components/Project";
import Footer from "../components/Footer";
// import images
import pic1 from "../components/assets/Screenshot home.png";
import pic2 from "../components/assets/server.png";
import pic3 from "../components/assets/filghtdex.png";
import pic4 from "../components/assets/GBS.png";
import pic5 from "../components/assets/employee.jpg";
import pic6 from "../components/assets/TEXT EDITOR.jpg";
import pic7 from "../components/assets/weather.jpg";
import pic8 from "../components/assets/infinite.jpg";
import pic9 from "../components/assets/AI_upscaled.png";
import pic10 from "../components/assets/otherhomeWeb.png";
import pic11 from "../components/assets/ticket.png";
import pic12 from "../components/assets/chiro.png";
import pic13 from "../components/assets/ios.png";
import pic14 from "../components/assets/android.png";
import pic15 from "../components/assets/flutter.png";

import "../styles/Work.css";

export default function Portfolio() {
  const projects = [
    {
      title: "Realign Health CHIRO🔗",
      descriiption: "PHP,Wordpress - Web development for client",
      image: pic12,
      page: "https://realignhealthchiro.com/",
    },
    {
      title: "Adelaide Inside🔗",
      descriiption: "LAMP stack - community website for Korean in AU",
      image: pic9,
      page: "https://adelaideinside.com/",
    },
    {
      title: "Otherhome messenger (Server) 🔗",
      descriiption: "Linux based Cloud server-In-house messenger",
      image: pic2,
      page: "https://otherhome.au:9091/index.jsp",
    },
    {
      title: "Otherhome messenger (Android) 🔗",
      descriiption: "Android(Java)-In-house messenger",
      image: pic14,
      page: "https://play.google.com/store/search?q=otherhome&c=apps",
    },
    {
      title: "Otherhome messenger (ios) 🔗",
      descriiption: "ios(swift)-In-house messenger",
      image: pic13,
      page: "https://apps.apple.com/au/app/oh-sharehouse/id6557050809",
    },
    {
      title: "Otherhome company website 🔗",
      descriiption: "PHP,Wordpress - Company website",
      image: pic10,
      page: "https://otherhome.org/",
    },
    {
      title: "Otherhome ticket website 🔗",
      descriiption: "PHP,Wordpress - company ticket website",
      image: pic11,
      page: "https://support.otherhome.org/",
    },
    {
      title: "Otherhome messenger sample 🔗",
      descriiption: "Flutter,Firebase - sample application",
      image: pic15,
      page: "https://github.com/kayden-hyunsikkim/Otherhome-chatting-app",
    },
    {
      title: "The Chatty 🔗",
      descriiption: "MERN stack - Chatbot with openAI (chatGPT)",
      image: pic1,
      page: "https://github.com/kayden-hyunsikkim/Thechatty",
    },
    {
      title: "Flightdex 🔗",
      descriiption: "RestAPI - Flight, hotel and event searching application.",
      image: pic3,
      page: "https://craigrobertsdev.github.io/flightdex/",
    },
    {
      title: "Book search engine 🔗",
      descriiption: "MERN stack - Book search engine with google API.",
      image: pic4,
      page: "https://github.com/kayden-hyunsikkim/Book-Search-Engine",
    },
    {
      title: "PWA - Text Editor 🔗",
      descriiption: "Backend Text Editor application wth PWA.",
      image: pic6,
      page: "https://text-editor-19-pwa.herokuapp.com/",
    },

    {
      title: "Rest API - Weather Dashboard 🔗",
      descriiption: "A weather app that provides weather for multiple cities.",
      image: pic7,
      page: "https://kayden-hyunsikkim.github.io/JavaScript-Weather-Dashboard-serversideAPI/",
    },
    {
      title: "JS-InfiniteLoop Code Quiz 🔗",
      descriiption: "A simple InfiniteLoop coding quiz app.",
      image: pic8,
      page: "https://kayden-hyunsikkim.github.io/InfiniteLoop-Code-Quiz-JavaScript/",
    },
  ];

  const projectItem = projects.map((projects) => (
    <Project
      key={projects.title}
      title={projects.title}
      descriiption={projects.descriiption}
      image={projects.image}
      page={projects.page}
    />
  ));

  return (
    <div>
      <div id="work" className="container">
        <div className="row project">{projectItem}</div>
      </div>
      <Footer />
    </div>
  );
}
