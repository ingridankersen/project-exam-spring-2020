import React from 'react';
import PropTypes from 'prop-types';

function Paragraph({children, className}) {
    return(
        <p className={className}>{children}</p>
    )
}

export default Paragraph;

Paragraph.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}