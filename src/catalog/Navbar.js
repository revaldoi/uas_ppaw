import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery';
import 'popper.js';
import './css/catalog.css';
import NavbarDesktop from './navbar/Desktop';
import NavbarMobile from './navbar/Mobile';

function Navbar() {
    return (
        <div className="App">
            <NavbarDesktop />
            <NavbarMobile />
        </div>
    );
}

export default Navbar;
