import React from 'react';
import { projects } from '../data/data';
import SectionTitle from './SectionTitle';
import ProjectsCard from './ProjectsCard';


const Projects = () => {
    return (
        <section className="py-20 align-element" id="projects">
            <SectionTitle text="web creations"/>
            <div className="py-16 grid lg:grid-cols-2 gap-8">
                {projects.map(project => {
                    return <ProjectsCard key={project.id} {...project}/>
                })}
            </div>
        </section>
    );
};

export default Projects;