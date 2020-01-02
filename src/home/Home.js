import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery';
import 'popper.js';
import './css/home.css';
<<<<<<< HEAD
import Banner from './Banner';

function Home() {
    return (
        <div>
            {/* <!-- BANNER : REVALDO --> */}
            <Banner />
        </div >
=======
import HomeProductBanner from './home-product/Banner';
import HomeProductTerlaris from './home-product/Terlaris';
import HomeProductTermurah from './home-product/Termurah';

function Home() {
    return (
        <div className="App">
            <div className="container">
                <HomeProductBanner/>
            </div>
            <div className="container">
	            <HomeProductTerlaris/>
            </div>
            <div className="container">
	            <HomeProductTermurah/>
            </div>
        </div>
>>>>>>> e95d53360022176e1180ba670c7846d60f970ea0
    );
}

export default Home;
