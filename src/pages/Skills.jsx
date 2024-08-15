import React from 'react';
import '../styles/Skills.css';
import Python from '../assets/python-brands-solid.svg';
import C from '../assets/C.png';
import Skill from '../components/Skill'

const Skills = () => {
    return (
        <>
            <div className="col-container">
                <div className="column">
                    <h1 className="sk-title">Languages</h1>
                    <div className="row">
                        <Skill name="Python" image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />

                        <Skill name="Javascript" image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/>
                        
                        <Skill name="HTML" image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                    </div>
                    <div className="row">
                        <Skill name="CSS" image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"/>
                        
                        <Skill name="C" image={C} />
                    </div>
                </div>
                <div className="column">
                    <h1 className="sk-title">Frameworks/Other</h1>
                    <div className="row">
                        <Skill name="Flask" image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"/>
                        
                        <Skill name="Django" image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" />
                        
                        <Skill name="React" image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"/>
                    </div>
                    <div className="row">
                        <Skill name="Node.js" image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />

                        <Skill name="FastAPI" image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" />
                        
                        <Skill name="Express.js" image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"/>
                    </div>
                    <div className="row">
                        <Skill name="Git" image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                        <Skill name="Github" image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"/>
                    </div>
                    
                </div>
                <div className="column">
                    <h1 className="sk-title">Libraries</h1>
                    <div className="row">
                        <Skill name="numpy" image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"/>

                        <Skill name="PyTorch" image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" />

                        <Skill name="SQLAlchemy" image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg" />
                    </div>
                    <div className="row">
                        <Skill name="TensorFlow" image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" />
                        <Skill name="Pandas" image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" />
                    </div> 
                </div>
            </div>
        
        
        
        </>
    );
}

export default Skills;
