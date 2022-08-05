const porGalon = 40;

function aVerSiLlego(galon, proxEstacion) {
  const tanque = galon * porGalon;
  let resto = tanque - proxEstacion;
  console.log(resto >= 0);
}

function aVerSiLlegoPlus(galon, proxEstacion) {
  const tanque = galon * porGalon;
  let resto = tanque - proxEstacion;

  if (resto < 0) {
    console.log(`no llegás, te faltan ${resto} en el tanque`);
  } else if (resto <= 0.4) {
    console.log(`casi no llegás, tenés ${resto} en el tanque`);
  } else if (resto <= 1) {
    console.log(`llegaste justito, te sobraron ${resto} en el tanque`);
  } else if (resto >= 1.1) {
    console.log(`llegaste tranqui, todavía te quedan ${resto} en el tanque`);
  }
}
aVerSiLlego(2, 80);
aVerSiLlego(3,500)

aVerSiLlegoPlus(4, 40);
aVerSiLlegoPlus(2, 80);
aVerSiLlegoPlus(0.5, 40);
aVerSiLlegoPlus(1, 25);
aVerSiLlegoPlus(1, 39);