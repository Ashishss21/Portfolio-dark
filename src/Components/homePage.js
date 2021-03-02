import React, { Component } from 'react';
import Typical from 'react-typical';
import '../style/first.css';
import {motion} from 'framer-motion';

class Home extends Component{
    render(){
        console.log(this.props);
        return(
            <motion.div
                initial={{ opacity:0 }} animate= {{ opacity:1 }} exit={{ opacity:0 }} >
                <section id="hero" className="d-flex flex-column justify-content-center">
                    <div className="container" data-aos="zoom-in" data-aos-delay="100">
                        <h1>Ashish Sengar</h1>
                        
                        <p>I'm a {' '} 
                            <Typical
                                loop = {Infinity}
                                wrapper = "b"
                                steps = {[
                                    'Web Developer',2000,
                                    'Freelancer',2000,
                                    'MERN Stack Developer',2000
                                ]}
                            />
                        </p>
                        <div className="social-links">
                            <a href="www.twitter.com" className="twitter"><i className="fa fa-twitter"></i></a>
                            <a href="https://www.github.com/AshishKumarSinghSengar"  target="_blank" className="github"><i className="fa fa-github"></i></a>
                            <a href="https://www.instagram.com/_ashish.h" className="instagram" target="_blank"><i className="fa fa-instagram"></i></a>
                            <a href="www.google-plus.com" className="google-plus"><i className="fa fa-skype"></i></a>
                            <a href="https://www.linkedin.com/in/ashish-sengar-1b0b46198" className="linkedin"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </section>
                
            </motion.div>
        );
    }
}

export default Home;