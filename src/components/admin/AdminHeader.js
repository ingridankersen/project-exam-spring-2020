import React, { useContext } from 'react';
import Logo from '../base/Logo';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const AdminHeader = () => {

    const { user, logOut } = useContext(AuthContext);

    return ( 
        <div className="admin__header">
            <Link to="/">
                <Logo>holidaze</Logo>
            </Link>

            { user ? (
            <>
            <div className="admin__user">
                <p>{user.username}</p>
                <FaUserAlt color="white" size="1.3em"/>
                <button onClick={logOut} className="logout-btn">Log out</button>

            </div>            
            </>
            ) : (
                null
            )}
        </div>
     );
}
 
export default AdminHeader;