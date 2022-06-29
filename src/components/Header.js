import React from "react";
import Navigation from "./Navigation";
import {Link} from "react-router-dom";
import { useState, useCallback, useEffect } from "react";

function Header() {
  const [position, setPosition] = useState("sticky");
  const [animation, setAnimation] = useState("header animation");
  const [y, setY] = useState(window.scrollY);
  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setPosition("sticky");
        setAnimation("animation header");
      } else if (y < window.scrollY) {
        setPosition("absolute");
        setAnimation("header");
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <header className={animation} style={{ position: position }}>
      <Navigation />
      <form action="formulaire">
        <div className="nav">
          <i className="fa-solid fa-magnifying-glass fa-xs"></i>
          <input className="search2 search" type="text" />
        </div>
      </form>
      <Link className="identification" to="/connexion">
        S'identifier
      </Link>
    </header>
  );
}

export default Header;
