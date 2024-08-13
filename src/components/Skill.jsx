import React from 'react';
import './Skill.css';


const Skill = (props) => {
    return (
        <div className="img-container">
            <div className="textAligner">
                <img className="skill-icon" src={props.image} />
                <p className="caption">{props.name}</p>
            </div>
        </div>
                        


    );
}

export default Skill;