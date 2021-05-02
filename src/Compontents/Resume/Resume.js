import React from 'react';

const Resume = () => {
    return (
        <div className='container shadow'>
            <div>
                <h2>My Resume</h2>
                <a className='button button-primary' href='https://drive.google.com/uc?export=download&id=1-k0oTG7HTX_bw7YlytvDR0g9Y4Cqiaz-&fbclid=IwAR39B3MTxTajAV0SklTaM5DgXS0lP5q24_LTSS4QKSh9S1nqzbeqdxV_TNI'>Download Resume</a> <br />
                <a className='button button-secondary' href="https://github.com/ishtiak-ahmed" target='_blank' rel='noreferrer'>Github Profile</a> <br /> <a className='button button-secondary' href="https://www.linkedin.com/in/ishtiak-ahmed-1606/" target='_blank' rel='noreferrer'>Linkedin Profile</a>
            </div>
            <div className="resume">
                <div className="header">
                    <h3 className='text-uppercase fw-bold'>Ishtiak Ahemd</h3>
                    <h6>MERN Stack Web Developer</h6>
                    <p><a href="https://www.linkedin.com/in/ishtiak-ahmed-1606/" target='_blank' rel='noreferrer'>Linkedin.com/in/ishtiak-ahmed-1606</a></p>
                </div>
                <div className="skills">
                    <h3 className="text-uppercase fw-bold">Development Skills</h3>
                    <li><strong>Expertise :</strong> <span className="skillsItem"> HTML, React, JavaScript, ES6, CSS</span></li>
                    <li><strong>Comfortable :</strong> <span className="skillsItem">Express, Node, MongoDB, Bootstrap, Font Awesome</span> </li>
                    <li><strong>Familiar :</strong> <span className="skillsItem">REDUX, SASS(SCSS), REACT NATIVE, MATERIAL UI, TYPElCRIPT, PYTHON, NEXT JS</span> </li>
                    <li><strong>Tools :</strong> <span className="skillsItem">VS Code, Git, Figma, Chrome Dev Tool, Heroku, Firebase</span></li>
                </div>
            </div>

        </div>
    );
};

export default Resume;