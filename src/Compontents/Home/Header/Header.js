import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../../../Data/resume.pdf'

import apps from '../../../images/apps.svg'
import './Header.css'

const Header = () => {
    return (
        <header className='container p-2'>
            <div className="row">
                <div className="col-md-5 mt-5">
                    <h4>Hello, I am</h4>
                    <h1 className='text-uppercase fw-bold'>Ishtiak Ahmed</h1>
                    <h4 style={{ marginBottom: '50px' }}>MERN Stack Web Developer</h4>

                    <a className='button button-primary' href='https://drive.google.com/uc?export=download&id=1-k0oTG7HTX_bw7YlytvDR0g9Y4Cqiaz-&fbclid=IwAR39B3MTxTajAV0SklTaM5DgXS0lP5q24_LTSS4QKSh9S1nqzbeqdxV_TNI'>Download Resume</a>
                    <Link className='button button-secondary' to='projects'>Explore Projects</Link>
                </div>
                <div className="col-md-7">
                    <img className='w-100' src={apps} alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;