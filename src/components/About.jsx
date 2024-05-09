import React from 'react';
import SectionTitle from './SectionTitle';
import aboutSvg from '../assets/about.svg'

const About = () => {
    return (
        <section className='bg-white py-20' id='about'>
            <div className="align-element py-16 grid md:grid-cols-2 items-center gap-16">
                <img className='w-full h-64' src={aboutSvg} alt="about" />
                <article>
                    <SectionTitle text='about me'/>
                    <p className='text-slate-600 mt-8 leading-loose'>
                        Hello, I'm Yamil Zavala and I'm a web developer. I live and work in Cordoba, Argentina. I spend most of my day, experimenting with HTML, CSS and Javascript (and it's endless list of frameworks). I enjoy coding and the challenge of learning something new everyday. 
                    </p>

                    <h4 className='mt-6 font-bold capitalize'>areas of interest</h4>
                    <p className='text-slate-600 leading-loose'>                                        
                        JavaScript, TypeScript, CSS, HTML, React, Redux toolkit, React router, React query, context API, Hooks & State Management, Sass, Styled components and Git.
                    </p>

                </article>
            </div>
        </section>
    );
};

export default About;