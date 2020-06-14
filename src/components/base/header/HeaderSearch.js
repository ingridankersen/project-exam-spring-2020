import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL, headers } from '../../../constants';

function searchingFor(searchString) {
    return function(x) {
        return x.name.toLowerCase().includes(searchString.toLowerCase()) || !searchString;
    }
}

const HeaderSearch = () => {
    const [hotels, setHotels] = useState([]);
    const [searchString, setSearchString] = useState('');
    const [isSearching, setIsSearching] = useState(false);
   
    const url = BASE_URL + 'establishments';
    const options = { headers };

    useEffect(() =>  {
        fetch(url, options)
            .then(response => response.json())
            .then((json) => {
                setHotels(json)
            })
    }, [url, options]);

    const searchHandler = (e) => {
        setSearchString(e.target.value);
        setIsSearching(true);
    }
    
    return(
        <>
        <div className="header__search">
            <input 
            type="text" 
            placeholder="Search accommodations" 
            onKeyUp={searchHandler}
            />  
        </div>
        

        <div className="search__results">
            {(isSearching && searchString.length > 0) ?  (
                hotels.filter(searchingFor(searchString)).map(
                    (hotel, i) => 
                            <Link to={'/accommodation/' + hotel.id} key={i}>{hotel.name}</Link>
                )
            ) : (
                null
            )}


        </div>
        </>
    )
}

export default HeaderSearch;
