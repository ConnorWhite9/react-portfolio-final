import React from 'react';
import '../styles/Project.css';
import random from '../assets/random.webp';

const Project = (props) => {
    return (
        <>
            <div>
               
                <h1 className="project-name">{props.name}</h1>
                <a href={props.link}>
                    <img className="project-img" src={props.image} />  
                </a>

                <p className="project-description">{props.descrip}</p>
                <p className="instru">Click on image to view the Github Repository.</p>
                
            </div>
        </>
    );
}

export default Project;