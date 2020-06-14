import React, { useEffect, useState } from 'react';
import { BASE_URL, headers } from '../../constants';
import { Link } from 'react-router-dom';
import H2 from '../base/H2';
import AdminHeader from './AdminHeader';

const Enquiries = () => {
    const [enquiries, setEnquiries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const url = BASE_URL + 'enquiries';
    const options = { headers };

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                setEnquiries(json);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    }, [url, options]);

    return ( 
        <>
        <AdminHeader/>
        <main>
            <div className="admin__enquiries">
            <H2>Enquiries</H2>
            {isLoading ? (
                <p className="loading">Enquiries loading...</p>
            ) : (
                <ul>
                    {enquiries.map((enquiry, i) => 
                        <li key={i}><b>{enquiry.name}</b> | ({enquiry.email}) would like to book 
                        <Link to={'/accommodation/' + enquiry.id}> this accommodation</Link> from 
                         <i> {enquiry.checkIn.slice(0,10)}</i> to <i>{enquiry.checkOut.slice(0,10)}</i>
                        </li>
                    )}
                </ul>
            )}
            <Link to="/admin">‹ Back to dashboard</Link>
            </div>
        </main>
        </> 
     );
}
 
export default Enquiries;