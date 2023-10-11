import { CustomInput } from "../../common/CustomInput/CustomInput";
import { check } from "../../services/useful";
import "./Login.css";

import React, { useState, useEffect } from "react";

export const Login = () => {
  //Genero el estado encargado de manejar las credenciales de usuario
  const [credenciales, setCredenciales] = useState({
    email: "",
    password: ""
  });

  const [credencialesError, setCredencialesError] = useState({
    emailError: "",
    passwordError: ""
  })

  const inputHandler = (e) => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const errorHandler = (e) => {

    let error = check(e.target.name, e.target.value);

    setCredencialesError((prevState) => ({
        ...prevState,
        [e.target.name + 'Error']: error
      }));

  }

//   useEffect(() => {
//     console.log("las credenciales valen......", credenciales);
//   }, [credenciales]);

  return (
    <div className="loginDesign">
      <CustomInput
        design={
            credencialesError.emailError === ""
            ? "normalDesign"
            : "errorDesign"
        }
        type={"email"}
        name={"email"}
        placehoder={""}
        handlerFunction={inputHandler}
        errorFunction={errorHandler}
      />
      {credencialesError.emailError}
      <CustomInput
        design={
            credencialesError.passwordError === ""
            ? "normalDesign"
            : "errorDesign"
        }
        type={"password"}
        name={"password"}
        placehoder={""}
        handlerFunction={inputHandler}
        errorFunction={errorHandler}
      />
      {credencialesError.passwordError}
    </div>
  );
};
