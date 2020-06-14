import React from 'react';
import PropTypes from 'prop-types';

function H1({children, className}) {
    return( 
        <h1 className={className}>{children}</h1>
    )
}

export default H1;

H1.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};