function comparando(numA, numB) {
    if (numA > 0 && numB > 0) {
      console.log(1);
    } else if (numA < 0 && numB < 0) {
      console.log(-1);
    } else if ((numA > 0 && numB < 0) || (numA < 0 && numB > 0)) {
      console.log(0);
    }
  }
  comparando(-5, 5);
  comparando(2, 6);
  comparando(-6, -2);
  comparando(2, -5);