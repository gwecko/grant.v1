import React from 'react';
import styled from 'styled-components';
import { socialMedia } from '../../config';
import { Icon } from '../icons';


const StyledGreeting = styled.section`
h1, h2, h3, h4, h5, h6{
    margin: 0;
    line-height: 1.2;
}

h1{
    font-size: medium;
    color: var(--white);
}

h2{
    font-size: clamp(40px, 8vw, 80px);
    color: var(--white);
    @media (max-width: 480px){
        font-size: 30px;
    }
}

h3{
    font-size: clamp(30px, 5vw, 50px);
    color: var(--green);
    text-shadow: 15px 0px 30px var(--darkGreen);
    @media (max-width: 480px){
        font-size: 25px;
    }
}
`;

const StyledGreetingLinks = styled.div`
    @media (min-width: 600px){
        display: none;
    }
    text-align: center;
    padding-top: 80px;
    

    ul{
      list-style: none;
      display: inline-flex;
    }

    a{
        padding: 2vw;
        height: 50px;
        width: 50px;
        color: var(--red);
        &:active,
        &:hover{
            color: var(--white);
            transition: .2s;
        }
        svg{
            width: clamp(40px, 40px, 50px);
            height: clamp(40px, 40px, 50px);
        }
    }
`;

const GreetingSection = () => {
    
    const greetingLinks = (
        <ul>
            {socialMedia.map((socialMedia, i) => (
                <li key={i}>
                    <a href={socialMedia.url}
                        aria-label={socialMedia.name}>
                        <Icon name={socialMedia.name} />
                    </a>
                </li>
            ))}
        </ul>
    );
    
    return (
        <StyledGreeting>
            <h1>Welcome! I'm</h1>
            <h2>Grant Wecker.</h2>
            <h3>This is my portfolio.</h3>
            <StyledGreetingLinks>{greetingLinks}</StyledGreetingLinks>
        </StyledGreeting>
    )
};

export default GreetingSection;