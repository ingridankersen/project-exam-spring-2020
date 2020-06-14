import React, { useEffect, useState } from 'react';
import { BASE_URL, headers } from '../../constants';
import { Link } from 'react-router-dom';
import H2 from '../base/H2';
import Button from '../base/Button';
import HotelCard from '../accommodations/HotelCard';

const TopAccommodations = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [hotels, setHotels] = useState([]);

    const url = BASE_URL + 'establishments';
    const options = { headers };

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                setHotels(json);
                setIsLoading(false);
            })
            .catch((error) => console.log(error))

    }, [url, options]); 
    
    return(
        <article className="accommodations">
            <H2>Top Accommodations</H2>
            <div className="accommodations__cards">
            {isLoading || !hotels ? (
                <p className="loading">Loading hotels...</p>
            ) : (
                hotels.slice(0,3).map(
                    hotel =>
                    <div className="accommodations__card" key={hotel.id}>
                    <HotelCard
                    imageSrc={hotel.image}
                    imageAlt={hotel.name}
                    title={hotel.name}
                    description={hotel.description}
                    price={hotel.price}
                    maxGuests={hotel.maxGuests}
                    selfCatering={hotel.selfCatering}
                    id={hotel.id}
                    />
                    </div>
                )
                )}
                </div>
            <Link to="/accommodations"><Button title="View all accommodations" className="button" /></Link>
        </article>
    )
}

export default TopAccommodations;