  /*funciones como arrow functions*/
  const consultarDinero = (Consulta)=>console.log(`El dinero que tienes en la cuenta en este momento es :${Consulta}`)
  

 const retirarDinero = (dineroActual,dineroRetiro) =>{
    if(dineroRetiro>0){
      if(dineroActual>= dineroRetiro)
      {
              let valor=dineroEnCuenta-dineroRetiro
              return valor
      }else{
        console.log("no tienes dinero suficiente")
      }
    }else{
      console.log("Numero mayor que 0 por favor")
    }
   
  }

const depositarDinero =(dineroActual,dineroDepositar)=>dineroDepositar>0 ? dineroActual+dineroDepositar : console.log('No se realizo deposito')
  
// const transferencia = (dineroActual,cantidad,cuenta="1234") => {
//      cantidad > 0 ? 
//         cuenta===1234 ?
//          dineroActual-cantidad : console.log("no se puede hacer la transferencia") 
// }
 
        




let dineroEnCuenta=2000
/*Saldo inicial*/
consultarDinero(dineroEnCuenta) 
/* 1. Depositar 2000*/ 
dineroEnCuenta=depositarDinero(dineroEnCuenta,2000)
/* 2. Retirar 450*/ 
dineroEnCuenta=retirarDinero(dineroEnCuenta,450)
/* 3. Consultar saldo*/ 
consultarDinero(dineroEnCuenta)
/* 4. Retirar 400*/ 
dineroEnCuenta=retirarDinero(dineroEnCuenta,400)
/*5. Consultar saldo*/
consultarDinero(dineroEnCuenta)
/*6. Transferencia */
transferencia(dineroEnCuenta,2000)
/*7. Consultar saldo*/
consultarDinero(dineroEnCuenta)