import React from 'react';
import '../style/portfolio.css';

const Port = (props) => {

    const portfolio = props.project.map((project) => {
        return (
            <div className="total" key={project.id}>
                <div className="cardu">
                    <div className="boxu">
                        <div className="content">
                            <h2>0{project.id}</h2>
                            <h3>{project.name}</h3>
                            <p>{project.description}.</p>
                            <a href={project.link}>Read More</a>
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