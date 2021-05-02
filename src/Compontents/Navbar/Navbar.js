import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.svg'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} height='50px' alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="/projects">Projects</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/blog">Blog</Link>
                        <Link className="nav-link" to='resume'>Resume</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;