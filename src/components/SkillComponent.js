import React from 'react'

import {StyledDiv, StyledLine} from '../styles';


import styled from 'styled-components';
// import SkillTag from './SkillTag';

import { AiFillGithub } from "react-icons/ai";
// import { MdDesktopWindows } from "react-icons/md";

import {motion} from 'framer-motion';
import { photoAnimation, fade, lineAnimation } from '../animation';


export default function SkillComponent({skill}) {    
    return (        
                    <StyledProjectSection>
                    <StyledLine variants={lineAnimation} className="mobile-line"/>
                    <StyledImgContainer>
                        <motion.img variants={photoAnimation} src={skill.imageUrl} alt="" width='90%'/>
                    </StyledImgContainer>
                    <StyledProject>
                    <motion.h2 variants={fade}>{skill.title}</motion.h2>

                            <motion.button variants={fade}> <a href={skill.githubUrl}>
                             <AiFillGithub size="30px"/>
                            </a></motion.button>
                    </StyledProject>
                    </StyledProjectSection>
    );
}



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

const StyledImgContainer = styled.div`
flex: 1.25;
`;

const StyledProject = styled.div`
flex: 1;
padding: 0 2rem;
.subtitle{
    margin: 1rem 0;
    font-family: 'Lato', sans-serif;
    letter-spacing: 2px;
    font-weight:300;
    font-size: 1.5rem;
}
button a svg{
    margin: 0;
}
h2{
    margin-top: 2rem
}

`;
const StyledProjectsTools = styled(motion.div)`
    margin: 20px 0;
    width: 80%;
    display:flex;
    flex-wrap: wrap;
    @media (max-width: 1200px){
    justify-content: center;
        width: 100%;
    }
`;