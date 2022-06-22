import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values);
  return (
    <main className="login">
      <form className="formulaire" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title_connexion">Connexion</h1>
        <div className="champ">
          <p className="text_connexion">Pseudo ou E-mail</p>
          <div className="error">{errors.email && errors.email.message}</div>
          <input
            type="text"
            className="form-control"
            {...register("email", {
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Pseudo ou E-mail incorrect",
              },
            })}
          />

          <p className="text_connexion">Mot de passe</p>
          <input type="password" className="form-control2" />
        </div>
        <input type="submit" className="btn_connection" value="Connexion" />
      </form>
    </main>
  );
}
export default Login;
