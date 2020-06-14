import React from 'react';
import PropTypes from 'prop-types';

function H2({children, className}) {
    return(
        <h2 className={className}>{children}</h2>
    )
}

export default H2;

H2.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}