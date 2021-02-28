import React, { Component } from 'react';
import Typical from 'react-typical';
import '../style/first.css';

class Home extends Component{
    render(){
        return(
            <div>
                <section id="hero" class="d-flex flex-column justify-content-center">
                    <div class="container" data-aos="zoom-in" data-aos-delay="100">
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
                        <div class="social-links">
                            <a href="www.twitter.com" className="twitter"><i className="fa fa-twitter"></i></a>
                            <a href="www.facebook.com" className="facebook"><i className="fa fa-facebook"></i></a>
                            <a href="www.instagram.com" className="instagram"><i className="fa fa-instagram"></i></a>
                            <a href="www.google-plus.com" className="google-plus"><i className="fa fa-skype"></i></a>
                            <a href="www.linkedin.com" className="linkedin"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </section>
                
            </div>
        );
    }
}

export default Home;