/**
 * Convertidor de temperatura
 * Generar una función, que reciba (grados, entrada, salída ) 
 * Default es ºC a ºF
 * p.ej. (100,c,f) -> 100 ºC a ºF -> Default
 * p.ej. (100,f,c) -> 100 ºF a ºC
 * C to F -> (celsius*9)/5 + 32
 * F to C -> ((fahrenheit - 32)*5)/9
 *
 */

// function convertidorTemperatura (grados,entrada=1,salida=2)
// {
//   let resultado
//   if(entrada===1 && salida===2){ /*de C a F*/ 
//     // console.log("Primer if")
//     resultado=(grados*9)/5 + 32
//     return resultado
//   }
//   if (entrada===2 && salida===1) /*de F a C*/
//   { 
//     // console.log("segundo if")
//     resultado=((grados - 32)*5)/9
//     return resultado
//   }
 
// }

// let valor=convertidorTemperatura(60)
// console.log("tu resultado es:"+valor)


/**
 * Ejercicio
 * Simular el funcionamiento de un cajero
 * 
 * considerar estas acciones
 * 1. Retiro de efectivo (cantidad)
 * 2. Depósito (cantidad)
 * 3. Consulta de saldo () 
 * 4. Traspasar a la cuenta 1234 $500 (cuenta, cantidad)
 * 
 * Datos iniciales
 * Saldo inicial: $2000
 * Consultas de saldo = 2000
 * Depósitos = 0
 * Retiros = 0
 * 
 * 
 * Pasos a ejecutar
 * 1. Depositar 2000
 * 2. Retirar 450
 * 3. Consultar saldo
 * 4. Retirar 400
 * 5. Consultar saldo
 * 
 */

  // function consultarDinero(Consulta){
  //   // console.log("El dinero que tienes en la cuenta en este momento es: "+Consulta)
  //   console.log(`El dinero que tienes en la cuenta en este momento es :${Consulta}`)
  // }

  // function retirarDinero(dineroActual,dineroRetiro){
  //   if(dineroRetiro>0){
  //     if(dineroActual>= dineroRetiro)
  //     {
  //             let valor=dineroEnCuenta-dineroRetiro
  //             return valor
  //     }else{
  //       console.log("no tienes dinero suficiente")
  //     }
  //   }else{
  //     console.log("Numero mayor que 0 por favor")
  //   }
   
  // }

  // function depositarDinero(dineroActual,dineroDepositar){
  //   if(dineroDepositar>0)
  //   {
  //      valor=dineroActual+dineroDepositar
  //     return valor
  //   }
   
  // }

  // function transferencia(dineroActual,cantidad,cuenta="1234"){
  //     if(cantidad > 0){
  //         if(cuenta===1234){
  //       valor=dineroActual+cantidad
  //       return valor
  //     }else{
  //       console.log("no se puede hacer la transferencia")
  //     }
  //  }
  // }


//   /*funciones como expresiones o variables*/
//   const consultarDinero= function (Consulta){
//     // console.log("El dinero que tienes en la cuenta en este momento es: "+Consulta)
//     console.log(`El dinero que tienes en la cuenta en este momento es :${Consulta}`)
//   }

//  const retirarDinero = function (dineroActual,dineroRetiro){
//     if(dineroRetiro>0){
//       if(dineroActual>= dineroRetiro)
//       {
//               let valor=dineroEnCuenta-dineroRetiro
//               return valor
//       }else{
//         console.log("no tienes dinero suficiente")
//       }
//     }else{
//       console.log("Numero mayor que 0 por favor")
//     }
   
//   }

//  const depositarDinero = function (dineroActual,dineroDepositar){
//     if(dineroDepositar>0)
//     {
//        valor=dineroActual+dineroDepositar
//       return valor
//     }
   
//   }

//    const transferencia =function (dineroActual,cantidad,cuenta="1234"){
//       if(cantidad > 0){
//           if(cuenta===1234){
//         valor=dineroActual+cantidad
//         return valor
//       }else{
//         console.log("no se puede hacer la transferencia")
//       }
//    }
//   }


