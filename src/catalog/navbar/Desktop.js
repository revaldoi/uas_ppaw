import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery';
import 'popper.js';
import '../css/catalog.css';

function Desktop() {
    return (
        <div className="App">
            <nav className="d-none d-sm-block tool navbar-expand-lg dnav">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <div className="mx-4">
                        <i className="fa fa-th" aria-hidden="true"></i>
                    </div>
                    <div className="mr-4">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </div>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <select className="custom-select mb-0 sort">
                                <option value="">Sort by popularitas</option>
                                <option value="date_desc">Sort by price</option>
                                <option value="date_asc">Sort by rating</option>
                            </select>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li>
                            <form className="form-inline show-pc">
                                <select className="custom-select pc">
                                    <option value="">Show 15</option>
                                    <option value="date_desc">Show 30</option>
                                    <option value="date_asc">Show 50</option>
                                </select>
                            </form>
                        </li>
                        <li>
                            <ul className="list-group list-group-horizontal tampil-pc justify-content-end">
                                <li className="list-group-item m">1</li>
                                <li className="list-group-item r">dari</li>
                                <li className="list-group-item r">3</li>
                                <li className="list-group-item nexth">
                                    <i className="fa fa-angle-right"></i>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Desktop;
