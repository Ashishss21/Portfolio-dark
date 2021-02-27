import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import First from './firstPage';
import Footer from './FooterComponent';
import Services from './servicesComponent';

class Main extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" exact component={First} />
                    <Route path="/services" component={Services} />
                    <Route path="/footer" component={Footer} />
                </Switch>
            </Router>
        );
    }
}

export default Main;