import React from 'react';

const SingleProject = (props) => {
    const { name, image, tag, description, tools, liveSite, clientCode, serverCode } = props.project;
    return (
        <div className='item row p-2 bg-light mb-5'>
            <div className="col-md-6">
                <img className='w-100' src={image} alt="" />
            </div>
            <div className="col-md-6 project-info">
                <h3 className='fw-bold'>{name}</h3>
                <h5>{tag}</h5>
                <p>{description}</p>
                <p><strong>Tools used:</strong> {tools}</p>
                <p>
                    <a href={liveSite} target='_blank' rel='noreferrer'>Live Site</a>
                    <a href={clientCode} target='_blank' rel='noreferrer'>Client Code</a>
                    <a href={serverCode} target='_blank' rel='noreferrer'>Server Code</a>
                </p>
            </div>
        </div>
    );
};

export default SingleProject;