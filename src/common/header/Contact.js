import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
  return (
    <div class="row d-none d-md-block margin-0 padding-0">
      <div class="col-md-12 pt-0 mb-2">
        <div class="container">
          <div class="row ml-3">
            <div class="col-md-5 mt-1 no-mp">
              <span class="text-white ft-13">
                <i class="fas fa-envelope text-white"></i>
                admin@plasa.com
              </span>
              <span class="text-white ml-1 ft-13">
                <i class="fas fa-phone-alt text-white"></i>
                (+01) 23456789 - (+01) 23456789
              </span>
            </div>
            <div class="col-md-7 mt-1 no-mp t-right">
              <span class="text-white mt-2 ml-2 mr-2 ft-13">
                <i class="fas fa-bell text-white"></i>
                notifikasi
              </span>
              <span class="text-white mt-2 ml-2 mr-2 ft-13">
                <i class="fas fa-question-circle text-white"></i>
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
          </div>
        </div>
      </div>
    </div>
  );
}
