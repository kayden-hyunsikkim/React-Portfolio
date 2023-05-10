import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../components/assets/logo4.jpg';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';

function Header({ currentPage, handlePageChange }) {
    return (
        <>
        <h1 href="#home"> <img src={logo}></img>Hyunsik <span id="engname">Kayden</span> Kim</h1>
            <Navbar bg="dark" variant="dark">
                <nav>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</Nav.Link>
                        <Nav.Link href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</Nav.Link>
                        <Nav.Link href="#work" onClick={() => handlePageChange('Work')} className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}>Work</Nav.Link>
                        <Nav.Link href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</Nav.Link>
                        <Nav.Link href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</Nav.Link>                   
                    </Nav>
                </nav>
            </Navbar>

        </>
    );
}

export default Header;