import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Link className="link_footer" to="/">
          Politique de confidentialité
        </Link>
        <Link className="link_footer" to="/">
          Mention légales
        </Link>
        <Link className="link_footer" to="/">
          Conditions générales d'utilisation
        </Link>
        <Link className="link_footer" to="/">
          Contact
        </Link>
        <Link className="link_footer" to="/">
          Aide
        </Link>
      </div>
      <p className="copyright">© Copyright Créartor 2022</p>
    </footer>
  );
}

export default Footer;
