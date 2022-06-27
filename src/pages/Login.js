import React from "react";
import { useState, useCallback, useEffect } from "react";

function Login() {
  // const {
  //   handleSubmit,
  //   register,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (values) => console.log(values);
  function validate(field) {

    // Check if email
    if (/\@/.test(field)) {
      // Validate email address
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field)) {
        return true;
      }
      console.log("Pseudo ou e-mail incorrect !");
      return false;
    } else {
      // check if username
      if (/a-zA-Z0-9/.test(field)) {
        //Validate username
        if (/[^":*?<>^$@|/](A-Za-z0-9){6,16}/) return true;
        console.log("Pseudo ou e-mail incorrect !");
        return false; 
      }
    }
  }
  // onSubmit={handleSubmit(onSubmit)}
  return (
    <main className="login">
      <form className="formulaire">
        <h1 className="title_connexion">Connexion</h1>
        <div className="champ">
          <p className="text_connexion">Pseudo ou e-mail</p>
          {/* <div className="error">{errors.email && errors.email.message}</div> */}
          <input
            id="creator"
            type="text"
            className="form-control"
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
          <input type="password" className="form-control2" />
        </div>
        <input type="submit" className="btn_connection" value="Connexion" />
      </form>
    </main>
  );
}
export default Login;
