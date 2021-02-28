import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Home from './homePage';
import Services from './servicesComponent';
import Sidebar from './sideBar';
import About from './aboutPage';
import Port from './portfolioPage';

class Main extends Component{
    render(){
        return(
            <Router>
                <Sidebar/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/services" component={Services} />
                    <Route path="/about" component={About} />
                    <Route path="/portfolio" component={Port} />
                </Switch>
            </Router>
        );
    }
}

export default Main;