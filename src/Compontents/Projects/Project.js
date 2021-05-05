import React from 'react';
import SingleProject from './SingleProject/SingleProject';
import ranaagency from '../../images/rana-agency.png'
import flourish from '../../images/flourish-blotts.png'
import hogwarts from '../../images/hogwarts.png'

const projectsData = [
    {
        name: 'Rana Agency', image: `${ranaagency}`,
        tag: 'Private Investigation and Security Firm Website',
        description: 'This a full stack website project. Here user can hire a service, pay with stripe payment, give reviews. Admin can manage Orders, Service and assign new admin.',
        tools: 'MongoDB, Express, Node, React, Firebase Auth, React Stripe, Bootstrap, Font Awesome',
        liveSite: 'https://rana-agency.web.app/',
        clientCode: 'https://github.com/ishtiak-ahmed/rana-agency-client',
        serverCode: 'https://github.com/ishtiak-ahmed/rana-agency-server'
    },
    {
        name: 'Flourish And Blotts', image: `${flourish}`, tag: 'Online Book Shop Website', description: 'This a full stack website project. Here user can hire a service, pay with stripe payment, give reviews. Admin can manage Orders, Service and assign new admin.', tools: 'MongoDB, Express, Node, React, Firebase Auth, Bootstrap, Material UI Icons',
        liveSite: 'https://flourish-and-blotts.web.app/',
        clientCode: 'https://github.com/ishtiak-ahmed/flourish---blotts-client',
        serverCode: 'https://github.com/ishtiak-ahmed/flourish-n-blotts-server'
    },
    {
        name: 'Hogwarts Express', image: `${hogwarts}`, tag: 'Private Investigation and Security Firm Website', description: 'This a full stack website project. Here user can hire a service, pay with stripe payment, give reviews. Admin can manage Orders, Service and assign new admin.', tools: 'MongoDB, Express, Node, React, Bootstrap, Font Awesome',
        liveSite: 'https://flourish-and-blotts.web.app/',
        clientCode: 'https://github.com/ishtiak-ahmed/flourish---blotts-client',
        serverCode: 'https://github.com/ishtiak-ahmed/flourish-n-blotts-server'
    }
]

const Project = () => {
    return (
        <section className='py-5'>
            <div className="container">
                <h2 className='heading text-center m-3 fw-bold'>Recent Projects</h2>
                {
                    projectsData.map((project, index) => <SingleProject key={index} project={project}></SingleProject>)
                }
            </div>
        </section>
    );
};

export default Project;