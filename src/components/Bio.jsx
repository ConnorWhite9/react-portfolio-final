import React from 'react';
import '../styles/Bio.css';
import { Link } from 'react-router-dom';


const Bio = () => {
    return (
    <> 
        <div className="textContainer">
            <p className="greeting">Welcome</p>
            <p className="name">I'm Connor White</p>
            <p className="info">I am an aspiring software engineer with skills in both back and front end development. Take a look around and learn more about me!
            </p>
        </div>
    </>);
}

export default Bio;