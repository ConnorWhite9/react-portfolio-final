import React from 'react';
import '../styles/Wireframe.css';
import skills from "../assets/skills-wireframe.png";
import home from "../assets/home-wireframe.png";
import brand from "../assets/brand-kit.png";

const Wireframe = () => {
    return (
        <>
            <div className="wireframe-container">
                <div className="row2">
                    <img src={skills} className="wireframe-img" />
                    <img src={home} className="wireframe-img" />
                </div>
                <div className="row2">
                    <img className="wireframe-img" src={brand} />
                </div>
            </div>
            
        </>
    );
}

export default Wireframe;