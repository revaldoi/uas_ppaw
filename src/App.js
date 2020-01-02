import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery";
import "popper.js";
import Home from "./home/Home";
import Catalog from "./catalog/Catalog";
import Detail from "./detail/Detail";

function App() {
  return (
    <Catalog />
    // <HashRouter>
    //     <div className="container-fluid text-center bg-dark">
    //         <NavLink className="btn btn-danger" to="/Home">Home</NavLink>
    //         <NavLink className="btn btn-primary" to="/catalog">Catalog</NavLink>
    //         <NavLink className="btn btn-danger" to="/Detail">Detail</NavLink>
    //     </div>
    //     <Route exact="exact" path="/home" component={Home}/>
    //     <Route exact="exact" path="/catalog" component={Catalog}/>
    //     <Route exact="exact" path="/detail" component={Detail}/>
    // </HashRouter>
  );
}

export default App;
