import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery';
import 'popper.js';
import './css/home.css';
import Header from './Header';

function Home() {
    return (
        <div>
            {/* <!-- HEADER : REVALDO --> */}
            <Header />
        </div >
    );
}

export default Home;
