import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { navbarLinks } from "../config";

// .clientWidth returns the width without the scroll bar

const StyledNavbar = styled.nav`
nav{
    width: 100%;
    height: 70px;
    position: fixed;
    background: (rgba(23,43,10, .9));
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    display: flex;
}
`;


const Navbar = () => {
    return (
        <StyledNavbar>
            <nav>
                <p>It's a navbar!</p>
                <div class="nav-blur"></div>
                <ul>{navbarLinks &&
                    navbarLinks.map((link, i) => (
                    <li key={i}><Link to={link.url}>
                        {link.name}
                    </Link></li>
                    ))
                }</ul>
            </nav>
        </StyledNavbar>
    )
}

export default Navbar;