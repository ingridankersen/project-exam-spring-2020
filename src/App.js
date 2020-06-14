import React from 'react';
import './sass/style.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/routes/ProtectedRoute';
import Home from './components/home/Home';
import Accommodations from './components/accommodations/Accommodations';
import Contact from './components/contact/Contact';
import Accommodation from './components/accommodations/Accommodation';
import Login from './components/auth/Login';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminHotels from './components/admin/AdminHotels';
import AddHotel from './components/admin/AddHotel';
import EditHotel from './components/admin/EditHotel';
import Enquiries from './components/admin/Enquiries';
import Messages from './components/admin/Messages';
import AuthContextProvider from './contexts/AuthContext';
import BookingPage from './components/accommodations/BookingPage';


function App() {
  return (
      <Router>
        <Switch>
      <AuthContextProvider>
          <div className="App">
                <Route path="/" exact component={Home} />
                <Route path="/accommodations" component={Accommodations} />
                <Route path="/accommodation/:number" exact component={Accommodation} />
                <Route path="/accommodation/book/:number" exact component={BookingPage} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login}/>
                <ProtectedRoute path="/admin" exact component={AdminDashboard} />
                <ProtectedRoute path="/admin/hotels" exact component={AdminHotels} />
                <ProtectedRoute path="/admin/hotels/add" exact component={AddHotel} />
                <ProtectedRoute path="/admin/hotels/edit/:id" exact component={EditHotel} />
                <ProtectedRoute path="/admin/enquiries" exact component={Enquiries} />
                <ProtectedRoute path="/admin/messages" exact component={Messages} />
          </div>
      </AuthContextProvider>
      </Switch>
      </Router>
  )
}

export default App;
