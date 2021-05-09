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
                        <p>I love to develop website using MERN and want to work on new projects and learn new techniques. Available as a freelancer for Web Development, API Development and other MERN Projects.</p>
                    </div>
                    <div className="service">
                        <i className="fab fa-java"></i>
                        <h2>Spring Boot</h2><br/>
                        <p>JAVA</p>
                        <p>I'm a beginner in Spring. I used Spring Boot to build a fully functional and dynamic website. However, Javascript is my first preference but I also want to gain some experience in Spring. So I'm always open to work in it.</p>
                    </div>
                    <div className="service">
                        <i className="fab fa-python"></i>
                        <h2>Pandas</h2><br/>
                        <p>PYTHON</p>
                        <p>PANDAS/PYTHON is totally new to me. So, it's good for me if I get some opportunity that'd help me in implementing my knowledge of  PANDAS in some project.</p>
                    </div>
                </div>
                <hr className="hr"/>
                <div className="container">
                    <h1 className="no-class">It's never too late to start.&nbsp;&nbsp; Let's&nbsp;&nbsp;start together.</h1>
                    <br/>
                </div>
            </div>
    );
}

export default Services;