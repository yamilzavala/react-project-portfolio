import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import proyect1Img from '../assets/project_1.png';
import proyect2Img from '../assets/project_2.png';
import proyect3Img from '../assets/project_3.png';
import proyect4Img from '../assets/project_4.png';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-violet-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-violet-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-violet-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: proyect1Img,
    url: 'https://visionaryvibe.netlify.app',
    github: 'https://github.com/yamilzavala/react-projects-custom-confy-store',
    title: 'project 1',
    text: 'React project developed with Hooks, React Router, axios, useContext, Styled components, Stripe, Auth0',
  },
  {
    id: nanoid(),
    img: proyect2Img,
    url: 'https://comfy-store-1985.netlify.app',
    github: 'https://github.com/yamilzavala/react-projects-comfy-store',
    title: 'project 2',
    text: 'React project developed with Hooks, React Router, axios and redux-toolkit',
  },
  {
    id: nanoid(),
    img: proyect3Img,
    url: 'https://back-roads-flex.netlify.app/',
    github: 'https://github.com/yamilzavala/css-project-back-roads-flexbox',
    title: 'project 3',
    text: 'Landing page developed in HTML, CSS and Flexbox with Responsive Design',
  },
  {
    id: nanoid(),
    img: proyect4Img,
    url: 'https://tea-station-template.netlify.app/',
    github: 'https://github.com/yamilzavala/css-project-teaStation',
    title: 'project 4',
    text: 'Landing Page developed in HTML and CSS with Responsive Design',
  },
];
