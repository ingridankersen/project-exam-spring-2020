import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './../Logo';
import SocialMedia from './../SocialMedia';
import Paragraph from './../Paragraph';

function Footer() {
    return(
        <footer>
            <SocialMedia className="footer__social-media" />
            <Link to="/">
                <Logo>holidaze</Logo>
            </Link>

            <div className="footer__trademark">
            <Paragraph><b>© 2020 Holidaze</b></Paragraph>
            <Paragraph><i>All rights reserved</i></Paragraph>
            </div>
        </footer>
    )
}

export default Footer; 