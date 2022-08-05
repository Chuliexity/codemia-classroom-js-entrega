function mostrarMensajeSegunEdadIf(edad) {
    if (edad >= 90) {
      console.log("¡Qué edad tan inusual, puede pasar!");
    } else if (edad >= 18) {
      console.log("¡Bienvenido, puede pasar!");
    } else {
      console.log("Lo siento, eres menor de edad");
    }
  }
  mostrarMensajeSegunEdadIf(10);
  mostrarMensajeSegunEdadIf(96);
  mostrarMensajeSegunEdadIf(42);
  
  function mostrarMensajeSegunEdadTernario(edad) {
    console.log(
      edad >= 90
        ? "¡Qué edad tan inusual, puede pasar!"
        : edad >= 18
        ? "¡Bienvenido, puede pasar!"
        : "Lo siento, eres menor de edad"
    );
  }
  
  mostrarMensajeSegunEdadTernario(10);
  mostrarMensajeSegunEdadTernario(96);
  mostrarMensajeSegunEdadTernario(42);