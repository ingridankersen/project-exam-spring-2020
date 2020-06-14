import React, { useState, useEffect } from 'react';
import { BASE_URL, headers } from '../../constants';
import Header from './../base/header/Header';
import H2 from './../base/H2';
import HotelCard from './HotelCard';
import Footer from './../base/footer/Footer';

const Accommodations = () => {
    const [hotels, setHotels] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
        <>
        <Header />
        <main>
        <article className="accommodations">
            <H2>All Accommodations</H2>
            <div className="accommodations__cards">
            {isLoading ? (
                <p className="loading">Loading accommodations...</p>
            ) : (
                hotels.map(
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
        </article>
        </main>
        <Footer />
        </>
    )
}

export default Accommodations;