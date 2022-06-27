import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo/logo-cube/creartor-logo-cube-16.png"

function Navigation() {
  function scrollToTop() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }
  return (
    <div className="navigation">
      <ul>
        <NavLink onClick={scrollToTop} to="/accueil-creator"><img className="logo" src={logo} alt="" /></NavLink>
      </ul>
    </div>
  );
}

export default Navigation;