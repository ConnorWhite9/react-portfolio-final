import React, {useState} from 'react';
import '../styles/Projects.css';
import random from '../assets/random.webp';
import Project from '../components/Project'
import Sudoku from '../assets/sudoku.png';
import bmsImg from '../assets/bms.png';

const Projects = () => {
    const [sudoku, setSudoku] = useState({
        name: "TheRandomSudokuGenerator",
        link: "https://github.com/ConnorWhite9/Soduku",
        image: Sudoku,
        descrip: "This project was built in Flask and incorporated creating a backpropagation algorithm in Python to generate the sudokus and using Javascript to create an easy to use user interface.",
    })


    const [bms, setBms] = useState({
        name: "Budgeting Made Simple",
        link: "https://github.com/danvluewubley/hackathon-budget-app",
        image: bmsImg,
        descrip: "This project was built with Flask Blueprints. I personally worked on the backend using fetch API calls to send message to the server where I then used SQLAlchemy to manipulate information within our SQLITE database."

    })
    return (
        <>
            <div className="container">
                <div className="left-column">
                    
                    <Project name={sudoku.name} image={sudoku.image} link={sudoku.link}  descrip={sudoku.descrip} />
                </div>
                <div className="right-column">
                    
                    <Project name={bms.name} image={bms.image} link={bms.link} descrip={bms.descrip} />
                </div>
            </div>
        </>
    );
}


export default Projects;
