import React, { Component } from 'react';
import Typical from 'react-typical';
import '../style/first1.css';
import '../style/navbar.css';

class First extends Component{
    render(){
        return(
            <div>
                    <button type="button" className="mobile-nav-toggle d-xl-none"><i className="fa fa-bars"></i></button>

                <header id="header" className="d-flex flex-column justify-content-center">
                    <nav className="nav-menu">
                        <ul>
                            <li className="active"><a href="#hero"><i className="fa fa-home"></i> <span>Home</span></a></li>
                            <li><a href=""><i className="fa fa-user-o"></i> <span>About</span></a></li>
                            <li><a href=""><i className="fa fa-file-o"></i> <span>Resume</span></a></li>
                            <li><a href=""><i className="fa fa-bookmark-o"></i> <span>Portfolio</span></a></li>
                            <li><a href=""><i className="fa fa-server"></i> <span>Services</span></a></li>
                            <li><a href=""><i className="fa fa-envelope"></i> <span>Contact</span></a></li>
                        </ul>
                    </nav>
                </header>

                <section id="hero" class="d-flex flex-column justify-content-center">
                    <div class="container" data-aos="zoom-in" data-aos-delay="100">
                        <h1>Ashish Sengar</h1>
                        {/* <p>I'm <span className="typed" data-typed-items="MERN Stack Developer, Freelancer"></span></p> */}
                        
                        <p>I'm a {' '} 
                            <Typical
                                loop = {Infinity}
                                wrapper = "b"
                                steps = {[
                                    'Developer',2000,
                                    'Freelancer',2000,
                                    'MERN Stack Developer',2000
                                ]}
                            />
                        </p>
                        <div class="social-links">
                            <a href="" className="twitter"><i className="fa fa-twitter"></i></a>
                            <a href="" className="facebook"><i className="fa fa-facebook"></i></a>
                            <a href="" className="instagram"><i className="fa fa-instagram"></i></a>
                            <a href="" className="google-plus"><i className="fa fa-skype"></i></a>
                            <a href="" className="linkedin"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </section>
                
            </div>
        );
    }
}

export default First;