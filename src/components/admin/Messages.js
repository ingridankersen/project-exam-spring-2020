import React, { useEffect, useState } from 'react';
import { BASE_URL, headers } from '../../constants';
import { Link } from 'react-router-dom';
import H2 from '../base/H2';
import AdminHeader from './AdminHeader';

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const url = BASE_URL + 'contacts';
    const options = { headers };

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                setMessages(json);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    }, [url, options]);

    return ( 
        <>
        <AdminHeader/>
        <main>
            <div className="admin__messages">
            <H2>Messages </H2>
            {isLoading ? (
                <p className="loading">Messages loading...</p>
            ) : (
                <ul>
                    {messages.map((message, i) => 
                        <li key={i}><b>{message.name}</b> | ({message.email})
                        <br /><i>"{message.message}"</i></li>
                    )}
                </ul>
            )}
            <Link to="/admin">‹ Back to dashboard</Link>
            </div>
        </main>
        </> 
     );
}
 
export default Messages;