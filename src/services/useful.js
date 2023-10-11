export const check = (type, value) => {
  switch (type) {

    case "name":
    case "city":
    case "country":
    case "surname":
    case "birth":
        if (value === "") {
            return `El campo ${type} no debe de estar vacio`;
          } else {
            return "";
          }


    case "email":
    case "e-mail":
    case "correo":
      if (value === "") {
        return "El campo e-mail no debe de estar vacío";
      } else {
        return "";
      }

    case "password":
    case "password2":
    case "contraseña2":
    case "contraseña":
      if (value.length < 8) {
        return "El password debe de contener 8 caracteres";
      } else {
        return "";
      }

    default:
      console.log("Unknown data received to check...");
  }
};
