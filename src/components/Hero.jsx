import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import heroImg from '../assets/hero.svg'

const Hero = () => {
    return (
        <div className='bg-violet-100 py-24' id='home'>
            <div className='align-element grid md:grid-cols-2 items-center gap-8'>
                <article>
                    <h1 className=' text-7xl font-bold tracking-wide'>I'm Yamil</h1>
                    <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>Front-End Developer</p>
                    <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>turning ideas into interactive reality</p>
                    <div className='flex gap-x-4 mt-4'>
                        <a target='_black' href="https://github.com/yamilzavala">
                            <FaGithubSquare className='w-8 h-8 text-slate-500 hover:text-black duration-300'/>
                        </a>
                        <a target='_black' href="https://www.linkedin.com/in/yamilzavala">
                            <FaLinkedin className='w-8 h-8 text-slate-500 hover:text-black duration-300'/>
                        </a>
                    </div>
                </article>   
                <article className='hidden md:block'>
                    <img src={heroImg} alt="hero" className="h-80 lg:h-96 mt-2" />
                </article>         
            </div>
        </div>
    );
};

export default Hero;