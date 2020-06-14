import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../Logo';
import Button from '../Button';
import SocialMedia from '../SocialMedia';

const HeaderNav = () => {
    const [nav, openNav] = useState(false);

    const openMenu = () => {
        openNav(true);
    }

    const closeMenu = () => {
        openNav(false);
    }

    return (
        <>
        <div className="header__toolbar">
            <div className="hide--mobile">
                <SocialMedia className="header__social-media"/>
            </div>
            <div className="header__logo">
                <Link to="/">
                    <Logo>holidaze</Logo>
                </Link>
            </div>
        
            <div className="header__icon">
                <button onClick={openMenu}>
                    <FaBars color="white" size="2em"/>
                </button>
            </div>

            {nav ? (
                <nav className="header__nav">
                    <div className="nav__toolbar">
                        <div className="hide--mobile"></div>
                        <div className="nav__logo">
                            <Link to="/">
                            <Logo>holidaze</Logo>
                            </Link>
                        </div>
                        <div className="nav__icon">
                            <button onClick={closeMenu}>
                                <FaTimes color="white" size="2em" />
                            </button>
                        </div>
                    </div>
                    <div className="nav__links">
                        <Link to="/">Home</Link>
                        <Link to="/accommodations">Accommodations</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/login">
                            <Button className="login-btn" title="Log In" />
                        </Link>
                    </div>
                </nav>
            ) : (
                null
            )}
        </div>

        </>
    );
}
 
export default HeaderNav;