import React from 'react';
import Nav from 'react-bootstrap/Nav';

// Here we are importing a CSS file as a dependency
import '../styles/Components.css';;

function Navigation({ currentPage, handlePageChange }) {
    return (
        <>
                <nav>
                    <Nav >
                        <Nav.Link href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</Nav.Link>
                        <Nav.Link href="#work" onClick={() => handlePageChange('Work')} className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}>Projects</Nav.Link>
                        <Nav.Link href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</Nav.Link>
                        <Nav.Link href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</Nav.Link>                   
                    </Nav>
                </nav>

        </>
    );
}

export default Navigation;