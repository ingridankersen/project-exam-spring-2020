import React from 'react';
import HeaderNav from './HeaderNav';
import HeaderSearch from './HeaderSearch';

function Header() {
    return(
        <>
        <header>
            <HeaderNav />
            <HeaderSearch />
        </header>
        </>
    )
}

export default Header;