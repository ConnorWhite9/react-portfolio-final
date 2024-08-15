import React, {useState} from 'react';
import '../styles/Projects.css';
import random from '../assets/random.webp';
import Project from '../components/Project'
import Sudoku from '../assets/sudoku.png';
import bmsImg from '../assets/bms.png';
import EventImg from '../assets/event-api.png';

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

    const [animal, setAnimal] = useState({
        name: "Events API",
        link: "https://github.com/ConnorWhite9/nodepractice",
        image: EventImg,
        descrip: "Worked with a senior engineer to make an events API to practice making a production level API with Nodejs. The API has a three layer architecture to keep the code decoupled and easily scalable. Some of the features include are a custom error handler to keep error messages consistent, custom refresh and blacklisting with JWT Authentication, data validation, and a rate limiter."
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
                <div className="center-project">
                    <Project name={animal.name} image={animal.image} link={animal.link} descrip={animal.descrip} />
                </div>
            </div>
        </>
    );
}


export default Projects;
