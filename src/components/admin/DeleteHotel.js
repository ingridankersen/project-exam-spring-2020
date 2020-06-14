import React from 'react';
import { useHistory } from 'react-router-dom';
import { BASE_URL, headers, DELETE } from '../../constants';
import Button from '../base/Button';

const DeleteHotel = (props) => {
    const history = useHistory();

    async function deleteHotel() {
        const url = BASE_URL + 'establishments/' + props.id;
        const options = { headers, method: DELETE };
        await fetch(url, options);
        history.push('/admin/hotels');
    }

    return ( 
        <Button className="delete-btn" title="Delete" onClick={deleteHotel} />
     );
}
 
export default DeleteHotel;