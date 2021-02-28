import React, { Component } from 'react';
import '../style/footer.css';

class Footer extends Component{
    render(){
        return(
                <div className="footer">
                    <div className="container">
                        <h1>It's never to late to start. Let's start together</h1>

                        <div class="social-media">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-whatsapp"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                            <a href="#"><i className="fa fa-github"></i></a>
                            <a href="#"><i className="fa fa-discord"></i></a>
                        </div>
                    </div>

                    <h3>Ashish.sengar18@yahoo.com | +91 9407548510</h3>
                </div>  
        );
    }
}

export default Footer;