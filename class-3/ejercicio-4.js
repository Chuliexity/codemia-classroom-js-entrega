function multiplos(numero) {
    //If
    /*     if (numero % 3 === 0 && numero % 5 === 0) {
      console.log("FizzBuzz");
    } else if (numero % 3 === 0) {
      console.log("Fizz");
    } else if (numero % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(numero);
    } */
  
    //Ternario
    numero % 3 === 0 && numero % 5 === 0
      ? console.log("FizzBuzz")
      : numero % 3 === 0
      ? console.log("Fizz")
      : numero % 5 === 0
      ? console.log("Buzz")
      : console.log(numero);
  }
  
  multiplos(6);
  multiplos(45);
  multiplos(25);
  multiplos(8);