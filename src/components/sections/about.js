import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.section`
    h2{
        margin-top: 80px;
    }
    
    h3{
        &:before{
            content: '> ';
            color: var(--red);
        }
    }

    .answer{
        
    }

    p{
        padding: 0px 0px 0px 25px;
    }

    @media screen and (max-width: 800px) {
            padding: 10px;
    }
`


const AboutSection = () => {
    return (
        <StyledAbout id='about'>
            <h2>About me</h2>
            <h3>Who are you?</h3>
            <div className='answer'>
                <p>
                Self-taught web developer.
                </p>
            </div>
            <h3>What got you here?</h3>
            <div className='answer'>
                <p>
                An obsession in website design and digital experiences.
                </p>
            </div>
            <h3>What technologies do you work with?</h3>
            <div className='answer'>
                <p>
                Javascript, React, node.js, Mongo
                </p>
            </div>
            <h3>Anything else?</h3>
            <div className='answer'>
                <p>
                I have demonstrated use with Express, C, Bootstrap, Gatsby, and API integration.
                </p>
            </div>
            <h3>What are your goals?</h3>
            <div className='answer'>
                <p>
                Develop alongside a group of individuals with experience greater than my own.
                </p>
            </div>
            <h3>Who are you, really?</h3>
            <div className='answer'>
                <p>
                Ohio native with an enthusiasm for tall women.
                </p>
            </div>
        </StyledAbout>
    )
};

export default AboutSection;