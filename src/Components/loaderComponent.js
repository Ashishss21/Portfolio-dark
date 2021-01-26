import React, { Component } from 'react';
import '../style/loader.css';

class Loader extends Component{
    render(){
        return(
            <div>
                <div className="loader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Loader;