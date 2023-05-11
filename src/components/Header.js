import React from 'react';
import Navbar from './Navigation';
import logo from '../components/assets/logo4.jpg';
// Here we are importing a CSS file as a dependency
import '../styles/Components.css';

function Header({ currentPage, handlePageChange }) {
    return (
        <>
        <a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}><h1><img src={logo}></img>Hyunsik <span id="engname">Kayden</span> Kim</h1></a>          
        
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
        </>
    );
}

export default Header;