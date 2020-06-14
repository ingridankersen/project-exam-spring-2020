import React from 'react';
import Header from './../base/header/Header';
import TopAccommodations from './TopAccommodations';
import Reviews from './Reviews';
import AboutBergen from './../home/AboutBergen';
import Footer from './../base/footer/Footer';

function Home() {
    return(
        <div className="page-container">
        <div className="content-container">
        <Header />
        <main>
        <TopAccommodations />
        <Reviews />
        <AboutBergen />
        </main>
        </div>
        <Footer />
        </div>
    )
}

export default Home;