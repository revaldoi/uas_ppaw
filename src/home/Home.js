import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery';
import 'popper.js';
import './css/home.css';
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
    );
}

export default Home;