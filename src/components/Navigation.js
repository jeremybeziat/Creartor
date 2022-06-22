import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo/logo-cube/creartor-logo-cube-16.png"

function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/accueil"><img className="logo" src={logo} alt="" /></NavLink>
      </ul>
    </div>
  );
}

export default Navigation;
