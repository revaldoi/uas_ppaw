import React from "react";
import Contact from "./Contact";
import SearchMid from "./SearchMid";
import SearchSm from "./SearchSm";

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark no-mp cta mb-2">
      <div class="col-md-12 no-mp margin-0 padding-0">
        <Contact />
        <SearchMid />
        <SearchSm />
      </div>
    </nav>
  );
}
