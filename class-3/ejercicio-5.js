function auth(age, acceptedTOS) {
    //If
  /*   if (age >= 13 && acceptedTOS) {
      console.log(true);
    } else if (age >= 13 && !acceptedTOS) {
      console.log("Tenés que aceptar los términos y condiciones para ingresar");
    } else if (age < 13 && acceptedTOS) {
      console.log("Tenes que ser mayor de 13 para ingresar.");
    } else if (age < 13 && !acceptedTOS) {
      console.log(
        "Tenés que ser mayor de 13 para ingresar y aceptar los términos y condiciones para ingresar."
      );
    } */
  
    //Ternario
     age >= 13 && acceptedTOS ? console.log(true) :
    age >= 13 && !acceptedTOS ? console.log("Tenés que aceptar los términos y condiciones para ingresar") :
    age < 13 && acceptedTOS ?  console.log("Tenes que ser mayor de 13 para ingresar.") :
    console.log("Tenés que ser mayor de 13 para ingresar y aceptar los términos y condiciones para ingresar.")
  
  }
  
  auth(12, false);
  auth(18, false);
  auth(25, true);
  auth(9, true);