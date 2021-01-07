import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../animation';
import styled from 'styled-components';
import ScrollTop from './ScrollTop';
import { StyledDiv } from '../styles';
// import { AiFillGithub } from 'react-icons/ai';
import { SiJavascript,SiPhp,SiPython,SiJava,SiFlutter,SiCplusplus,SiLaravel } from 'react-icons/si';

const responsive = {
    0: { items: 1 },
    400: { items: 2 },
    800: { items: 3 },
    1000: { items: 4 },
    1200: { items: 5 },
    1400: { items: 6 },
    1600: { items: 7 },

};

const items = [
    <div className="item" data-value="1"><a href='https://github.com/Shubhangam333/JavaScript'><SiJavascript size="100px"/></a></div>,
    <div className="item" data-value="2"><a href='https://github.com/Shubhangam333/PythonGames'><SiPython size="100px"/></a></div>,
    <div className="item" data-value="3"><a href='https://github.com/Shubhangam333/PHP'><SiPhp size="100px"/></a></div>,
    <div className="item" data-value="4"><a href='https://github.com/Shubhangam333/Java'><SiJava size="100px"/></a></div>,
    <div className="item" data-value="5"><a href="https://github.com/Shubhangam333/c-plus-plus"><SiCplusplus size="100px"/></a></div>,
    <div className="item" data-value="6"><a href="https://github.com/Shubhangam333/Flutter"><SiFlutter size="100px"/></a></div>,
    <div className="item" data-value="7"><a href="https://github.com/Shubhangam333/c-plus-plus"><SiLaravel size="100px"/></a></div>,
];
export default function ProjectCarousel () {

  return(
    <>
    <StyledProjectPage variants={pageAnimation} initial="hidden" animate="show" exit="exit">
    <motion.h1 variants={titleAnimation} className="title"></motion.h1>
    <ScrollTop/>
    </StyledProjectPage>
    
  
    <AliceCarousel
    disableButtonsControls
  
        autoPlay
        mouseTracking
        paddingLeft={100}
        items={items}
        responsive={responsive}
    />
  
   
    </>
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


const StyledProjectSection = styled(StyledDiv)`

.mobile-line{
    display: none;
}
@media (max-width: 1200px){
        display: block;
        padding: 0rem;
        width: 100%;
        text-align: center;
        .desktop-line{
            display: none;
        }
        .mobile-line{

    display: block;
}
    }
`;