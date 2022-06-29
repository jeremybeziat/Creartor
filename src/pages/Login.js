import React from "react";
// import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";

function Login() {
  // const {
  //   handleSubmit,
  //   register,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (values) => console.log(values);
  // function validate(field) {
  //   // Check if email
  //   if (/\@/.test(field)) {
  //     // Validate email address
  //     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field)) {
  //       return true;
  //     }
  //     console.log("Pseudo ou e-mail incorrect !");
  //     return false;
  //   } else {
  //     // check if username
  //     if (/a-zA-Z0-9/.test(field)) {
  //       //Validate username
  //       if (/[^":*?<>^$@|/](A-Za-z0-9){6,16}/) return true;
  //       console.log("Pseudo ou e-mail incorrect !");
  //       return false;
  //     }
  //   }
  // }
  // onSubmit={handleSubmit(onSubmit)}
  return (
    <main className="login">
      <form className="formulaire">
        <h1 className="title_connexion">
          <Link className="return" to="/">
            <i className="fa-solid fa-arrow-left fa-xs"></i>
          </Link>
          Connexion
        </h1>
        <p className="redirection">
          Pas encore de compte,{" "}
          <Link className="link_connexion" to="/inscription">
           <span><br /></span> inscrivez-vous
          </Link>
        </p>
        <div className="champ">
          <p className="text_connexion">Pseudo ou e-mail</p>
          {/* <div className="error">{errors.email && errors.email.message}</div> */}
          <input
            id="creator"
            type="text"
            className="form_control"
            // {...register("email", {
            // required: "Required",
            // pattern: {
            // value:
            //   /(A-Za-z0-9)|([A-Za-z])+@(?:gmail.com|outlook.com|orange.fr|hotmail.com|sfr.fr)$/,
            // message: "Pseudo ou e-mail incorrect",
            //   },
            // })}
          />

          <p className="password_connexion">Mot de passe</p>
          <input type="password" className="form_control" />
        </div>
        <input type="submit" className="btn_connection" value="Connexion" />
      </form>
    </main>
  );
}
export default Login;
