function wrapAroundKms(kms) {
  kms > 99999
    ? console.log(kms - 100000)
    : kms === null ||
      kms === undefined ||
      kms === "" ||
      kms === true ||
      kms === false
    ? console.log("error")
    : kms < 0
    ? console.log("el número debe ser positivo")
    : console.log(kms);
}
wrapAroundKms(0);
wrapAroundKms(99999);
wrapAroundKms(100000);
wrapAroundKms(100001);
wrapAroundKms(null);
wrapAroundKms(-5);
wrapAroundKms(false);
wrapAroundKms(168254)
