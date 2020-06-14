import React from 'react';
import PropTypes from 'prop-types';

function Image({src, className, alt}) {
    return(
        <img src={src} alt={alt} className={className} />
    )
}

export default Image;

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string
}