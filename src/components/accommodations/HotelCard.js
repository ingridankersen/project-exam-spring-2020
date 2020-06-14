import React from 'react';
import PropTypes from 'prop-types';
import { FaUserAlt, FaDollarSign } from 'react-icons/fa';
import { GiCookingPot } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import H3 from '../base/H3';
import Paragraph from '../base/Paragraph';
import Button from '../base/Button';

const HotelCard = ({ imageSrc, imageAlt, title, description, price, maxGuests, selfCatering, id}) => {
    return ( 
        <>
            <img src={imageSrc} alt={imageAlt} />
            <H3 title={title} />
            <Paragraph className="description">{description}</Paragraph>
            <Paragraph><FaDollarSign size="1.5em" color="#44A8B0"/> {price} per night</Paragraph>
            <Paragraph><FaUserAlt size="1.5em" color="#44A8B0"/> Max {maxGuests} </Paragraph>
            <Paragraph><GiCookingPot size="1.5em" color="#44A8B0"/> {selfCatering ? <span>Yes</span> : <span>No</span>}</Paragraph>
            <Link to={'/accommodation/' + id}><Button className="button" title="View More" /></Link>
        </>
     );
}
 
export default HotelCard;

HotelCard.propTypes = {
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    maxGuests: PropTypes.number,
    selfCatering: PropTypes.bool,
    id: PropTypes.string,
}