import React, { useState, useEffect } from "react";
import Footer from '../components/Footer';
import '../styles/Home.css';

export default function Home() {
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  const fullText = "I Am Hyunsik Kim a.k.a "; // 타이핑할 전체 텍스트
  const Name = "“Kayden” ";

  const typingInterval = 250; // 타이핑 속도 (밀리초 단위)

  useEffect(() => {
    let currentIndex = 0;
    let currentNameIndex = 0;

    const typeNextLetter = () => {
      if (currentIndex < fullText.length) {
        const nextLetter = fullText.charAt(currentIndex);
        setText((prevText) => prevText + nextLetter);
        currentIndex++;
        setTimeout(typeNextLetter, typingInterval);
      } else {
        typeNameLetter(); // typeNextLetter() 완료 후 typeNameLetter() 호출
      }
    };

    const typeNameLetter = () => {
      if (currentNameIndex < Name.length) {
        const nextLetter = Name.charAt(currentNameIndex);
        setName((prevName) => prevName + nextLetter);
        currentNameIndex++;
        setTimeout(typeNameLetter, typingInterval);
      }
    };

    typeNextLetter();
    
  }, []);

  return (
    <div>
      <div>
        <p id="first">The Software Engineer & Full stack Developer!</p>
        <p id="second">
          {text}
          <span id="engname">{name}</span>
          <span className="cursor"></span>
        </p>
      </div>
      <Footer currentPage="Home" />
    </div>
  );
}
