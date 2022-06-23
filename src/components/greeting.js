import React from 'react';
import styled from 'styled-components';


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
}

h3{
    font-size: clamp(30px, 5vw, 50px);
    color: var(--green);
    text-shadow: 15px 0px 30px var(--darkGreen);
}
`;

const Greeting = () => {
    return (
        <StyledGreeting>
            <h1>Welcome! I'm</h1>
            <h2>Grant Wecker.</h2>
            <h3>This is my portfolio.</h3>
        </StyledGreeting>
    )
};

export default Greeting;