import React from 'react';
import Paragraph from './Paragraph';
import Image from './Image';
import Man from './../../images/man.jpg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Review({name, accommodation, message, imageAlt, urlPath}) {
    return(
        <div className="review">
            <div className="review__info">
                <Image src={Man} alt={imageAlt}/>
                <h4>{name}</h4> 
                <Paragraph>
                    @ <Link to={urlPath}>{accommodation}</Link>
                </Paragraph>
            </div>
            <div className="review__message">
                <Paragraph>
                    {message}
                </Paragraph>
            </div>
        </div>
    )
}

export default Review;

Review.propTypes = {
    name: PropTypes.string,
    accommodation: PropTypes.string,
    message: PropTypes.string,
    imageAlt: PropTypes.string,
    urlPath: PropTypes.string
}