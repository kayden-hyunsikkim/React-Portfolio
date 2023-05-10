import React from "react";

const styles  = {
    paragraph: { 
        color: 'white'
    }
}

export default function About() {
  return (
    <div>
      <div style ={styles.paragraph}>
        <p>
          I'm HYUNSIK KIM (Eng: kayden) who has a diploma degree (Korean) in mechatronics and is going to receive a bootcamp certificate in June 2023.
          When it comes to my career as a mechanical engineer, I have 3 years of experience working for Samsung Electronics in the semiconductor field. My duties included maintaining
          and repairing equipment to ensure 24/7 operation without errors. As an engineer in charge of LAM (Lam Research Corporation) semiconductor manufacturing equipment, I also managed and trained junior engineers, created rosters, and set up a new ER system for new DRAM (dynamic random access memory) production. Additionally, I have 4 years of experience as a chef in the hospitality field during my time in Australia.
        </p>
        <p>
          As for my personal qualities, I am a fast learner and pay great attention to detail. I have consistently been praised by supervisors, managers, and colleagues for being reliable and faithful. I possess excellent time management and forward planning skills.
          Throughout my career, I have been recognized as a good team leader, hardworking individual, loyal, capable of handling pressure, easy to get along with, good at giving instructions, conscientious, organized, always punctual, and a good communicator. I have always been dedicated to providing support and guidance to my colleagues and have excelled in new positions.
        </p>
      </div>
    </div>
  );
}