import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BASE_URL, headers } from '../../constants';
import * as yup from "yup";
import H2 from '../base/H2';

const schema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required'),
    email: yup
        .string()
        .email('Please enter a valid e-mail')
        .required('E-mail is required'),
    establishmentId: yup
        .string()
        .required(),
    checkIn: yup
        .date()
        .required('Check-in date is required'),
    checkOut: yup
        .date()
        .required('Check-out date is required')
})

const BookingPage = ({ hotelname, id }) => {
    const { register, handleSubmit, errors } = useForm({validationSchema: schema});
    const [validated, setValidated] = useState(false);

    async function onSubmit(data) {
        console.log(data);

        const url = BASE_URL + 'enquiries';
        const options = { headers, method: 'POST', body: JSON.stringify(data) };

        await fetch(url, options);
        setValidated(true);

    }

    return ( 
        <div className="hotel__bookingmodal">
            <H2>Book <i>{hotelname}</i></H2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Full name:</label>
                <input type="text" name="name" ref={register} />
                {errors.name && <p className="error">{errors.name.message}</p>}

                <label htmlFor="email">E-mail:</label>
                <input type="text" name="email" ref={register} />
                {errors.email && <p className="error">{errors.email.message}</p>}

                <input type="text" className="hide" name="establishmentId" value={id} ref={register} readOnly />
                {errors.establishmentId && <p className="error">{errors.establishmentId.message}</p>}

                <div className="two-columns--mobile">
                    <div>
                        <label htmlFor="checkIn">Check-in:</label>
                        <input type="date" name="checkIn" ref={register} />
                        {errors.checkIn && <p className="error">{errors.checkIn.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="checkOut">Check-in:</label>
                        <input type="date" name="checkOut" ref={register} />
                        {errors.checkOut && <p className="error">{errors.checkOut.message}</p>}
                    </div>
                </div>

                <button className="button" type="submit">Book now</button>
                {validated ? <p className="success">Enquiry sent!</p> : null}
            </form>
        </div>
     );
}
 
export default BookingPage;