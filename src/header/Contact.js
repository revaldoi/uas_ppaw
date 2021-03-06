import React from "react";

export default function Contact() {
  return (
    <div className="row d-none d-md-block ml-0 mr-0 pl-0 pr-0 pb-2">
      <div className="container pl-0 pr-0">
        <div className="col-md-12 row ml-0 mr-0 pl-0 pr-0">
          <LeftPart />
          <RightPart />
        </div>
      </div>
    </div>
  );
}

function LeftPart() {
  return (
    <div className="col-md-7 mt-1 pr-0 pt-1 pl-0 pr-0">
      <span className="text-white ft-13">
        <i className="fas fa-envelope text-white mr-1"></i>
        admin@plasa.com
      </span>
      <span className="text-white ml-2 ft-13">
        <i className="fas fa-phone-alt text-white mr-1"></i>
        (+01) 23456789 - (+01) 23456789
      </span>
    </div>
  );
}

function RightPart() {
  return (
    <div className="col-md-5 mt-1 ml-0 mr-0 pl-0 pr-0 pr-4 text-r">
      <span className="text-white mt-2 ml-2 mr-2 ft-13">
        <i className="fas fa-bell text-white mr-1"></i>
        notifikasi
      </span>
      <span className="text-white mt-2 ml-2 mr-2 ft-13">
        <i className="fas fa-question-circle text-white mr-1"></i>
        bantuan
      </span>
      <span className="mt-2 ml-2 mr-2">
        <a href="/" className="text-white ft-12">
          DAFTAR
        </a>
      </span>
      <span className="ml-2">
        <a className="btn btn-sm m0 bg-white ft-12" href="/catalog">
          MASUK
        </a>
      </span>
    </div>
  );
}
