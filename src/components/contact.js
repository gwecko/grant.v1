import React from 'react';
import { email } from '../config.js';

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <a className="email-link" href={`mailto:${email}`}>
                Say hello
            </a>
        </section>
    )
};

export default Contact;