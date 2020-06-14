import React, { useContext } from 'react';
import H1 from '../base/H1';
import { AuthContext } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const Login = () => {
    const { register, handleSubmit } = useForm();
    const { logIn } = useContext(AuthContext);
    const history = useHistory();

    function onSubmit(data) {
        logIn(data.username, data.password);
        history.push('/admin');

    }

    return ( 
        <div className="middle">
            <main>
                <Link to="/"><H1 className="medium-blue">holidaze</H1></Link>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="username">Username:</label>
                    <input 
                    type="text" 
                    name="username" 
                    ref={register} />

                    <label htmlFor="username">Password:</label>
                    <input 
                    type="text" 
                    name="password" 
                    ref={register} />

                    <input type="submit" className="button" value="Log In"/>
                </form>
            </main>
        </div>
     );
}
 
export default Login;