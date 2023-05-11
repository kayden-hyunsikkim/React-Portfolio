import React from 'react';
import phone from '../components/assets/phone.jpg';
import email from '../components/assets/email.jpg';
import github from '../components/assets/githublogo2.jpg';
import linkedin from '../components/assets/insta.jpg';


// Here we are importing a CSS file as a dependency
import '../styles/Components.css';

function handleClick() {
    window.open('mailto:rlagustlr122@naver.com');
  }

function Footer({ currentPage }) {
    const footerStyle = currentPage === 'Home' ? { marginTop: '350px' } : {};
    return (
        <>
            <footer className="footer" style={footerStyle}>
                <a><img src={phone}/><p onClick="alert('0433949969')">0433949969</p></a>
                <a><img src={email}/><p onClick={handleClick}>rlagustlr122@naver.com</p></a>
                <a href="https://github.com/kayden-hyunsikkim?tab=repositories" target="_blank"><img src={github} /><p>Github</p></a>
                <a href="https://www.linkedin.com/in/hyunsik-kim-b88173246/" target="_blank"><img src={linkedin} /><p>Linkedin</p></a>
            </footer>
        </>
    );
}

export default Footer;