/* eslint-disable */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery';
import 'popper.js';
import './css/catalog.css';
import ProductGrid from './Grid';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Pagination from './Pagination';

function Catalog() {
    return (
        <div className="container p-3">
            <div className="d-none d-sm-block">
                <a href="#" className="text-dark">Home</a>
                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                <a href="#" className="text-dark font-weight-bold active">Katalog</a>
            </div>
            <div className="row">
                <div id="sidebar" className="col-md-3 hide">
                    <Sidebar/>
                </div>
                <div className="col-md-9">
                    <Navbar />
                    <div className="p-3 text-right">Ditampilkan 1-20 dari 40 hasil</div>
                    <ProductGrid />
                    <Pagination />
                </div>
            </div>
        </div>
    );
}

export default Catalog;
