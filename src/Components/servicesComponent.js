import React from 'react';
import '../style/services.css';

const Services = (props) => {
    return(
        <div className="services">
                <h1 className="h1">Services</h1>    
                <div className="cen">
                    <div className="service">
                        <i className="fab fa-js-square"></i>
                        <h2>MERN Stack</h2><br/>
                        <p>JAVASCRIPT</p>
                        <p>I love to develope website using MERN and want to learn new projects and learn new techniques. Available as freelancer for Web Development, API Development and other MERN Projects</p>
                    </div>
                    <div className="service">
                        <i className="fab fa-java"></i>
                        <h2>Spring Boot</h2><br/>
                        <p>JAVA</p>
                        <p>Spring beginner. Use Spring to build website(front-end/back-end). JavaScript is always my first choice but i want to learn more skills and Technologies. Always Open to work with spring/Spring Boot</p>
                    </div>
                    <div className="service">
                        <i className="fab fa-python"></i>
                        <h2>Pandas</h2><br/>
                        <p>PYTHON</p>
                        <p>Total beginner in Pandas/Python want to earn new skills and technologies. Open to work or learn in projects</p>
                    </div>
                </div>
                <hr className="hr"/>
                <div className="container">
                    <h1 className="no-class">It's never too late to start. Let's start together</h1>
                </div>
            </div>
    );
}

export default Services;