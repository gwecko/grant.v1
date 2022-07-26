import React from 'react';
import styled from 'styled-components';
import { email } from '../../config.js';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const StyledContact = styled.section`
    .container{
        display: flex;
        @media screen and (max-width: 600px){
            display: block;
            text-align: center;
            > button{
                margin: 20px 20px;
            }
        }
    }

    button{
        margin: 0px 20px;
        padding: 0px;
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
            color: var(--white);
            transition: 0.15s ease-in-out;
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
                        Say hello <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon></a>
                </button>
            </div>
        </StyledContact>
    )
};

export default ContactSection;