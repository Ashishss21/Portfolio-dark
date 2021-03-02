import React, { Component } from 'react';
import Typical from 'react-typical';
import '../style/first.css';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

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
                            <Link onClick={()=>window.open("https://twitter.com/AshishS42844566?s=08")} className="twitter"><i className="fa fa-twitter"></i></Link>
                            <Link onClick={()=>window.open("https://www.github.com/AshishKumarSinghSengar")} className="github"><i className="fa fa-github"></i></Link>
                            <Link onClick={()=>window.open("https://www.instagram.com/_ashish.h")} className="instagram"><i className="fa fa-instagram"></i></Link>
                            <Link onClick={()=>window.open("mailto:ashish.sengar18@yahoo.com")}><i className="far fa-envelope"></i></Link>
                            <Link onClick={()=>window.open("https://www.linkedin.com/in/ashish-sengar-1b0b46198")} className="linkedin"><i className="fa fa-linkedin"></i></Link>
                        </div>
                    </div>
                </section>
                
            </motion.div>
        );
    }
}

export default Home;