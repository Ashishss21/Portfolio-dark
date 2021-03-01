import React, { Component } from 'react';
import '../style/about.css';
 
class About extends Component {
    render() {
        return (
            <section id="about" className="about-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-5">
                                                <div className="about-img">
                                                    <img src="assets/img/testimonial-2.jpg" className="img-fluid rounded b-shadow-a" alt=""/>
                      </div>
                                                </div>
                                                <div className="col-sm-6 col-md-7">
                                                    <div className="about-info">
                                                        <p><i className="fa fa-address-book-o">&nbsp;&nbsp;</i><span className="title-s">Name: </span> <span>Ashish Sengar</span></p>
                                                        <p><i className="fa fa-briefcase"></i>&nbsp;&nbsp;<span className="title-s">Profile: </span> <span>MERN stack developer</span></p>
                                                        <p><i className="fa fa-envelope-o"></i>&nbsp;&nbsp;<span className="title-s">Email: </span> <span>ashish.sengar18@yahoo.com</span></p>
                                                        <p><i className="fa fa-phone-square">&nbsp;&nbsp;</i><span className="title-s">Phone: </span> <span>+91 9407548510</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="col-md-6">
                                            <div className="about-me pt-4 pt-md-0">
                                                <div className="title-box-2">
                                                    <h5 className="title-left">About me</h5>
                                                </div><br/>
                                                <p className="lead">
                                                    Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id
                                                    imperdiet et, porttitor
                                                    at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla
                                                    porttitor accumsan tincidunt.</p>
                                                <p className="lead">
                                                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis
                                                    porttitor volutpat. Vestibulum
                                                    ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.</p>
                                                <p className="lead">
                                                    Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                                                    Nulla porttitor accumsan
                                                    tincidunt.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </section>

        );
    }
}

export default About;