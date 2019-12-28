/* eslint-disable */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import ProductItem from './ProductItem';
import '../css/home.css';

function Termurah() {
    return (
        <div className="App">
            <div class="container">
                <p class="more-link">Lihat semua <i class="fa fa-arrow-right"></i></p>
            </div>
            <div class="container">
                <p class="product-title">PRODUK Termurah</p>
                <ProductItem/>
            </div>
            
        </div>
    );
}

export default Termurah;
