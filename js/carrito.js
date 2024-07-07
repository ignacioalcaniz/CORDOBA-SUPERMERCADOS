let body = document.getElementsByTagName("body")
body[0].style.backgroundColor = `black`
let header = document.getElementById("headerCarrito")
let h1 = document.createElement("h1");
h1.innerText = `SUPEROFERTAS-CORDOBA`
h1.classList = `d-flex justify-content-center `
header.appendChild(h1)
header.style.borderBottom = `2px solid white`
header.style.backgroundColor = `red`
let h2 = document.createElement("h2");
h2.innerText = `Carrito de compras:`
h2.classList = `d-flex justify-content-center`
header.appendChild(h2)
let main = document.getElementById("mainCarrito");
main.style.backgroundColor = `black`
let sectionMain = document.createElement("section");
main.appendChild(sectionMain);
let h3 = document.createElement("h3");
h3.innerText = `Ofertas agregadas al carrito:`
h3.style.textAlign = `center`
h3.style.color = `white`
sectionMain.appendChild(h3)
let divMain = document.createElement("div")
divMain.style.border = `2px solid red`;
divMain.style.borderRadius = ".625rem";
divMain.style.backgroundColor = `white`;
divMain.style.textAlign = `center`
divMain.style.paddingTop = `10px`
divMain.style.margin = `10px`

sectionMain.appendChild(divMain);
sectionMain.style.margin = `10px`
sectionMain.style.fontFamily = `  Varela Round`, `sans-serif`


let pagar = document.createElement("div")
pagar.style.border = `2px solid black`;
pagar.style.borderRadius = ".625rem";
pagar.style.width = `25%`
pagar.style.margin = `auto`


const ofertasAlmacenadas = [];

for (let i = 0; i < localStorage.length; i++) {
  const clave = localStorage.key(i);
  if (clave.startsWith("oferta-")) {
    const oferta = JSON.parse(localStorage.getItem(clave));
    ofertasAlmacenadas.push(oferta);
  }
}

let total = 0;
for (const oferta of ofertasAlmacenadas) {
  let precioOferta = oferta.precio
  total += precioOferta

}



let tieneCantidadSuficiente = false;
for (const oferta of ofertasAlmacenadas) {
  if (oferta.cantidad && oferta.cantidad >= 5) {
    tieneCantidadSuficiente = true;
    break;
  }
}

function checkEmptyCart() {
  if (ofertasAlmacenadas.length === 0) {
    divMain.innerHTML = "";
    let p = document.createElement("p");
    p.innerText = `No hay ofertas en el carrito`;
    divMain.appendChild(p);
  }
}


const descuento = () => {
  return new Promise((resolve, reject) => {
    if (ofertasAlmacenadas.length >= 5 || tieneCantidadSuficiente) {
      resolve("promesa cumplida");
    } else {
      reject('Promesa rechazada');
    }
  })
}

let precioConDescuento = total - (total * 0.1);
let sacarDescuentoTotal = precioConDescuento + (total * 0.1)

function aplicarDescuentoSiCorresponde() {
  descuento(ofertasAlmacenadas, tieneCantidadSuficiente)
    .then(() => {
      pagar.innerText = `Total a pagar con descuento del 10%: ${precioConDescuento}`;

    })
    .catch(() => {
      pagar.innerText = `Total a pagar sin descuento: ${sacarDescuentoTotal}`;
    });
}




if (localStorage.length > 0) {

  for (const oferta of ofertasAlmacenadas) {

    let parrafo = document.createElement("p")
    parrafo.innerText = `ID:${oferta.id} | NOMBRE:${oferta.nombre} | DETALLE:${oferta.descripcion} | SUPERMERCADO:${oferta.supermercado} | PRECIO:$${oferta.precio} | CANTIDAD:${oferta.cantidad}`;
    parrafo.style.border = `2px solid black`;
    parrafo.style.fontSize = `15px`
    parrafo.style.borderRadius = ".625rem";
    parrafo.style.padding = `8px`
    parrafo.style.marginLeft = `10px`
    parrafo.style.marginRight = `10px`
    let botonEliminar = document.createElement("button");
    botonEliminar.innerText = `eliminar`;
    botonEliminar.style.backgroundColor = `red`
    botonEliminar.style.borderRadius = ".625rem";
    botonEliminar.style.marginLeft = `30px`
    botonEliminar.className = `botonEliminar`
    parrafo.onmouseover = () => {
      parrafo.style.backgroundColor = `black`
      botonEliminar.style.backgroundColor = `white`
      parrafo.style.color = `red`


    }
    parrafo.onmouseout = () => {
      parrafo.style.backgroundColor = `white`
      botonEliminar.style.backgroundColor = `red`
      parrafo.style.color = `black`
    }


    botonEliminar.onclick = () => {


      let inputCantidad = document.createElement("input");
      inputCantidad.setAttribute("type", "number");
      inputCantidad.setAttribute("placeholder", "Ingrese cantidad a eliminar");
      inputCantidad.style.margin = `10px`
      inputCantidad.style.width = `19%`
      inputCantidad.style.border = `2px solid red`
      inputCantidad.style.borderRadius = `5px`

      let confirmarBoton = document.createElement("button");
      confirmarBoton.innerText = "Confirmar ";
      confirmarBoton.style.borderRadius = ".625rem";
      confirmarBoton.style.backgroundColor = `red`


      parrafo.appendChild(inputCantidad);
      parrafo.appendChild(confirmarBoton)

      confirmarBoton.onclick = () => {

        let precioPorUnidad = oferta.precio / oferta.cantidad
        let cantidad = parseInt(inputCantidad.value);

        if (cantidad < oferta.cantidad) {
          Swal.fire({
            title: `Esta seguro que quiere eliminar ${inputCantidad.value} ofertas con ID ${oferta.id} del carrito?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "eliminar",
            color: "red",
            background: "black",
          }).then((result) => {
            if (result.isConfirmed) {
              oferta.cantidad -= cantidad;
              oferta.precio = oferta.cantidad * precioPorUnidad;
              parrafo.innerText = `ID:${oferta.id} | NOMBRE:${oferta.nombre} | DETALLE:${oferta.descripcion} | SUPERMERCADO:${oferta.supermercado} | PRECIO:$${oferta.precio} | CANTIDAD:${oferta.cantidad}`;
              total -= precioPorUnidad * cantidad;
              localStorage.setItem(`oferta-${oferta.id}`, JSON.stringify(oferta));
              Swal.fire({
                title: "Eliminado",
                text: `Se eliminaron ${inputCantidad.value} ofertas con el  ID ${oferta.id} del carrito con exito!`,
                icon: "success",
                color: "red",
                background: "black",
              })
              pagar.innerText = `Total a pagar:${total}`
              parrafo.appendChild(botonEliminar);
              checkEmptyCart();

            }
          });

        }
        else if (cantidad === oferta.cantidad) {
          Swal.fire({
            title: `Esta seguro que quiere eliminar todas las  ofertas con ID ${oferta.id} del carrito?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "eliminar",
            color: "red",
            background: "black",
          }).then((result) => {
            if (result.isConfirmed) {
              parrafo.style.display = `none`
              total -= precioPorUnidad * cantidad
              pagar.innerText = `Total a pagar:${total}`
              localStorage.removeItem(`oferta-${oferta.id}`);
              let index = ofertasAlmacenadas.findIndex(item => item.id === oferta.id)
              if (index !== -1) {
                ofertasAlmacenadas.splice(index, 1);
              }
              Swal.fire({
                title: "Eliminado",
                text: `Se eliminaron todas las ofertas con el  ID ${oferta.id} del carrito con exito!`,
                icon: "success",
                color: "red",
                background: "black",
              });
              checkEmptyCart();
            }
          });
        }
        else if (cantidad > oferta.cantidad) {
          Swal.fire({
            icon: "error",
            text: "Usted selecciono una cantidad mayor a la comprada!",
            color: "red",
            background: "black"

          });
        }
        else {
          Swal.fire({
            icon: "error",
            text: "Usted debe seleccionar una cantidad!",
            color: "red",
            background: "black"

          });
        }
      }

    }
    parrafo.appendChild(botonEliminar);
    divMain.appendChild(parrafo);


  }

  aplicarDescuentoSiCorresponde();
  divMain.appendChild(pagar)



  let botonFinalizarCompra = document.createElement("button");
  botonFinalizarCompra.innerText = `Finalizar compra`;
  botonFinalizarCompra.style.borderRadius = ".625rem";
  botonFinalizarCompra.style.backgroundColor = `red`
  botonFinalizarCompra.style.margin = `auto`
  botonFinalizarCompra.style.marginBottom = `5px`
  botonFinalizarCompra.style.marginTop = `10px`
  botonFinalizarCompra.className = `botonFinalizarCompra`
  divMain.appendChild(botonFinalizarCompra)

  botonFinalizarCompra.onclick = () => {
    localStorage.clear();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Compra finalizada con exito!",
      color: "red",
      background: "black",
      text: "Gracias por comprar en SUPEROFERTAS-CORDOBA!",
      showConfirmButton: false,
      timer: 2000
    });

    divMain.innerHTML = "";
    let p = document.createElement("p");
    p.innerText = `No hay ofertas en el carrito`
    divMain.appendChild(p)
  }
}
else {
  let p = document.createElement("p");
  p.innerText = `No hay ofertas en el carrito`
  divMain.appendChild(p)

}














