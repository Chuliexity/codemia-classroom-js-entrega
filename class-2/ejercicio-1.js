function horasDelDiaIf(hora) {
    if (hora >= 21) {
      console.log("¡Buenas noches!");
    } else if (hora >= 19) {
      console.log("¡Buenas tardes!");
    } else if (hora >= 14) {
      console.log("¡Buen mediodía!");
    } else if (hora >= 9) {
      console.log("¡Buenos días!");
    }
  }
  horasDelDiaIf(11);
  horasDelDiaIf(14);
  horasDelDiaIf(20);
  horasDelDiaIf(23);
  
  function horasDelDiaTernario(hora) {
    console.log(
      hora >= 21
        ? "¡Buenas noches!"
        : hora >= 19
        ? "¡Buenas tardes!"
        : hora >= 14
        ? "¡Buen mediodía!"
        : hora >= 9
        ? "¡Buenos días!"
        : "Podrías seguir durmiendo"
    );
  }
  
  horasDelDiaTernario(11);
  horasDelDiaTernario(14);
  horasDelDiaTernario(20);
  horasDelDiaTernario(23);
  horasDelDiaTernario(4);