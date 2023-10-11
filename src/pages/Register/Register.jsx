import { CustomInput } from "../../common/CustomInput/CustomInput";
import "./Register.css";
import { check } from "../../services/useful";
import { useState } from 'react';
// import { NavigateButton } from "../../common/NavigateButton/NavigateButton";

export const Register = () => {

  const [credenciales, setCredenciales] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    password2: "",
    birth: "",
    city: "",
    country: ""
  });
  
  const [credencialesError, setCredencialesError] = useState({
    nameError: "",
    surnameError: "",
    emailError: "",
    passwordError: "",
    password2Error: "",
    birthError: "",
    cityError: "",
    countryError: ""
  });

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


  return (
    <div className="registerDesign">
      {/* <NavigateButton 
                path={"/Login"}
                name={"Login"}
            />
            <NavigateButton 
                path={"/"}
                name={"Home"}
            /> */}
      <CustomInput
        design={
          credencialesError.nameError === "" ? "normalDesign" : "errorDesign"
        }
        type={"text"}
        name={"name"}
        placehoder={""}
        handlerFunction={inputHandler}
        errorFunction={errorHandler}
      />
      {credencialesError.nameError}
      <CustomInput
        design={
          credencialesError.surnameError === "" ? "normalDesign" : "errorDesign"
        }
        type={"text"}
        name={"surname"}
        placehoder={""}
        handlerFunction={inputHandler}
        errorFunction={errorHandler}
      />
      {credencialesError.surnameError}
      <CustomInput
        design={
          credencialesError.emailError === "" ? "normalDesign" : "errorDesign"
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
          credencialesError.passwordError === "" ? "normalDesign" : "errorDesign"
        }
        type={"password"}
        name={"password"}
        placehoder={""}
        handlerFunction={inputHandler}
        errorFunction={errorHandler}
      />
      {credencialesError.passwordError}
      <CustomInput
        design={
          credencialesError.password2Error === "" ? "normalDesign" : "errorDesign"
        }
        type={"password"}
        name={"password2"}
        placehoder={""}
        handlerFunction={inputHandler}
        errorFunction={errorHandler}
      />
      {credencialesError.password2Error}
      <CustomInput
        design={
          credencialesError.birthError === "" ? "normalDesign" : "errorDesign"
        }
        type={"text"}
        name={"birth"}
        placehoder={""}
        handlerFunction={inputHandler}
        errorFunction={errorHandler}
      />
      {credencialesError.birthError}
      <CustomInput
        design={
          credencialesError.cityError === "" ? "normalDesign" : "errorDesign"
        }
        type={"text"}
        name={"city"}
        placehoder={""}
        handlerFunction={inputHandler}
        errorFunction={errorHandler}
      />
      {credencialesError.cityError}
      <CustomInput
        design={
          credencialesError.countryError === "" ? "normalDesign" : "errorDesign"
        }
        type={"text"}
        name={"country"}
        placehoder={""}
        handlerFunction={inputHandler}
        errorFunction={errorHandler}
      />
      {credencialesError.countryError}
    </div>
  );
};
