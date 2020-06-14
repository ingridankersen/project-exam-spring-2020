import React from 'react';
import PropTypes from 'prop-types';

function SocialMedia({className}) {
    return(
        <div className={className}>
            <button>E</button>
            <button>D</button>
            <button>Q</button>
        </div>
    )
}

export default SocialMedia;

SocialMedia.propTypes = {
    className: PropTypes.string
}