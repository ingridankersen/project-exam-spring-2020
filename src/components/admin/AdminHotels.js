import React, { useEffect, useState } from 'react';
import { BASE_URL, headers } from '../../constants';
import H2 from '../base/H2';
import { Link } from 'react-router-dom';
import AdminHeader from './AdminHeader';

const AdminHotels = () => {
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
            .catch((error) => console.log(error));
    }, [url, options]);
    
    return ( 
        <>
        <AdminHeader />
        <main>
            <div className="admin__hotels">
            <H2>Hotels</H2>
            {isLoading ? (
                <p className="loading">Loading hotels...</p>
            ) : (
                <ul>
                {hotels.map(hotel => {
                    return <li key={hotel.id}>{hotel.name} <Link className="float-right" to={'/admin/hotels/edit/' + hotel.id}>Edit</Link></li>;
                })}
            </ul>
            )}
            <Link to="/admin">‹ Back to dashboard</Link>
            </div>
        </main>
        </>
     );
}
 
export default AdminHotels;