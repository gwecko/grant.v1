import React from 'react';
import styled from 'styled-components';
import { email } from '../../config.js';


const StyledContact = styled.section`
    div{
        
    }

    button{
        margin: 0px 0px 0px 0px;
        padding: 0px 0px 0px 0px;
        background: rgba(0,0,0,0);
        border: none;
    }

    .email-link{
        display: block;
        font-size: 1.6em;
        padding: 20px 30px 20px 30px;
        border: solid 3px rgba(218, 70, 92, .8);
        border-radius: 12px;
        color: var(--white);
        background: rgba(218, 70, 92, .3);
        &:hover{
            background: rgba(218, 70, 92, .6);
            color: var(--white);
            transition: 0.15s ease-in-out;
        }
    }
`


const ContactSection = () => {
    return (
        <StyledContact id='contact'>
            <div>
                <h2>Contact</h2>
                <button>
                    <a className="email-link" href={`mailto:${email}`}>
                        {`Say hello (:`}
                    </a>
                </button>
            </div>
        </StyledContact>
    )
};

export default ContactSection;