let titulo = document.getElementById("titulo");
titulo.classList = `d-flex justify-content-center `;
let nav = document.getElementById("navBar");
navBar.classList = `navbar navbar-expand-lg mt-1 w-100 mb-4 `
let carrusel = document.getElementById("carouselExampleCaptions")
carrusel.classList = `carousel slide container-fluid w-100`
let body = document.getElementsByTagName("body")
body[0].style.backgroundColor = `black`;

const ofertasAlmacen = [{ id: 1, supermercado: "hiper libertad", precio: 8500, cantidad: 5 },
{ id: 2, supermercado: "super mami", precio: 8500, cantidad: 5 },
{ id: 3, supermercado: "vea", precio: 2500, cantidad: 5 },
{ id: 4, supermercado: "disco", precio: 2500, cantidad: 2 },
{ id: 5, supermercado: "carrefour", precio: 8700, cantidad: 5 },
{ id: 6, supermercado: "carrefour", precio: 8700, cantidad: 7 },]

const ofertasLimpieza = [{ id: 1, supermercado: "super mami", precio: 9200, cantidad: 5 },
{ id: 2, supermercado: "vea", precio: 4500, cantidad: 6 },
{ id: 3, supermercado: "disco", precio: 5000, cantidad: 5 },
{ id: 4, supermercado: "disco", precio: 6000, cantidad: 3 },
{ id: 5, supermercado: "carrefour", precio: 4500, cantidad: 3 },
{ id: 6, supermercado: "vea", precio: 9200, cantidad: 3 },];

const ofertasBebidas = [{ id: 1, supermercado: "hiper libertad", precio: 7500, cantidad: 5 },
{ id: 2, supermercado: "hiper libertad", precio: 7500, cantidad: 5 },
{ id: 3, supermercado: "vea", precio: 7500, cantidad: 5 },
{ id: 4, supermercado: "super mami", precio: 6200, cantidad: 4 },
{ id: 5, supermercado: "carrefour", precio: 6200, cantidad: 4 },
{ id: 6, supermercado: "disco", precio: 6200, cantidad: 3 },
]



let cartas = document.getElementsByClassName("carta");
for (let i = 0; i < cartas.length; i++) {
    cartas[i].classList.add("row", "d-flex", "justify-content-center", "gap-5", "mt-4");

}

let seccionBebidas = document.getElementsByClassName("seccioBebidas")[0];

for (const bebida of ofertasBebidas) {
    let card = document.createElement("div")
    card.classList.add("card", "col-4")
    card.style = `width: 18rem;`
    card.style.backgroundColor = "red";

    let nombre = document.createElement("h5");
    nombre.classList = `text-center`
    nombre.innerText = `${bebida.supermercado.toLocaleUpperCase()}:N:${bebida.id}`;

    let img = document.createElement("img");
    img.src = "https://i.ibb.co/HgWhT8p/oferta-hiper.png";


    let precio = document.createElement("p");
    precio.innerText = `$${bebida.precio}`;
    let cantidad = document.createElement("p")
    cantidad.innerText = `cantidad: ${bebida.cantidad}`

    let agregarCarrito = document.createElement("a");
    agregarCarrito.href = "#";
    agregarCarrito.className = "btn btn-primary";
    let imgA = document.createElement("img");
    imgA.src = "./assets/img/carritodecompras.png";
    agregarCarrito.appendChild(imgA);

    card.appendChild(nombre);
    card.appendChild(img);
    card.appendChild(precio);
    card.appendChild(cantidad)
    card.appendChild(agregarCarrito);

    seccionBebidas.appendChild(card)
}

let seccionAlmacen = document.getElementsByClassName("seccionAlmacen")[0];
for (const almacen of ofertasAlmacen) {
    let card = document.createElement("div")
    card.classList.add("card", "col-4")
    card.style = `width: 18rem;`
    card.style.backgroundColor = "red";

    let h5 = document.createElement("h5");
    h5.classList = `text-center`
    h5.innerText = `${almacen.supermercado.toLocaleUpperCase()}:N:${almacen.id}`;

    let img = document.createElement("img");
    img.src = "https://i.ibb.co/HgWhT8p/oferta-hiper.png";
    img.alt = "supermercado"


    let p = document.createElement("p");
    p.innerText = `$${almacen.precio}`;
    let parrafo2 = document.createElement("p")
    parrafo2.innerText = `cantidad: ${almacen.cantidad}`

    let a = document.createElement("a");
    a.href = "#";
    a.className = "btn btn-primary";
    let imgA = document.createElement("img");
    imgA.src = "./assets/img/carritodecompras.png";
    imgA.alt = "supermercado"
    a.appendChild(imgA);

    card.appendChild(h5);
    card.appendChild(img);
    card.appendChild(p);
    card.appendChild(parrafo2)
    card.appendChild(a);

    seccionAlmacen.appendChild(card)
}

let seccionLimpieza = document.getElementsByClassName("seccionLimpieza")[0];
for (const limpieza of ofertasLimpieza) {
    let card = document.createElement("div")
    card.classList.add("card", "col-4")
    card.style = `width: 18rem;`
    card.style.backgroundColor = "red";

    let h5 = document.createElement("h5");
    h5.classList = `text-center`
    h5.innerText = `${limpieza.supermercado.toLocaleUpperCase()}:N:${limpieza.id}`;

    let img = document.createElement("img");
    img.src = "https://i.ibb.co/HgWhT8p/oferta-hiper.png";
    img.alt = "supermercado"


    let p = document.createElement("p");
    p.innerText = `$${limpieza.precio}`;
    let parrafo2 = document.createElement("p")
    parrafo2.innerText = `cantidad: ${limpieza.cantidad}`

    let a = document.createElement("a");
    a.href = "#";
    a.className = "btn btn-primary";
    let imgA = document.createElement("img");
    imgA.src = "./assets/img/carritodecompras.png";
    imgA.alt = "supermercado"

    a.appendChild(imgA);

    card.appendChild(h5);
    card.appendChild(img);
    card.appendChild(p);
    card.appendChild(parrafo2)
    card.appendChild(a);

    seccionLimpieza.appendChild(card)
};




const TodasLasOfertas = [ofertasBebidas, ofertasAlmacen, ofertasLimpieza]



class ComprarOfertas {
    constructor() {
        this.productos = TodasLasOfertas;
        this.carrito = [];
    }

    agregarCarrito(ofertas) {
        ofertas.forEach(oferta => {

            let tipoOferta;
            if (oferta.tipo === "bebidas") {
                tipoOferta = "ofertasBebidas";
            } else if (oferta.tipo === "almacen") {
                tipoOferta = "ofertasAlmacen";
            } else if (oferta.tipo === "limpieza") {
                tipoOferta = "ofertasLimpieza";
            }

            const listaProductos = this.productos.find(lista => lista.some(producto => producto.id === oferta.id));
            const productoVendido = listaProductos.find(producto => producto.id === oferta.id);
            if (productoVendido && productoVendido.cantidad >= oferta.cantidad) {
                this.carrito.push({ producto: productoVendido, cantidad: oferta.cantidad });
                productoVendido.cantidad -= oferta.cantidad;
                alert(`Se agregaron ${oferta.cantidad} ofertas de ${tipoOferta} con el número de ID: ${productoVendido.id} al carrito`);
            } else {
                alert(`No se pudo agregar la oferta al carrito. No hay suficiente stock para esa oferta ${tipoOferta} con el número de ID: ${oferta.id} al carrito`);
            }
        });
    }
    eliminarCarrito(tipoOferta, ofertaId) {
        console.log("Tipo de oferta a eliminar:", tipoOferta);
        console.log("ID de la oferta a eliminar:", ofertaId);
        let carritoTipo;
        if (tipoOferta === "bebidas") {
            carritoTipo = this.carrito[0];
            console.log("Contenido del carrito de bebidas:", carritoTipo);
            for (let i = 0; i < carritoTipo.length; i++) {
                console.log(carritoTipo[i].producto);
                if (carritoTipo[i].producto.id === ofertaId) {
                    (carritoTipo.splice(i, 1));
                    alert(`Oferta con ID ${ofertaId} eliminada del carrito de bebidas`);
                   
                }
            }
        } else if (tipoOferta === "almacen") {
            carritoTipo = this.carrito[1];
            console.log("Tipo de oferta seleccionado: almacen");
            console.log("Contenido del carrito de almacen:", carritoTipo);

            for (let i = 0; i < carritoTipo.length; i++) {
                if (carritoTipo[i].producto.id === ofertaId) {
                   (carritoTipo.splice(i, 1));
                    alert(`Oferta con ID ${ofertaId} eliminada del carrito de almacen`);
                  
                }
            }
        } else if (tipoOferta === "limpieza") {
            carritoTipo = this.carrito[2];
            console.log("Tipo de oferta seleccionado: limpieza");
            console.log("Contenido del carrito de limpieza:", carritoTipo);

            for (let i = 0; i < carritoTipo.length; i++) {
                if (carritoTipo[i].producto.id === ofertaId) {
                    carritoTipo.splice(i, 1);
                    alert(`Oferta con ID ${ofertaId} eliminada del carrito de limpieza`);
                   
                }
            }
        }
    }

}

const compra1 = new ComprarOfertas();

const numeroOfertasBebidas = parseInt(prompt("¿Cuántas tipos de ofertas de bebidas desea agregar?"));
const numeroOfertasAlmacen = parseInt(prompt("¿Cuántas tipos de ofertas de almacen desea agregar?"));
const numeroOfertasLimpieza = parseInt(prompt("¿Cuántas tipos de ofertas de limpieza desea agregar?"));
let ofertasCarrito=[];

for (let i = 0; i < numeroOfertasBebidas; i++) {
    const idBebidas = parseInt(prompt(`Ingrese el numero(ID) de la ${i + 1}er oferta de bebidas que desea comprar:`));
    const cantidadBebidas = parseInt(prompt(`Ingrese la cantidad de la ${i + 1}er oferta de bebidas que desea comprar:`));
    ofertasCarrito.push({ tipo: "bebidas", id: idBebidas, cantidad: cantidadBebidas });
}

for (let i = 0; i < numeroOfertasAlmacen; i++) {
    const idAlmacen = parseInt(prompt(`Ingrese el numero(ID) de la ${i + 1}er oferta de almacen que desea comprar:`));
    const cantidadAlmacen = parseInt(prompt(`Ingrese la cantidad de la ${i + 1}er oferta de almacen que desea comprar:`));
    ofertasCarrito.push({ tipo: "almacen", id: idAlmacen, cantidad: cantidadAlmacen });
}

for (let i = 0; i < numeroOfertasLimpieza; i++) {
    const idLimpieza = parseInt(prompt(`Ingrese el numero(ID) de la ${i + 1}er oferta de limpieza que desea comprar:`));
    const cantidadLimpieza = parseInt(prompt(`Ingrese la cantidad de la ${i + 1}er oferta de limpieza que desea comprar:`));
    ofertasCarrito.push({ tipo: "limpieza", id: idLimpieza, cantidad: cantidadLimpieza });
}

compra1.agregarCarrito(ofertasCarrito);
compra1.eliminarCarrito(prompt("Ingrese el tipo de oferta que desea eliminar (bebidas/almacen/limpieza):"),  parseInt(prompt("Ingrese el ID de la oferta que desea eliminar:")));
console.log("carrito:",ofertasCarrito);

























