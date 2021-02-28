import React, { Component } from 'react';
import '../style/navbar.css';
import PDF from '../Assests/RESUME.pdf'

class Sidebar extends Component {
    render() {
        return (
            <div>
                <button type="button" className="mobile-nav-toggle d-xl-none"><i className="fa fa-bars"></i></button>

                <header id="header" className="d-flex flex-column justify-content-center">
                    <nav className="nav-menu">
                        <ul>
                            <li className="active"><a href="#hero"><i className="fa fa-home"></i> <span>Home</span></a></li>
                            <li><a href="/about"><i className="fa fa-user-o"></i> <span>About</span></a></li>
                            <li><a href="/" ><i className="fa fa-file-o"></i> <span>Resume</span></a></li>
                            <li><a href="/portfolio"><i className="fa fa-bookmark-o"></i> <span>Portfolio</span></a></li>
                            <li><a href="/services"><i className="fa fa-server"></i> <span>Services</span></a></li>
                            {/* <li><a href="/footer"><i className="fa fa-envelope"></i> <span>Contact</span></a></li> */}
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Sidebar;