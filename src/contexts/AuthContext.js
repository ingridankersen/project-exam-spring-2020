import React, { createContext, useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const history = useHistory();

    function logIn(username, password) {
        localStorage.setItem('user', JSON.stringify({username, password}));
        setUser({
            username: username,
            password: password
        })
    }
 
    function logOut() {
        setUser(null);
        localStorage.removeItem('user');
        history.push("/login");
    }

    return (
        <AuthContext.Provider value={{ user, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default withRouter(AuthContextProvider);