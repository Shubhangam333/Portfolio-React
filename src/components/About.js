import React from 'react';
import styled from 'styled-components';
import { StyledDiv, StyledLine } from '../styles';
import { Link } from 'react-router-dom';

import SkillTag from './SkillTag';

import { AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";

import me from '../img/Shubhangam333.jpg';

import {motion} from 'framer-motion';
import { fade, lineAnimation, photoAnimation } from '../animation';


const About = () => {
    const skills = ['html', 'css / sass', 'javascript', 'bootstrap', 'react . js', ' c++', 'node js','java','flutter', 'dart', 'figma'];
    return(
        <StyledAboutSection>
            <StyledImgContainer>
                <motion.img variants={photoAnimation} src={me} alt="about me" width="80%" />
            </StyledImgContainer>
            <StyledLine variants={lineAnimation} className="divider"/>
            <StyledAboutme>
                <motion.h3 variants={fade}>About me</motion.h3>
                <motion.p variants={fade}>Hi! My name is Shubhangam Saxena and I’m an Full Stack web developer.I love creating Web Apps based on MERN Stack that work on all devices and are accessible to all. I have experience working with backend technologies like node, express, and MongoDB. I enjoy solving problems, learning, and love building websites from start to finish. I have built websites with and without frameworks but really enjoy developing with React.js</motion.p>
                <motion.p variants={fade}>My aim is to create work that is beautiful, meaningful, and meticulously-crafted. I am always eager to learn new technologies and processes to transform great ideas into polished and efficient results.</motion.p>
                <StyledLine variants={lineAnimation}/>
                <StyledSkillsSection variants={fade}>
                    {skills.map((skill)=><SkillTag skill={skill}/>)}
                </StyledSkillsSection>
                <motion.div variants={fade}>
                <motion.button variants={fade}><Link to='/projects'>
                        <AiOutlineArrowRight size="20px" className="btn-icon"/>
                    </Link></motion.button>
                    <motion.button variants={fade}> <Link to='/contact'>
                    <AiOutlineMail size="20px" className="btn-icon"/>
                    </Link></motion.button>
                </motion.div>
            </StyledAboutme>
        </StyledAboutSection>
    );
}

const StyledAboutSection = styled(StyledDiv)`
        padding-top: 10vh ;


    .divider{
        display:none;
    }
    @media (max-width: 1200px){
margin-top: 1.5rem;

        display: block;
    padding: 2rem 2.5rem;
        width: 100%;
        text-align: center;
        .divider{
        display: block;
    }

    }
`;

const StyledImgContainer = styled.div`
    flex: 1;
    img{
        width: 90%;
    }
    @media (max-width: 1200px){
        img{
            margin-top: 10rem;
        }

    }
`;
const StyledAboutme = styled.div`
    flex: 1.25;
    button{
        margin: 1.5rem;
    }    
`;
const StyledSkillsSection = styled(motion.div)`
    margin: 20px 0;
    width: 80%;
    display:flex;
    flex-wrap: wrap;
    @media (max-width: 1200px){
        justify-content:center;
        width: 100%;
    }
`;

export default About;