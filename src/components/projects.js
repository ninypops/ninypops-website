import React from 'react';

// constants
import { projectDetails } from '../constants/projects';

const Projects = () => {
    return (
        <React.Fragment>
            <a className="link-to-all" href="https://ninypops.com" rel="noopener noreferrer" target="_blank">see all projects</a> 
                <div className="projects--entity--wrapper">
                    {projectDetails.map((p, i) => (
                        // eslint-disable-next-line
                        <div key={p.title} className={"projects--entity projects--entity--" + `${i}`}>
                            <h2 className="color-black">{p.title}</h2>
                            <p className="color-grey projects-entity-type">{p.type}</p>
                        </div>
                    ))}
                </div>
        </React.Fragment>
    )
};

export default Projects;