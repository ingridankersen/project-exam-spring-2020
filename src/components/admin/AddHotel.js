import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { BASE_URL, headers } from '../../constants';
import * as yup from 'yup';
import AdminHeader from './AdminHeader';
import H2 from '../base/H2';

const schema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required'),
    email: yup
        .string()
        .email('Please enter a valid e-mail'),
    image: yup
        .string()
        .url('Please enter a valid URL')
        .required('Image URL is required'),
    price: yup 
        .number()
        .required('Price is required')
        .integer()
        .min(1),
    maxGuests: yup
        .number()
        .min(1, 'Guests must be minimum 1')
        .required('Number of guests is required'),
    description: yup
        .string()
        .required('Description is required'),
    selfCatering: yup
        .boolean()
        .required('Kitchen or no kitchen must be answered'),
});


const AddHotel = () => {
    const { register, handleSubmit, errors } = useForm({validationSchema: schema});
    const [validated, setValidated ] = useState(false)

    async function onSubmit(data) {
        console.log(data);
        const url = BASE_URL + 'establishments'
        const options = { headers, method: 'POST', body: JSON.stringify(data)};

        await fetch(url, options);
        setValidated(true);
    }

    return (
        <>
        <AdminHeader />
        <main>
        <div className="admin__add-hotel">
            <H2>Add Hotel</H2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="name" placeholder="Hotel name..." ref={register} />
                {errors.name && <p className="error">{errors.name.message}</p>}

                <input type="text" name="email" placeholder="E-mail..." ref={register} />
                {errors.email && <p className="error">{errors.email.message}</p>}

                <input type="text" name="image" placeholder="Image URL..." ref={register} />
                {errors.image && <p className="error">{errors.image.message}</p>}

                <div className="two-columns--mobile">
                    <label htmlFor="price" className="label--inline">Price </label>
                    <input type="number" name="price" ref={register} />

                    <label htmlFor="maxGuests" className="label--inline">Max Guests</label>
                    <input type="number" name="maxGuests" min="1" ref={register} />
                </div>
                {errors.price && <p className="error">{errors.price.message}</p>}
                {errors.maxGuests && <p className="error">{errors.maxGuests.message}</p>}

                <input type="text" name="description" placeholder="Description..." ref={register} />
                {errors.description && <p className="error">{errors.description.message}</p>}

                <label htmlFor="selfCatering">Kitchen?</label>
                <select name="selfCatering">
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                {errors.selfCatering && <p className="error">{errors.selfCatering.message}</p>}
                
                <button type="submit" className="button">Add Hotel</button>
                {validated ? <p className="success">Hotel added!</p> : null}
            </form>
            <Link to="/admin">‹ Back to dashboard</Link>
        </div>
        </main>
        </>
     );
}
 
export default AddHotel;