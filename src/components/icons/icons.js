import React from 'react';
import PropTypes from 'prop-types';
import {
        IconGithub,
        IconLinkedIn,
        IconExternal,
        IconPlane
    } from '.';

const Icon = ({ name }) => {
    switch (name) {
        case 'external':
            return <IconExternal />;
        case 'github':
            return <IconGithub />;
        case 'linkedIn':
            return <IconLinkedIn />;
        case 'plane':
            return <IconPlane />;
        default:
            return <IconExternal />;
    }
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Icon;