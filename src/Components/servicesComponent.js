import React, { Component } from 'react';
import '../style/services.css';

class Services extends Component{
    render(){
        return(
            <div className="services">
                <div className="contain">
                    <div className="cardu">
                        <div className="boxu">
                            <div className="content">
                                <h2>01</h2>
                                <h3>card One</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="cardu">
                        <div className="boxu">
                            <div className="content">
                                <h2>02</h2>
                                <h3>card Two</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;