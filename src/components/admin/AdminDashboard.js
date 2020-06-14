import React from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import H2 from '../base/H2';

const AdminDashboard = () => {
    return ( 
        <>
        <AdminHeader />
        <main>
            <H2 className="center">Admin Dashboard</H2>
            <nav className="admin__nav">
                <Link className="button" to="admin/hotels">Hotels</Link>
                <Link className="button" to="admin/hotels/add">Add Hotel</Link>
                <Link className="button" to="admin/messages">Messages</Link>
                <Link className="button" to="admin/enquiries">Enquiries</Link>
            </nav>
        </main>
        </>
     );
}
 
export default AdminDashboard;