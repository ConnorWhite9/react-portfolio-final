import React from 'react';
import './Projects.css';
import random from '../assets/random.webp';


const Projects = () => {
    return (
        <>
            <div class="container">
                <div class="left-column">
                    <h1 className="project-name">TheRandomSudokuGenerator</h1>
                    <img className="project-img" src={random} />
                    <p className="project-description">This project was built in Flask and incorporated creating a backpropagation algorithm in Python to generate the sudokus and using Javascript to create an easy to use user interface.</p>
                    <p className="instru">Click on image to view the Github Repository.</p>
                </div>
                <div class="right-column">
                    <h1 className="project-name">Budgeting Made Simple</h1>
                    <img className="project-img" src={random} />
                    <p className="project-description">This project was built with Flask Blueprints. I personally worked on the backend using fetch API calls to send message to the server where I then used SQLAlchemy to manipulate information within our SQLITE database.</p>
                    <p className="instru">Click on image to view the Github Repository.</p>
                </div>
            </div>
        </>
    );
}


export default Projects;
