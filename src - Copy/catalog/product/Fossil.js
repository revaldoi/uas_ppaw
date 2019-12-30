/* eslint-disable */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery';
import 'popper.js';
// import '@fortawesome/fontawesome-svg-core'; import
// '@fortawesome/free-solid-svg-icons'; import '@fortawesome/react-fontawesome';
import ProductImage from '../img/katalog-4.png';
import '../css/catalog.css';

function Fossil() {
    return (
        <div className="App">
            <link
                href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                rel="stylesheet"/>
            <div class="card">
                <div class="text-center">
                    <a href="detail.html">
                        <img class="card-img-top catalog" src={ProductImage} alt="Fossil" />
                    </a>
                </div>
                <div class="card-body">
                    <a href="detail.html" class="product-name">Fossil - Jam Tangan Pria Fossil FS4991</a>
                    <h3 class="price">Rp 1,230,000</h3>
                    <s class="was">Rp 2,735,000</s>
                    <div class="rating-div">
                        <span class="rating">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star-half-o" aria-hidden="true"></i>
                            <i class="fa fa-star-o" aria-hidden="true"></i>
                            <a>
                                10 ulasan</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fossil;
