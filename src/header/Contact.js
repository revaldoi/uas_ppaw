import React from "react";

export default function Contact() {
  return (
    <div class="row d-none d-md-block ml-0 mr-0 pl-0 pr-0">
      <div class="container-fluid">
        <div class="col-md-12 row ml-0 mr-0 pl-0 pr-0">
          <LeftPart />
          <RightPart />
        </div>
      </div>
    </div>
  );
}

function LeftPart() {
  return (
    <div class="col-md-9 mt-1 ml-500 pr-0 pl-4">
      <span class="text-white ft-13">
        <i class="fas fa-envelope text-white mr-1"></i>
        admin@plasa.com
      </span>
      <span class="text-white ml-2 ft-13">
        <i class="fas fa-phone-alt text-white mr-1"></i>
        (+01) 23456789 - (+01) 23456789
      </span>
    </div>
  );
}

function RightPart() {
  return (
    <div class="col-md-3 mt-1 ml-0 mr-0 pl-0 pr-0">
      <span class="text-white mt-2 ml-2 mr-2 ft-13">
        <i class="fas fa-bell text-white mr-1"></i>
        notifikasi
      </span>
      <span class="text-white mt-2 ml-2 mr-2 ft-13">
        <i class="fas fa-question-circle text-white mr-1"></i>
        bantuan
      </span>
      <span class="mt-2 ml-2 mr-2">
        <a class="text-white ft-12">DAFTAR</a>
      </span>
      <span class="ml-2">
        <a class="btn btn-sm m0 bg-white ft-12" href="katalog.html">
          MASUK
        </a>
      </span>
    </div>
  );
}
