import React from 'react';
import styled from  'styled-components';

// Importing Components
import ProjectComponent from '../components/ProjectComponent';

import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation, fade } from '../animation';

import ScrollTop from '../components/ScrollTop';

const ProjectsPage = () => {
    const projects = [{
        "title" : 'Shop Drop',
        "subtitle" : 'Ecommerce Website',
        "description" : 'An Ecommerce Store with PayPal Payment Integration',
        "imageUrl" : process.env.PUBLIC_URL + '/projects/portfolio-1.png',
        "technologies" : ['React', 'React-Bootstrap', 'Nodejs', 'ExpressJS','MongoDB','React','Redux'],
        "githubUrl" : 'https://github.com/Shubhangam333/ShopDrop',
        "liveUrl":"https://shopdrop333.herokuapp.com/"
      },
      {
        "title" : 'DevHub',
        "subtitle" : 'Developer Hub',
        "description" : 'A place for developers to interact',
        "imageUrl" : process.env.PUBLIC_URL + '/projects/portfolio-4.png',
        "technologies" : ['React', 'React-Bootstrap','MongoDB','NodeJS','Express','Redux'],
        "githubUrl" : 'https://github.com/Shubhangam333/DevHub',
        "liveUrl":"https://intense-savannah-06053.herokuapp.com/"
      },
      {
        "title" : 'GingerBird',
        "subtitle" : 'Social Networking Site',
        "description" : 'Social Networking Site with various User functionalities',
        "imageUrl" : process.env.PUBLIC_URL + '/projects/portfolio-3.png',
        "technologies" : ['React', 'Nodejs', 'ExpressJS','MongoDB','Redux','React-Context','Materialise-Css'],
        "githubUrl" : 'https://github.com/Shubhangam333/GingerBird',
        "liveUrl":"https://gingerbird333.herokuapp.com"
      },
      {
        "title" : 'DevChat',
        "subtitle" : 'Developers Chat Portal',
        "description" : 'Chatting Web App Developed Using React-Redux-Firebase',
        "imageUrl" : process.env.PUBLIC_URL + '/projects/portfolio-9.png',
        "technologies" : ['React', 'javascript', 'Html', 'CSS', 'Redux','Firebase','colorsjs'],
        "githubUrl" : 'https://github.com/Shubhangam333/Dev-Chat',
        "liveUrl":"https://react-slack-clone-35ee8.web.app"
      },
      {
        "title" : 'Comfy Sloth',
        "subtitle" : 'Buy products at best price',
        "description" : 'Online Furniture Selling Store',
        "imageUrl" : process.env.PUBLIC_URL + '/projects/portfolio-10.png',
        "technologies" : ['React', 'javascript', 'Html', 'CSS', 'Redux','Auth0','ContextAPI'],
        "githubUrl" : 'https://github.com/Shubhangam333/ComfySloth',
        "liveUrl":"https://shubhangam333-comfysloth-574670.netlify.app"
      },

      {
        "title" : 'CarZone',
        "subtitle" : 'Django App ',
        "description" : 'Car Sharing website develop using Django',
        "imageUrl" : process.env.PUBLIC_URL + '/projects/carzone.png',
        "technologies" : ['Django', 'javascript', 'Html', 'CSS'],
        "githubUrl" : 'https://github.com/Shubhangam333/carzone',
        "liveUrl":"https://hidden-basin-98879.herokuapp.com/"
      },
      {
        "title" : 'Hospital Management System',
        "subtitle" : 'credentials - patient : vincent@gmail.com/Test@123 ,Doctor:simon@gmail.com/password ',
        "description" : 'Online Hospital Management System for patient,Doctors',
        "imageUrl" : process.env.PUBLIC_URL + '/projects/hms.png',
        "technologies" : ['PHP', 'javascript', 'Html', 'CSS','AJAX'],
        "githubUrl" : 'https://github.com/Shubhangam333/Hospital-System',
        "liveUrl":"http://hospitalmanagement.infinityfreeapp.com/hms/index.php"
      }
    ];
    return(
        <StyledProjectPage variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <motion.h1 variants={titleAnimation} className="title">projects</motion.h1>
        {projects.map((project)=> 
        <ProjectComponent variants={fade} project={project} />)}
      <ScrollTop/>
        </StyledProjectPage>
    );
}

const StyledProjectPage = styled(motion.div)`
        padding-top: 10vh ;

    h1{
text-align: center;
        font-size: 5rem;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
        letter-spacing: 4px;
        color: #66fcf1;
    }
`;

export default ProjectsPage;