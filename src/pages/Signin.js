import React from "react";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <main className="login">
      <form className="formulaire">
        <h1 className="title_connexion">
          <Link className="return" to="/">
            <i className="fa-solid fa-arrow-left fa-xs"></i>
          </Link>
          Inscription
        </h1>
        <p className="redirection">
          Vous avez un compte,{" "}
          <Link className="link_connexion" to="/connexion">
            <span>
              <br />
            </span>{" "}
            connectez-vous
          </Link>
        </p>
        <div className="champ">
          <p className="text_connexion">Pseudo ou e-mail</p>
          <input id="creator" type="text" className="form_control" />

          <p className="password_connexion">Mot de passe</p>
          <input type="password" className="form_control" />
        </div>
        <input type="submit" className="btn_inscription" value="S'inscrire" />
      </form>
    </main>
  );
}

export default Signin;
