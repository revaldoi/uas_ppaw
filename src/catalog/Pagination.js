import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery";
import "popper.js";

function Pagination() {
  return (
    <div>
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="d-block d-sm-none">
        <hr className="hrbot" />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="form-inline m-4 my-lg-0">
              {/* <!-- PAGE LIST PC --> */}
              <select className="d-none d-sm-block custom-selectd mb-0 bott">
                <option value="">
                  Show 15 {/* <i className="fa fa-angle-down"></i> */}
                </option>
                <option value="date_desc">Show 30</option>
                <option value="date_asc">Show 50</option>
              </select>
              {/* <!-- END PAGE LIST PC --> */}

              {/* <!--PAGE LIST MOBILE --> */}
              <select className="d-block d-sm-none custom-selectm mb-0">
                <option value="">Show 15</option>
                <option value="date_desc">Show 30</option>
                <option value="date_asc">Show 50</option>
              </select>
              {/* <!-- END PAGE LIST MOBILE --> */}

              <div className="d-none d-sm-block p-3 text-right bott">
                Ditampilkan 1-20 dari 40 hasil
              </div>
            </div>
          </div>
          <div className="col-6">
            {/* <!-- PAGINATION PC --> */}
            <div className="d-none d-sm-block m-4 my-lg-0">
              <ul className="list-group list-group-horizontal mt-2 justify-content-end">
                <li className="list-group-item bg-info text-white bott">1</li>
                <li className="list-group-item bott">2</li>
                <li className="list-group-item bott">3</li>
                <li className="list-group-item next bott">
                  <i className="fa fa-angle-double-right"></i>
                </li>
              </ul>
            </div>
            {/* <!-- END PAGINATION PC --> */}

            {/* <!-- PAGINATION MOBILE --> */}
            <div className="d-block d-sm-none m-4 my-lg-0">
              <ul className="list-group list-group-horizontal mt-2 justify-content-end">
                <li className="list-group-item m">1</li>
                <li className="list-group-item r">dari</li>
                <li className="list-group-item r">3</li>
                <li className="list-group-item nextm">
                  <i className="fa fa-angle-right"></i>
                </li>
              </ul>
            </div>
            {/* <!-- END PAGINATION MOBILE --> */}
          </div>
        </div>
        <div className="d-block d-sm-none p-3 text-right tampil">
          Ditampilkan 1-20 dari 40 hasil
        </div>
      </div>
    </div>
  );
}

export default Pagination;
