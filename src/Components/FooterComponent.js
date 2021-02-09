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
                        </div>
                    </div>
                </div>  
        );
    }
}

export default Footer;