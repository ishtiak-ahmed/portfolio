import React from 'react';
import './Resume.css'

const Resume = () => {
    return (
        <section className='py-5 bg-dark text-white'>
            <div className='container'>
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
                        <h5 className="text-uppercase">Development Skills</h5>
                        <ul>
                            <li><strong>Expertise :</strong> <span className="skillsItem"> HTML, React, JavaScript, ES6, CSS</span></li>
                            <li><strong>Comfortable :</strong> <span className="skillsItem">Express, Node, MongoDB, Bootstrap, Font Awesome</span> </li>
                            <li><strong>Familiar :</strong> <span className="skillsItem">REDUX, SASS(SCSS), REACT NATIVE, MATERIAL UI, TYPElCRIPT, PYTHON, NEXT JS</span> </li>
                            <li><strong>Tools :</strong> <span className="skillsItem">VS Code, Git, Figma, Chrome Dev Tool, Heroku, Firebase</span></li>
                        </ul>
                    </div>
                    <div className='projects'>
                        <h5 className='text-uppercase'>Recent Projects</h5>
                        <ol className='project-list'>
                            <li>
                                <p><strong>
                                    Rana Agency (Full Stack Site)

                                </strong>
                                    <a href="https://rana-agency.web.app/">Live Site</a>
                                    <a href="https://github.com/ishtiak-ahmed/rana-agency-client">Client Code</a>
                                    <a href="https://github.com/ishtiak-ahmed/rana-agency-server">Server Code</a>
                                </p>
                                <ul>
                                    <li>User and Admin authentication with Firebase and Server</li>
                                    <li>Different dashboard for User And Admin</li>
                                    <li>Full CRUD operation for Admin</li>
                                    <li>Stripe Payment, User booking, review system.</li>
                                    <li><strong>Technology : </strong>React, Express, Mongodb, Firebase, Stripe, Bootstrap, Font Awesome</li>
                                </ul>
                            </li>
                            <li>
                                <p><strong>
                                    Flourish And Blotts (Full Stack Project)
                                </strong>

                                    <a href="https://flourish-and-blotts.web.app/">Live Site</a>
                                    <a href="https://github.com/ishtiak-ahmed/flourish---blotts-client">Client Code</a>
                                    <a href="https://github.com/ishtiak-ahmed/flourish-n-blotts-server">Server Code</a></p>
                                <ul>
                                    <li>Loading Product data from Backend MongoDB Server</li>
                                    <li>User booking and Checkout System</li>
                                    <li>Admin dashboard to manage products. (add, delete)</li>
                                    <li>Private Routing, responsive layout.</li>
                                    <li><strong>Technology : </strong>React, Express, Mongodb, Firebase, Bootstrap, Font Awesome</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Hogwarts Express </strong>
                                <a href="https://hogwatrs-express.web.app/">Live Site</a>
                                <a href="https://github.com/ishtiak-ahmed/hogwarts-express">Code</a>
                                <ul>
                                    <li>Firebase Authentication</li>
                                    <li>React Router, Private Routing.</li>
                                    <li>Google Map API</li>
                                    <li>Responsive Layout</li>
                                </ul>
                            </li>
                            <li>
                                <p><strong>Python Automation</strong></p>
                                <p>I did some part time data entry job. For tose purpose I built a Python Program to automate some boring repeating stuff.</p>
                            </li>
                        </ol>
                    </div>
                    <div className="education">
                        <h5 className='text-uppercase'>Education</h5>
                        <ul>
                            <li>Bacelor Of Social Science (2015-2018) From National University, CGPA 2.83</li>
                            <li>HSC in Science (2015) From Rajshahi Board, GPA 3.91</li>
                            <li>SSC in Science (2012) From Rajshahi Board, GPA 4.69</li>
                            <li>Complete Web Development Course with Jhankar Mahbub (Dec, 2020 - Apr, 2021)</li>
                        </ul>
                    </div>
                    <div className="experience">
                        <h5 className="text-uppercase">Experience</h5>
                        <ul>
                            <li>Learning and building real world web development project since 2019</li>
                        </ul>
                    </div>
                    <div className="extra">
                        <h5 className="text-uppercase">Extra Skills</h5>
                        <ul>
                            <li>Typing.com typing test speed 45wpm with 99% accuracy</li>
                            <li>Sudoku, Rubic Cube (2 to 8 standard) and Logic Puzzle Solver.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Resume;