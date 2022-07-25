//Simulador de un préstamo

function CalculoTasa(cuotas){
 
    if (cuotas <= 12){
        tasa = 30;
    }
    else if ((cuotas > 12) && (cuotas <= 48)){
                tasa = 35;
            }
            else if ((cuotas > 48) && (cuotas <= 72)){
                tasa = 40;
            }
    else{
        tasa = 45;
    }
    return(tasa);
}

function CalculoInteres (capital, tasa, cuotas){
    let interes;
    interes = ((capital * (tasa / 100) * cuotas) / (100 * 12));
    return (interes);
}

function CalculoIVA(interes){
    let iva;
    iva = interes * 0.21;
    return (iva);
}

function CalculoTotal(capital, interes, iva)
{
    let total;
    total = capital + interes + iva;
    return(total);
}

let capital = console.log (parseInt(prompt("Ingrese el capital a solicitar:"))); 
let cuotas = console.log (parseInt(prompt("Ingrese la cantidad de cuotas (hasta 96):"))); 

let tasa = CalculoTasa(cuotas);
console.log(tasa);

let interes = CalculoInteres(capital, tasa, cuotas);
console.log(interes);

let iva = CalculoIVA(interes);
console.log(iva);

let total = CalculoTotal(capital, interes, iva);
console.log(total);