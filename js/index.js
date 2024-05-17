let ingreseNombre = prompt("ingrese su nombre!")
alert("bienvenido!" + " " + ingreseNombre);



let edad = parseInt(prompt("ingrese su edad por favor!"));
while (isNaN(edad)) {
    edad = parseInt(prompt("ingrese su edad por favor!"));

};

if (edad >= 18) {
    alert("usted es mayor de edad y esta habilitado a comprar en esta pagina!")
    let bebida = (a) => { return a * 8000 }
    let almacen = (a) => { return a * 2500 }
    let limpieza = (a) => { return a * 5000 }

    let ingresarBebidas = parseInt(prompt("ingrese la cantidad de ofertas de bebidas que va a comprar"));
    let ingresarAlmacen = parseInt(prompt("ingrese la cantidad de ofertas del almacen que va a comprar"));
    let ingresarLimpieza = parseInt(prompt("ingrese la cantidad de ofertas de limpieza que va a comprar "));

    let resultado = bebida(ingresarBebidas) + almacen(ingresarAlmacen) + limpieza(ingresarLimpieza);
    alert("su total a pagar es:$" + resultado);

    let cuotas = parseInt(prompt("ingrese 3, si desea abonar en 3 cuotas.Ingrese 6, si desea abonar en 6 cuotas."))
    let tresCuotas = (a) => { return a / 3 };
    let seisCuotas = (a) => { return a / 6 };
    if (cuotas === 3) {
        let resultadoTresCuotas = tresCuotas(resultado)
        alert("su total a pagar por mes es de:$" + parseInt(resultadoTresCuotas));

    } else if (cuotas === 6) {

        let resultadoSeisCuotas = seisCuotas(resultado)
        alert("su total a pagar por mes es de:$" + parseInt(resultadoSeisCuotas));

    } else {
        alert("usted no eligio cuotas, por lo tanto su total a pagar es:$" + resultado)
    };

    alert("Gracias por su compra en SUPEROFERTAS-CORDOBA!Vuelva pronto.");

} else {
    alert("usted es menor de edad y por lo tanto no puede ingresar a comprar en este pagina!")
}










