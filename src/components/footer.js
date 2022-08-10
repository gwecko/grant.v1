import React from "react";
import styled from "styled-components";
import { email, socialMedia } from "../config";
import { Icon } from './icons';

const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0;
    @media (max-width: 600px){
        display: none
    }
`;

const StyledSocialsLine = styled.div`
    margin-left: 3rem;
    filter: drop-shadow(0px -3px 7px var(--darkGreen));
    
    @media (max-width: 600px){
        padding-left: 2rem;
    }

    ul{
      list-style: none;
      padding-left: 0;
      margin: 0;
    }

    li{
      padding-top: 10px;
    }

    a{
        svg{
            height: 30px;
            &:hover{
                transform: translateY(-3px);
                color: var(--white);
            }   
        }
    }
    
    ::after{
      content: "";
      display: block;
      width: 2px;
      height: calc(10vh + 50px);
      margin: 0 auto;
      background-color: var(--green);
      filter: drop-shadow(0px -3px 7px var(--darkGreen));
    }
`;

const StyledEmailLine = styled.div`
    display: block;
    position: fixed;
    bottom: 0px;
    right: 4rem;
    filter: drop-shadow(0px -3px 7px var(--darkGreen));

    a{
        writing-mode: vertical-lr;
        letter-spacing: 0.09rem;
        font-size: 1.05rem;
        &:hover{
            transform: translateY(-3px);
            color: var(--white);
        }
    }
    
    ::after{
        content: '';
        display: block;
        width: 3px;
        margin-left: .6rem ;
        height: calc(10vh + 50px);
        background-color: var(--green);
    }
`


const Footer = () => {
    
    const socialsLine = (
        <ul>
            {socialMedia && socialMedia.map((socialMedia, i) => (
                <li key={i}>
                    <a href={socialMedia.url}
                        aria-label={socialMedia.name}>
                        <Icon name={socialMedia.name} />
                    </a>
                </li>
            ))}
        </ul>
    );
    
    const emailLine = (
        <a href={`mailto:${email}`}>{email}</a>
    );
    
    return (
        <StyledFooter>
            <StyledSocialsLine>{socialsLine}</StyledSocialsLine>
            <StyledEmailLine>{emailLine}</StyledEmailLine>
        </StyledFooter>
    )
}

export default Footer;