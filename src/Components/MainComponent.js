import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Home from './homePage';
import Services from './servicesComponent';
import Sidebar from './sideBar';
import About from './aboutPage';
import Port from './portfolioPage';
import { PROJECTS } from '../Shared/projects';
import { motion, AnimatePresence } from 'framer-motion';

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            projects: PROJECTS
        }
    }

    render() {

        const pageVariants = {
            initial:{
                opacity:0,
                y:"-100vh",
                duration:4
            },
            in:{
                opacity:1,
                y:0,
                scale:1
            },
            out:{
                opacity:0,
                y:"100vh",
                scale:0,
                duration:4
            }
        }

        const pageTransition = {
            /*transition: "linear",
            type:`spring`,
            stiffness:150*/
            type:"tween",
            ease:"anticipate",
            duration:1
        }

        const HomeComponent = () =>{
            return(
                <motion.div
                    initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                        <Home/>
                </motion.div>
            );
        }

        const AboutComponent = () =>{
            return(
                <motion.div
                    initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                        <About/>
                </motion.div>
            );
        }

        const ServiceComponent = () =>{
            return(
                <motion.div
                    initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                        <Services/>
                </motion.div>
            );
        }

        const PortComponent = () =>{
            return(
                <motion.div
                    initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                        <Port project={this.state.projects} />
                </motion.div>
            );
        }

        return (
            <Router>
                <AnimatePresence exitBeforeEnter>
                    <Sidebar />
                    <Switch>
                        <Route exact path="/" component={HomeComponent} />
                            <Route exact path="/about" component={AboutComponent} />
                            <Route exact path="/services" component={ServiceComponent} />
                            <Route exact path="/portfolio" component={() => <PortComponent /> }/>
                    </Switch>
                </AnimatePresence>
            </Router>
        );
    }
}

export default Main;