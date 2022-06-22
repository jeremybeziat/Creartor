import React from "react";
import Link from "../components/Link";

function Bienvenue() {
  return (
    <main className="welcome">
      <h1 className="title">Bienvenue sur Créartor</h1>
      <h2 className="subtitle">
        Créartor vous permez de partager 
        <br></br>vos créations en toute sécurité
      </h2>
      <div className="link">
        <Link className="connexion" href="/connexion" title="Se connecter" />
        <Link className="inscription" href="/inscription" title="S'inscrire" />
      </div>
      <Link className="enter" href="/accueil" title="Entrez sans s'identifier" />
    </main>
  );
}

export default Bienvenue;
