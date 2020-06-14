import React, { useState, useEffect } from 'react';
import { BASE_URL, headers } from '../../constants';
import { useParams } from 'react-router-dom';
import Header from './../base/header/Header';
import Reviews from './../home/Reviews';
import Footer from './../base/footer/Footer';
import BookingPage from './BookingPage';
import HotelDetail from './HotelDetail';

function findId(id) {
    return function(x) {
        return x.id.includes(id) || !id;
    }
}

const Accommodation = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [hotels, setHotels] = useState([]);
    const [booking, openBooking] = useState(false);
    const [id, setId] = useState();

    const url = BASE_URL + 'establishments';
    const options = { headers };
    const { number } = useParams();

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                setHotels(json);
                setIsLoading(false);
                setId(number);
            })
            .catch((error) => console.log(error))

    }, [url, options, number]);

    return(
        <>
        <Header />
        <main>
            {isLoading ? (
                    <p className="loading">Loading...</p>
                ) : (
                    hotels.filter(findId(id)).map(
                        (hotel, i) =>
                        <article className="hotel" key={i}>
                            <HotelDetail 
                            title={hotel.name}
                            imageSrc={hotel.image}
                            description={hotel.description}
                            price={hotel.price}
                            maxGuests={hotel.maxGuests}
                            selfCatering={hotel.selfCatering}
                            onClick={() => openBooking(true)}
                            />

                            {booking ? (
                                <BookingPage hotelname={hotel.name} id={hotel.id} />
                            ) : (
                                null
                            )}
                            <div className="divider"></div>
                            <Reviews />
                        </article>
                    ))}
        </main>
        <Footer />
        </>
    );
}

export default Accommodation;
