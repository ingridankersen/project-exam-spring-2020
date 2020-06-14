import React from 'react';
import H1 from './H1';
import PropTypes from 'prop-types';

function Logo({className, children}) {
    return(
        <div className="logo">
            <H1 className={className}>{children}</H1>
        </div>
    )
}

export default Logo;

Logo.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}