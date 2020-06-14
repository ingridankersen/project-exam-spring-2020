import React from 'react';
import PropTypes from 'prop-types';

function Button({title, className, onClick }) {
    return(
        <button onClick={onClick} className={className}>{title}</button>
    )
}

export default Button;

Button.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.string
}