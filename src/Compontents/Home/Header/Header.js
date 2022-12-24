import React from 'react';
import { Link } from 'react-router-dom';

import apps from '../../../images/apps.svg'
import banner from '../../../images/banner.jpg'
import './Header.css'

const Header = () => {
    return (
        <header className=' py-3'>
            <div className="container">
                <div className="row header">
                    <div className="text-white intro col-md-5 mt-5 py-5">
                        <h4>Hello, I am</h4>
                        <h1 className='text-uppercase fw-bold highlights'>Ishtiak Ahmed</h1>
                        <h5 style={{ marginBottom: '50px' }}>Web Application Developer</h5>
                        <div className="buttons">

                            <a className='button button-primary' href='https://drive.google.com/uc?export=download&id=1-k0oTG7HTX_bw7YlytvDR0g9Y4Cqiaz-&fbclid=IwAR39B3MTxTajAV0SklTaM5DgXS0lP5q24_LTSS4QKSh9S1nqzbeqdxV_TNI'>Download Resume</a>
                            <Link className='button button-secondary' to='projects'>Explore Projects</Link>
                        </div>
                    </div>
                    <div className="col-md-7 banner">
                        <img className='w-100' src={banner} alt="" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;