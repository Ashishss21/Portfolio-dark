import React from 'react';
import '../style/portfolio.css';
import {Link} from 'react-router-dom';

const Port = (props) => {

    const portfolio = props.project.map((project) => {
        return (
            <div className="total" key={project.id}>
                <div className="cardu">
                    <div className="boxu">
                        <div className="content">
                            <h2>0{project.id}</h2>
                            <h3>{project.heading}</h3>
                            <p>{project.description}.</p>
                            <Link onClick={()=>window.open(project.link)}>Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    })


    return (
        <div>
            <div id="head">
                <h1>Portfolio</h1>
                <div className="ports">
                    <div className="contain">
                        {portfolio}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Port;                            