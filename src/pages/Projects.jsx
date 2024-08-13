import React, {useState} from 'react';
import '../styles/Projects.css';
import random from '../assets/random.webp';
import Project from '../components/Project'

const Projects = () => {
    const [sudoku, setSudoku] = useState({
        name: "TheRandomSudokuGenerator",
        image: random,
        descrip: "This project was built in Flask and incorporated creating a backpropagation algorithm in Python to generate the sudokus and using Javascript to create an easy to use user interface.",
    })


    const [bms, setBms] = useState({
        name: "Budgeting Made Simple",
        image: random,
        descrip: "This project was built with Flask Blueprints. I personally worked on the backend using fetch API calls to send message to the server where I then used SQLAlchemy to manipulate information within our SQLITE database."

    })
    return (
        <>
            <div class="container">
                <div class="left-column">
                    {/* <h1 className="project-name">TheRandomSudokuGenerator</h1>
                    <img className="project-img" src={random} />
                    <p className="project-description">This project was built in Flask and incorporated creating a backpropagation algorithm in Python to generate the sudokus and using Javascript to create an easy to use user interface.</p>
                    <p className="instru">Click on image to view the Github Repository.</p> */}

                    <Project name={sudoku.name} image={sudoku.image}  descrip={sudoku.descrip} />
                </div>
                <div class="right-column">
                    {/* <h1 className="project-name">Budgeting Made Simple</h1>
                    <img className="project-img" src={random} />
                    <p className="project-description"></p>
                    <p className="instru">Click on image to view the Github Repository.</p> */}

                    <Project name={bms.name} image={bms.image} descrip={bms.descrip} />
                </div>
            </div>
        </>
    );
}


export default Projects;
