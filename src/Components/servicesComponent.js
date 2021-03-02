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
                    </div>
                    <div className="service">
                        <i className="fab fa-java"></i>
                        <h2>Spring Boot</h2><br/>
                        <p>JAVA</p>
                    </div>
                    <div className="service">
                        <i className="fab fa-python"></i>
                        <h2>Pandas</h2><br/>
                        <p>PYTHON</p>
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