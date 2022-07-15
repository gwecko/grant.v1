import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.section`

    div{
        border: none;
    }

    h2{
        margin-top: 80px;
    }
    
    h3{
        &:before{
            content: '> ';
            color: var(--red);
        }
    }

    p{
        padding: 0px 0px 0px 25px;
    }
`


const AboutSection = () => {
    return (
        <StyledAbout id='about'>
            <h2>About me</h2>
            <h3>Who are you?</h3>
            <p>
                Self-taught web developer.
            </p>
            <h3>What got you here?</h3>
            <p>
                An obsession in website design and digital experiences.
            </p>
            <h3>What technologies do you work with?</h3>
            <p>
                Javascript, React, node.js, Mongo
            </p>
            <h3>Anything else?</h3>
            <p>
                I'm familiar with Express, C, Bootstrap, Gatsby, and API integration.
            </p>
            <h3>What are your goals?</h3>
            <p>
                Develop alongside a group of individuals with experience greater than my own.
            </p>
            <h3>Who are you, really?</h3>
            <p>
                Ohio native with an enthusiasm for tall women.
            </p>
        </StyledAbout>
    )
};

export default AboutSection;