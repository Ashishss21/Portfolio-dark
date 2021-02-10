import React, { Component } from 'react';
import '../style/services.css';

class Services extends Component{
    render(){
        return(
            <div class="contain">
                <div class="card">
                    <div class="box">
                        <div class="content">
                            <h2>01</h2>
                            <h3>Card One</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <div class="content">
                            <h2>02</h2>
                            <h3>Card Two</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;