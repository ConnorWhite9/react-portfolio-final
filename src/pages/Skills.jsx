import React from 'react';
import './Skills.css';
import Python from '../assets/python-brands-solid.svg';
import C from '../assets/C.png';

const Skills = () => {
    return (
        <>
            <div className="col-container">
                <div className="column">
                    <h1 className="sk-title">Languages</h1>
                    <div className="row">
                        <div className="img-container">
                            <div className="textAligner">
                                <iframe className="skill-icon" src={Python} ></iframe>
                                <div class="caption">Python</div>
                            </div>
                            
                        </div>
                        <div className="img-container">
                            <div className="textAligner">
                                <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                                <div class="caption">Javascript</div>
                            </div>
                            
                        </div>
                        <div className="img-container">
                            <div className="textAligner">
                                <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                                <div className="caption">HTML</div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="img-container">
                            <div className="textAligner">
                                <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                                <div className="caption">CSS</div>
                            </div>
                        </div>
                        <div className="img-container">
                            <div className="textAligner">
                                <img className="skill-icon" src={C} />
                                <div className="caption">C</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <h1 className="sk-title">Frameworks/Other</h1>
                    <div className="row">
                        <div className="img-container">
                            <div className="textAligner">
                                <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" />
                                <div className="caption">Flask</div>
                            </div>
                        </div>
                        <div className="img-container">
                            <div className="textAligner">
                                <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" />
                                <div className="caption">Django</div>
                            </div>
                        </div>
                        <div className="img-container">
                            <div className="textAligner">
                                <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                                <div className="caption">React</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="img-container">
                            <div className="textAligner">
                                <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                                <div className="caption">Node.js</div>
                            </div>
                        </div>

                        <div className="img-container">
                            <div className="textAligner">
                                <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" />
                                <div className="caption">FastAPI</div>
                            </div>
                        </div>
                        <div className="img-container">
                            <div className="textAligner">
                                <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
                                <div className="caption">Express.js</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="column">
                    <h1 className="sk-title">Libraries</h1>
                    <div className="row">
                        <div className="textAligner">
                            <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" />
                            <div className="caption">Numpy</div>
                        </div>
                        <div className="textAligner">
                            <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" />
                            <div className="caption">PyTorch</div>
                        </div>
                        <div className="textAligner">
                            <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg"  />
                            <div className="caption">SQLAlchemy</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="textAligner">
                            <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" />
                            <div className="caption">TensorFlow</div>
                        </div>
                        <div className="textAligner">
                            <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" />
                            <div className="caption">Pandas</div>
                        </div>
                    </div>
                </div>
            </div>
        
        
        
        </>
    );
}

export default Skills;