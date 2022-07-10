import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <main className="welcome">
      <h1 className="title">Bienvenue sur Créartor</h1>
      <h2 className="subtitle">
        Créartor vous permez de partager <span className="br">
        <br></br></span>vos créations en toute sécurité
      </h2>
      <div className="link">
        <Link className="connexion" to="/connexion">
          S'identifier
        </Link>
        <Link className="inscription" to="/inscription">
          S'inscrire
        </Link>
      </div>
      <Link className="enter" to="/accueil">
        Entrez sans s'identifier
      </Link>
    </main>
  );
}

export default Welcome;
