let dineroEnCuenta = 2000;

/*funciones como arrow functions*/
const consultarDinero = () =>
  console.log(
    `El dinero que tienes en la cuenta en este momento es :${dineroEnCuenta}`
  );

const retirarDinero = (dineroActual, dineroRetiro) => {
  if (dineroRetiro > 0) {
    if (dineroActual >= dineroRetiro) {
      let valor = dineroEnCuenta - dineroRetiro;
      return valor;
    } else {
      console.log("no tienes dinero suficiente");
    }
  } else {
    console.log("Numero mayor que 0 por favor");
  }
};

const depositarDinero = (dineroActual, dineroDepositar) =>
  dineroDepositar > 0
    ? dineroActual + dineroDepositar
    : console.log("No se realizo deposito");

const transferencia = (saldo, cantidad, cuenta = "1234") => {
  return cantidad > 0
    ? cuenta === "1234"
      ? saldo - cantidad
      : console.log("cuenta invalida")
    : console.log("Dame una cantidad valida...");
};
// const transferencia = (saldo, cantidad, cuenta = "1234") =>
//      cantidad > 0
//       ? cuenta === "1234"
//         ? saldo - cantidad
//         : console.log("cuenta invalida")
//       : console.log("Dame una cantidad valida...");
//

/*Saldo inicial*/
consultarDinero(dineroEnCuenta);
/* 1. Depositar 2000*/
dineroEnCuenta = depositarDinero(dineroEnCuenta, 2000);
/* 2. Retirar 450*/
dineroEnCuenta = retirarDinero(dineroEnCuenta, 450);
/* 3. Consultar saldo*/
consultarDinero(dineroEnCuenta);
/* 4. Retirar 400*/
dineroEnCuenta = retirarDinero(dineroEnCuenta, 400);
/*5. Consultar saldo*/
consultarDinero(dineroEnCuenta);
/*6. Transferencia */
dineroEnCuenta = transferencia(dineroEnCuenta, 200);
/*7. Consultar saldo*/
consultarDinero(dineroEnCuenta);
