import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo/logo-cube/creartor-logo-cube-16.png";
import logo2 from "../assets/img/logo/logo/creartor-logo.png";

function Navigation() {
  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  return (
    <div className="navigation">
      <ul>
        <NavLink onClick={scrollToTop} to="/accueil">
          <img className="logo" src={logo} alt="" />
        </NavLink>
        <NavLink onClick={scrollToTop} to="/accueil">
          <img className="logo2" src={logo2} alt="" />
        </NavLink>
      </ul>
    </div>
  );
}

export default Navigation;
