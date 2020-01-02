import React from "react";
import Contact from "./Contact";
import SearchMid from "./SearchMid";
import SearchSm from "./SearchSm";
import "./styles.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark no-mp cta mb-2 pl-0 pr-0 pt-0">
      <div className="col-md-12 no-mp margin-0 padding-0 pl-0 pr-0">
        <Contact />
        <SearchMid />
        <SearchSm />
      </div>
    </nav>
  );
}
