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


const ofertasAlmacenadas = [];

for (let i = 0; i < localStorage.length; i++) {
    const clave = localStorage.key(i);
    if (clave.startsWith("oferta-")) {
        const oferta = JSON.parse(localStorage.getItem(clave));
        ofertasAlmacenadas.push(oferta);
    }
}

for (const oferta of ofertasAlmacenadas) {
    let parrafo = document.createElement("p")
    parrafo.innerText = `ID:${oferta.id}|OFERTA:${oferta.oferta}|SUPERMERCADO:${oferta.supermercado}|PRECIO:$${oferta.precio}|CANTIDAD:${oferta.cantidad}`;
    parrafo.style.border = `2px solid black`;
    parrafo.style.borderRadius = ".625rem";
    parrafo.style.padding = `8px`
    parrafo.style.marginLeft = `10px`
    parrafo.style.marginRight = `10px`
    let botonEliminar = document.createElement("button");
    botonEliminar.innerText = `eliminar`;
    botonEliminar.style.backgroundColor = `red`
    botonEliminar.style.borderRadius = ".625rem";
    botonEliminar.style.marginLeft = `30px`
    botonEliminar.onclick = () => {
        botonEliminar.style.display = "none";
        let inputCantidad = document.createElement("input");
        inputCantidad.setAttribute("type", "number");
        inputCantidad.setAttribute("placeholder", "Ingrese cantidad a eliminar");
        inputCantidad.style.margin = `10px`
        inputCantidad.style.width = `18%`
        let confirmarBoton = document.createElement("button");
        confirmarBoton.innerText = "Confirmar ";
        confirmarBoton.style.borderRadius = ".625rem";
        confirmarBoton.style.backgroundColor = `red`
        parrafo.appendChild(inputCantidad);
        parrafo.appendChild(confirmarBoton)
        confirmarBoton.onclick = () => {
            let cantidad = parseInt(inputCantidad.value);
            if (cantidad < oferta.cantidad) {
                let precioPorUnidad = oferta.precio / oferta.cantidad
                oferta.cantidad -= cantidad;
                oferta.precio = oferta.cantidad * precioPorUnidad;
                parrafo.innerText = `ID:${oferta.id}|OFERTA:${oferta.oferta}|SUPERMERCADO:${oferta.supermercado}|PRECIO:$${oferta.precio}|CANTIDAD:${oferta.cantidad}`;
                localStorage.setItem(`oferta-${oferta.id}`, JSON.stringify(oferta));

            } else if (cantidad === oferta.cantidad) {
                parrafo.style.display = `none`
                localStorage.removeItem(`oferta-${oferta.id}`);

            }



        }

    }


    parrafo.appendChild(botonEliminar);
    divMain.appendChild(parrafo);

}
if (ofertasAlmacenadas.length > 0) {
    let botonFinalizarCompra = document.createElement("button");
    botonFinalizarCompra.innerText = `Finalizar compra`;
    botonFinalizarCompra.style.borderRadius = ".625rem";
    botonFinalizarCompra.style.backgroundColor = `red`
    botonFinalizarCompra.style.margin = `auto`
    botonFinalizarCompra.style.marginBottom = `5px`
    divMain.appendChild(botonFinalizarCompra)
    botonFinalizarCompra.onclick = () => {
        localStorage.clear();

        setTimeout(() => {
            divMain.innerHTML = "";
            botonFinalizarCompra.style.display = "none";
            let p = document.createElement("p");
            p.innerText = `Gracias por comprar en SUPEROFERTAS-CORDOBA!`
            divMain.appendChild(p)
        }, 100);

    }
} else {
    let p = document.createElement("p");
    p.innerText = `No hay ofertas en el carrito`
    divMain.appendChild(p)
}

