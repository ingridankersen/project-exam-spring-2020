import React from 'react';
import PropTypes from 'prop-types';

function H3({title}) {
    return(
        <h3>{title}</h3>
    )
}
export default H3;

H3.propTypes = {
    title: PropTypes.string
}