import React from 'react';
import styled from 'styled-components';

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";

import {motion} from 'framer-motion';
import { titleAnimation } from '../animation';

export default function SocialComponent() {

    return (
        <StyledSocialDiv variants={titleAnimation}>
            <StyledSocialSpan>
            <a href="https://www.linkedin.com/in/shubhangam333" target="_blank" rel="noreferrer noopener" className="social-icon" ><AiFillLinkedin size='40'/></a>
            <a href="mailto:shubhangam27@gmail.com" target="_blank" rel="noreferrer noopener" className="social-icon" ><SiGmail size="40"/></a>
            <a href="https://www.github.com/Shubhangam333" target="_blank" rel="noreferrer noopener" className="social-icon" ><AiFillGithub size="40"/></a>
            <a href="https://www.hackerrank.com/Shubhangam27" target="_blank" rel="noreferrer noopener" className="social-icon" ><FaHackerrank size="40"/></a>
        </StyledSocialSpan>
        </StyledSocialDiv>
    );
}

const StyledSocialDiv = styled(motion.div)`
display:flex;
color: #000;
text-align:center;
justify-content: space-around;
align-items:center;
margin: 2rem 0;
`;


const StyledSocialSpan = styled.div`
    z-index: 5;
    .social-icon{
        margin: 0 1rem;
        color: #66fcf1;
        transition: color 0.75s ease;
        &:hover{
            color:#45a293;
        }
    }
`;
