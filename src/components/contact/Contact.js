import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BASE_URL, headers } from '../../constants';
import * as yup from 'yup';
import Header from './../base/header/Header';
import Footer from './../base/footer/Footer';
import H2 from '../base/H2';
import Image from '../../graphics/contact.svg';
import Paragraph from '../base/Paragraph';

const schema = yup.object().shape({
    name: yup
        .string()
        .required("Name is required"),
    email: yup
        .string()
        .email("Please enter a valid e-mail")
        .required("E-mail is required"),
    message: yup
        .string()
        .required("Message is required"),
}); 

const Contact = () => {
    const { register, handleSubmit, errors } = useForm({validationSchema: schema});
    const [validated, setValidated] = useState(false);

    async function onSubmit(data) {
        console.log(data);

        const url = BASE_URL + 'contacts';
        const options = { headers, method: 'POST', body: JSON.stringify(data)};

        await fetch(url, options);
        setValidated(true);
    }

    return (
        <> 
        <Header />
        <main>
            <section>
            <H2>Contact us</H2>
            <Paragraph>If you have any questions, please don’t hesitate to send us a message, and we’ll get back to you as soon as we can.</Paragraph>
            <div className="two-columns">
            <div className="contact__form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Full name:</label>
                <input type="text" name="name" ref={register} />
                {errors.name && <p className="error">{errors.name.message}</p>}

                <label htmlFor="email">E-mail:</label>
                <input type="text" name="email" ref={register} />
                {errors.email && <p className="error">{errors.email.message}</p>}
                
                <label htmlFor="message">Message:</label>
                <textarea name="message" ref={register} />
                {errors.message && <p className="error">{errors.message.message}</p>}

                {validated ? <p className="success">Message sent!</p> : null}
                <button className="button" type="submit">Send</button>
            </form>
            </div>

            <div className="contact__image">
                <img src={Image} alt="Illustration of woman on the phone"/>
            </div>
            
            </div>
            </section>
        </main>
        <Footer />
        </>
     );
}
 
export default Contact;