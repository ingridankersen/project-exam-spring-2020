import React from 'react';
import PropTypes from 'prop-types';
import { FaUserAlt, FaDollarSign, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { GiCookingPot } from 'react-icons/gi';
import H2 from './../base/H2'
import Paragraph from './../base/Paragraph';
import Image from './../base/Image';

const HotelDetail = ({ title, imageSrc, description, price, maxGuests, selfCatering, onClick }) => {
    return ( 
        <>
        <H2>{title}</H2>
        <FaStar color="#f6d509" size="1.3em" className="float--left"/>
        <Paragraph className="dark-grey float--left">{Math.floor(Math.random() * 10)}.0</Paragraph>
        <Paragraph className="dark-grey">({Math.floor(Math.random() * 100)} reviews)</Paragraph>
        <FaMapMarkerAlt color="#B3E8EE" size="1.3em" className="float--left"/>
        <Paragraph className="dark-grey">Bergen, Norway</Paragraph> 
        <div className="two-columns">
            <div className="hotel__image">
                <Image src={imageSrc} alt={title} />
            </div>
        <div className="hotel__info">
            <div className="hotel__weather">Bergen now: 7°C</div>
            <Paragraph className="hotel__description">{description}</Paragraph>
            <Paragraph><FaDollarSign size="1.5em" color="#44A8B0"/> {price} per night</Paragraph>
            <Paragraph><FaUserAlt size="1.5em" color="#44A8B0"/> Max {maxGuests} </Paragraph>
            <Paragraph><GiCookingPot size="1.5em" color="#44A8B0"/> {selfCatering ? <span>Yes</span> : <span>No</span>}</Paragraph>

            <button onClick={onClick} className="button">Book Now</button>
        </div>
        </div>       
        </>
     );
}
 
export default HotelDetail;

HotelDetail.propTypes = {
    title: PropTypes.string,
    imageSrc: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    maxGuests: PropTypes.number,
    selfCatering: PropTypes.bool,
    onClick: PropTypes.func
}