import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { navbarLinks } from "../config";
// import { CSSTransition, TransitionGroup } from "react-transition-group";


const StyledNavbar = styled.nav`

display: flex;
position: fixed;
top: 0;
width: 100%;
height: 70px;
background: (rgba(23,43,10, .9));
backdrop-filter: blur(30px);
-webkit-backdrop-filter: blur(30px);
font-size: .9em;
z-index: 5;


// fadedown
    .fadedown-enter {
        opacity: 0.01;
        transform: translateY(-20px);
        transition: opacity 300ms var(--easing), transform 300ms var(--easing);
    }
    
    .fadedown-enter-active {
        opacity: 1;
        transform: translateY(0px);
        transition: opacity 300ms var(--easing), transform 300ms var(--easing);
    }


ul{
    list-style: none;
    margin-left: auto;
    padding-top: 25px;
    margin-bottom: 50px;
}

li{
    display: inline-block;
    margin: 0px 35px 0px 0px;
    @media (max-width: 480px){
        margin: 0px 10px 0px 0px;
    }
}

a{
    color: var(--white);
    display: block;
}

.underline-anim{
    display: inline-block;
    position: relative;
}

.underline-anim:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: var(--red);
    transform-origin: bottom left;
    transition: transform 0.15s ease-out;
}

.underline-anim:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

.hide-mobile{
    @media screen and (max-width: 600px){
        display: none;
    }
}

.resume-link{
    display: inline;
    padding: 8px;
    border: solid 2px rgba(218, 70, 92, .8);
    border-radius: 5px;
    color: var(--white);
    background: rgba(218, 70, 92, .3);
    &:hover{
        background: rgba(218, 70, 92, .6);
        color: var(--white);
        transition: 0.15s ease-in-out;
    } 
}

span{
    font-size: 3rem;
    margin-left: calc(1% + 10px);
    filter: sepia(1%)  hue-rotate(85deg) saturate(130%);
}
`;


const Navbar = () => {
    return (
        <StyledNavbar>
            {/* This is the retro game emoji */}
            <span>&#x1F47E;</span>
            <ul>
                {navbarLinks.map((link, i) => (
                    <li key={i}>
                        <Link to={link.url} className='underline-anim hide-mobile'>
                            {link.name}</Link>
                    </li>
                ))}
                <li><a href="/grant-wecker.pdf" className="resume-link">Résumé</a>
                </li>
            </ul>
        </StyledNavbar>
    )
}

export default Navbar;