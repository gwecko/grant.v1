import React from 'react';
import styled from 'styled-components';
import { email } from '../../config.js';
import { Icon } from '../icons';

const StyledContact = styled.section`
    
    .container{
        display: flex;
        align-items: center;
        padding-top: 30px;
        @media screen and (max-width: 600px){
            display: block;
            text-align: center;
            > button{
                margin: 20px 20px;
            }
        }
    }

    p{
        max-width: 500px;
        margin: 0 auto;

    }

    button{
        margin: 0px auto;
        padding: 0px 40px 0px 20px;
        background: rgba(0,0,0,0);
        border: none;
    }

    .email-link{
        display: block;
        width: max-content;
        font-size: 1.6em;
        padding: 20px 25px 20px 25px;
        border: solid 3px rgba(218, 70, 92, .8);
        border-radius: 12px;
        color: var(--white);
        background: rgba(218, 70, 92, .3);
        &:hover{
            background: rgba(218, 70, 92, .6);
            transition: 0.15s ease-out;
        }
    }

    .resume-link{
        display: inline-block;
    }
`;


const ContactSection = () => {
    return (
        <StyledContact id='contact'>
            <h2>Contact</h2>
            <div className='container'>
                <p>If you care to share any opportunities or ideas, then I care to hear them! Or just say hi, I'd be happy to hear from you.</p>
                <button>
                    <a className="email-link" href={`mailto:${email}`}>
                        Say hello <Icon name='plane' /></a>
                </button>
            </div>
        </StyledContact>
    )
};

export default ContactSection;