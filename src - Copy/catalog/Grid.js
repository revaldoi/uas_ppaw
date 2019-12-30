import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery';
import 'popper.js';
import './css/catalog.css';
import ProductTechno from './product/Techno';
import ProductBenardi from './product/Benardi'
import ProductXiaomi from './product/Xiaomi';
import ProductFossil from './product/Fossil';
import ProductIphone from './product/Iphone';

function Grid() {
    return (
        <div className="App">
            <div className="container-fluid">
                {/* ROW 1 */}
                <div className="row py-3">
                    <div className="col-md-3 col-6">
                        <ProductTechno/>
                    </div>
                    <div className="col-md-3 col-6">
                        <ProductXiaomi/>
                    </div>
                    <div className="col-md-3 col-6">
                        <ProductBenardi/>
                    </div>
                    <div className="col-md-3 col-6">
                        <ProductFossil/>
                    </div>
                </div>
                {/* ROW 2 */}
                <div className="row py-3">
                    <div className="col-md-3 col-6">
                        <ProductTechno/>
                    </div>
                    <div className="col-md-3 col-6">
                        <ProductIphone/>
                    </div>
                    <div className="col-md-3 col-6">
                        <ProductBenardi/>
                    </div>
                    <div className="col-md-3 col-6">
                        <ProductFossil/>
                    </div>
                </div>
                {/* ROW 3 */}
                <div className="row py-3">
                    <div className="col-md-3 col-6">
                        <ProductTechno/>
                    </div>
                    <div className="col-md-3 col-6">
                        <ProductIphone/>
                    </div>
                    <div className="col-md-3 col-6">
                        <ProductBenardi/>
                    </div>
                    <div className="col-md-3 col-6">
                        <ProductFossil/>
                    </div>
                </div>
                {/* ROW 4 */}
                <div className="row py-3">
                    <div className="col-md-3 col-6">
                        <ProductTechno/>
                    </div>
                    <div className="col-md-3 col-6">
                        <ProductIphone/>
                    </div>
                    <div className="col-md-3 col-6">
                        <ProductBenardi/>
                    </div>
                    <div className="col-md-3 col-6">
                        <ProductFossil/>
                    </div>
                </div>
                {/* ROW 5 */}
                <div className="row py-3">
                    <div className="col-md-3 col-6">
                        <ProductTechno/>
                    </div>
                    <div className="col-md-3 col-6">
                        <ProductIphone/>
                    </div>
                    <div className="col-md-3 col-6">
                        <ProductBenardi/>
                    </div>
                    <div className="col-md-3 col-6">
                        <ProductFossil/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Grid;
