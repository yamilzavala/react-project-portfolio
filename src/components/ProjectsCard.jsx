import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectsCard = ({ url, img, github, title, text }) => {
    return (
        <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
            <img className='w-full object-cover rounded-t-lg h-64' src={img} alt={title} />
            <div className='capitalize p-8'>
                <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
                <p className='mt-4 text-slate-700 leading-loose'>{text}</p>
                <div className='mt-4 flex gap-x-4'>
                    <a target='_black' href={url}>
                        <TbWorldWww className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
                    </a>
                    <a target='_black' href={github}>
                        <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
                    </a>
                </div>
            </div>
        </article>
    );
};

export default ProjectsCard;