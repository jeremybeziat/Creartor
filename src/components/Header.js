import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { useState } from "react";

import useDocumentScrollThrottled from "../services/useDocumentScrollThrottled";

function Header() {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 30;
  const TIMEOUT_DELAY = 50;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = shouldShowShadow ? "shadow" : "";
  const hiddenStyle = shouldHideHeader ? "hidden" : "";

  return (
    <header className={`header ${shadowStyle} ${hiddenStyle}`}>
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
