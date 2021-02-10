import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import First from './firstPage';
import Footer from './FooterComponent';
import Services from './servicesComponent';

class Main extends Component{
    render(){
        return(
            <div>
                <First/>
                <Services/>
                <Footer/>
            </div>
        );
    }
}

export default Main;