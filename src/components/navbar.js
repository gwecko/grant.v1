import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { navbarLinks } from "../config";

// .clientWidth returns the width without the scroll bar

const StyledNavbar = styled.nav`
nav{
    display: flex;
    position: fixed;
    width: 100%;
    height: 70px;
    background: (rgba(23,43,10, .9));
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    font-size: .9em;
}

ul{
    list-style: none;
    margin-left: auto;
    padding-top: 10px;
}

li{
    float: left;
    display: inline-block;
    margin: 0px 35px 0px 0px;
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

span{
    font-size: 40px;
    transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    margin-left: 10px;
}
`;


const Navbar = () => {
    return (
        <StyledNavbar>
            <nav>
                <span role="img">🗿</span>
                <ul>{navbarLinks &&
                    navbarLinks.map((link, i) => (
                        <li key={i}><Link to={link.url} class="underline-anim">
                        {link.name}
                    </Link></li>
                    ))
                }</ul>
            </nav>
        </StyledNavbar>
    )
}

export default Navbar;