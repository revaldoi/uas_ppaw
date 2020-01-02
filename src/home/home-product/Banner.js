/* eslint-disable */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import BannerImage from '../img/home-product-banner.png';
import BannerImage2 from '../img/home-product-banner2.png';
import '../css/home.css';

function Banner() {
    return (
        <div className="App">
           <div class="product-banner col-md-12">
                <div class="col-md-3">
                    <img class="pbanner-img " src={BannerImage}/>
                </div>
                <div class="pbanner-title col-md-6">
                    <p>PRODUK GRATIS UNTUK PENGGUNA BARU</p>
                </div>
                <div class="chevron col-md-3">
                    <span class="fa fa-chevron-circle-right"></span>
                    <img class="pbanner-img" src={BannerImage2}/>
                </div>
                
            </div> 
        </div>
    );
}

export default Banner;
