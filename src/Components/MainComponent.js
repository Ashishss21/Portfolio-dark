import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Home from './homePage';
import Services from './servicesComponent';
import Sidebar from './sideBar';
import About from './aboutPage';
import Port from './portfolioPage';
import { PROJECTS } from '../Shared/projects';

class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            projects : PROJECTS,
        }
    }

    render(){
        return(
            <Router>
                <Sidebar/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/services" component={Services} />
                    <Route path="/about" component={About} />
                    <Route path="/portfolio" component={()=> <Port project={this.state.projects}/> }/>
                </Switch>
            </Router>
        );
    }
}

export default Main;