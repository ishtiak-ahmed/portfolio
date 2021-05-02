import React from 'react';
import Contact from '../Contact/Contact';

const About = () => {
    return (
        <div className='container bg-light shadow'>
            <h2 className='text-center heading fw-bold'>About me</h2>
            <div className="container p-5">
                <p>I am Ishtiak Ahmed, form Joypurhat, Bangladesh. I am a passionate Web Developer. Normally I use <strong>React, Bootstrap, Font Awesome</strong> to build the client side. For Back end I am currently using <strong>Node JS, Express JS, MongoDB</strong>.<br /> </p>
                <p>I am open to learn New Technology.</p>
                <p>
                    I am learning and developing some exciting projects since 2019. My <a href="https://github.com/ishtiak-ahmed" target='_blank' rel='noreferrer'>Github</a> and <a href="https://www.linkedin.com/in/ishtiak-ahmed-1606/" target='_blank' rel='noreferrer'>Linkedin</a> profile. You can reach me directly via email. <span color='#4e47dd'>iahmed1606@gmail.com</span>
                    <br />
            Except coding, I also love to read books, solve puzzle, play chess.
            </p>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default About;