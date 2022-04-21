import React from 'react';
import {link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav className="navbar nav-first navbar-dark bg-dark">
    <div className="container">
        <a className="navbar-brand" href="#">
            <img src="../src/assest/imgs/navbar-brand.svg" />
        </a>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link text-primary" href="#home">CALL US : <span className="pl-2 text-muted">(123) 456 7890</span></a>
            </li>                   
        </ul>
    </div>
</nav>
<nav className="nav-second navbar custom-navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
    <div className="container">
        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"> 
                <li className="nav-item">
                    <a className="nav-link" href="#about">About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#service">Our Service</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#team">Our Team</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#testmonial">Testmonials</a>
                </li>
            </ul> 
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a href="/login" className="btn btn-primary btn-sm mr-2">login</a>
                    <a href="/register" className="btn btn-primary btn-sm">Register</a>
                    
                </li>
            </ul>
        </div>
    </div>
</nav>
    </div>
  );
}

export default Navbar;
