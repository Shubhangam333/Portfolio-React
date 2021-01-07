import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



import { motion } from 'framer-motion';
import {  pageAnimation, titleAnimation } from '../animation';
import styled from 'styled-components';

import { StyledDiv } from '../styles';
import { AiFillGithub } from 'react-icons/ai';

const responsive = {
    0: { items: 1 },
    
    400: { items: 2 },

    800:{items:3},

    1200:{items:4},

    1600:{items:5}
};

const items = [
    <div className="item" data-value="1"><a href='https://github.com/Shubhangam333/JavaScript'><AiFillGithub size="100px"/></a></div>,
    <div className="item" data-value="2"><a href='https://github.com/Shubhangam333/PythonGames'><AiFillGithub size="100px"/></a></div>,
    <div className="item" data-value="3"><a href='https://github.com/Shubhangam333/PHP'><AiFillGithub size="100px"/></a></div>,
    <div className="item" data-value="4"><a href='https://github.com/Shubhangam333/Java'><AiFillGithub size="100px"/></a></div>,
    <div className="item" data-value="5"><a href="https://github.com/Shubhangam333/c-plus-plus"><AiFillGithub size="100px"/></a></div>,
];

export default function SkillsPage () {
  return(
    <>
    <StyledProjectPage variants={pageAnimation} initial="hidden" animate="show" exit="exit">
    <motion.h1 variants={titleAnimation} className="title">Programming Library</motion.h1>
    <motion.h3 variants={titleAnimation} className="title">About me</motion.h3>
    </StyledProjectPage>

    <StyledProjectSection>
    <AliceCarousel

        mouseTracking
        items={items}
        responsive={responsive}
    />
  </StyledProjectSection>
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
    padding-top: 5rem;

.mobile-line{
    display: none;
}
@media (max-width: 1200px){
        display: block;
        padding: 0rem;
        width: 100%;
        text-align: center;
        .desktop-line{
    margin: 5rem 0;
            display: none;
        }
        .mobile-line{
    margin: 5rem 0;
    display: block;
}
    }
`;