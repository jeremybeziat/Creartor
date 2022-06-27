import React from "react";
import NavigationCreator from "./Navigationcreator";
import Link from "./Link";
import Icon from "../assets/img/icon.png";
import { useState, useCallback, useEffect } from "react";

function HeaderCreator() {
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
      <NavigationCreator />
      <form action="formulaire">
        <div className="nav">
          <i className="fa-solid fa-magnifying-glass fa-xs"></i>
          <input className="search" type="text" />
        </div>
      </form>
      <Link
        className="publish"
        href="/publier"
        target="_blank"
        title="Publier"
      />
      <img className="icon" src={Icon} alt="icon" />
    </header>
  );
}

export default HeaderCreator;
