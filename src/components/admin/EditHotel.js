import React, { useState, useEffect } from 'react';
import { BASE_URL, headers } from '../../constants';
import { useForm } from 'react-hook-form';
import { useParams, Link } from 'react-router-dom';
import * as yup from 'yup';
import H2 from '../base/H2';
import AdminHeader from './AdminHeader';
import DeleteHotel from './DeleteHotel';

const schema = yup.object().shape({
    name: yup
        .string(),
    email: yup
        .string()
        .email('Please enter a valid e-mail'),
    image: yup
        .string()
        .url('Please enter a valid URL'),
    price: yup 
        .number()
        .min(1, 'Price must be higher than $1'),
    maxGuests: yup
        .number()
        .min(1, 'Guests must be minimum 1'),
    description: yup
        .string(),
    selfCatering: yup
        .boolean(),
});

const EditHotel = () => {
    const { register, handleSubmit, errors } = useForm({validationSchema: schema});
    const [isLoading, setIsLoading] = useState(true);
    const [hasUpdated, setHasUpdated] = useState(false);
    const [hotel, setHotel] = useState([]);

    let { id } = useParams();
    const options = { headers };
    const fetchURL = BASE_URL + 'establishments/' + id;

    useEffect(() => {
        fetch(fetchURL, options)
            .then((response) => response.json())
            .then((json) => setHotel(json))
            .catch((error) => console.log(error));
        setIsLoading(false)
    }, [fetchURL, options]);

    async function onSubmit(data){
        console.log(data);

        const updateOptions = { headers, method: 'PATCH', body: JSON.stringify(data) }
        await fetch(fetchURL, updateOptions)
        setHasUpdated(true);
    }
    
    return ( 
        <>
        <AdminHeader/>
        <main>
        <H2>Edit Hotel</H2>
        {isLoading ? (
            <p className="loading">Loading information...</p>
        ) : (
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Hotel name:</label>
                <input type="text" name="name" defaultValue={hotel.name} ref={register} />
                {errors.name && <p className="error">{errors.name.message}</p>}


                <label htmlFor="email">Hotel e-mail:</label>
                <input type="text" name="email" defaultValue={hotel.email} ref={register} />
                {errors.email && <p className="error">{errors.email.message}</p>}

                <label htmlFor="imafe">Image:</label>
                <input type="text" name="image" defaultValue={hotel.image} ref={register} />
                {errors.image && <p className="error">{errors.image.message}</p>}

                <div className="two-columns--mobile">
                    <label htmlFor="price" className="label--inline">Price </label>
                    <input type="number" name="price" defaultValue={hotel.price} ref={register} />
                    {errors.price && <p className="error">{errors.price.message}</p>}

                    <label htmlFor="maxGuests" className="label--inline">Max Guests</label>
                    <input type="number" name="maxGuests" min="1" defaultValue={hotel.maxGuests} ref={register} />
                    {errors.maxGuests && <p className="error">{errors.maxGuests.message}</p>}
                </div>

                <label htmlFor="description">Description:</label>
                <input type="text" name="description" defaultValue={hotel.description} ref={register} />
                {errors.description && <p className="error">{errors.description.message}</p>}

                <label htmlFor="selfCatering">Kitchen?</label>
                <select name="selfCatering">
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                {errors.selfCatering && <p className="error">{errors.selfCatering.message}</p>}

                <button type="submit" className="button">Change</button> <DeleteHotel id={id} />
            </form>

            {hasUpdated ? (<p className="dark-blue center">Update successful!</p>) : (null)}

            <Link to="/admin/hotels">‹ Back to hotels</Link>
            </div>
        )}
        </main>
        </>
     );
}
 
export default EditHotel;