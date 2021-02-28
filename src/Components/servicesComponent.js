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
                        <p>For potted plants at home, you may be unsure of how often to water them. For most plants, the golden rule is to see if the first inch or so of soil is dry. If dry, this is an indication that the plant needs water.</p>
                    </div>
                    <div className="service">
                        <i className="fa fa-coffee"></i>
                        <h2>Spring Boot</h2><br/>
                        <p>For potted plants at home, you may be unsure of how often to water them. For most plants, the golden rule is to see if the first inch or so of soil is dry. If dry, this is an indication that the plant needs water.</p>
                    </div>
                    <div className="service">
                        <i className="fab fa-python"></i>
                        <h2>Python</h2><br/>
                        <p>For potted plants at home, you may be unsure of how often to water them. For most plants, the golden rule is to see if the first inch or so of soil is dry. If dry, this is an indication that the plant needs water.</p>
                    </div>
                </div>
                <hr className="hr"/>
                <div className="container">
                    <h1 className="no-class">It's never to late to start. Let's start together</h1>
                </div>
            </div>
    );
}

export default Services;