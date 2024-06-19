let seccionBebidas = document.getElementsByClassName("seccioBebidas")[0];
let imagenesBebidas = ["./assets/img/bebida1.jpg", "./assets/img/bebida2.jpg", "./assets/img/bebidass3.jpg", "./assets/img/bebida4.jpg", "./assets/img/bebida5.jpg", "./assets/img/bebida6.jpg"];
let indiceImagenBebidas = 0;
for (const bebida of ofertasBebidas) {
    let cantidadDisponible = bebida.cantidad;
    let ofertaLocalStorage = localStorage.getItem(`oferta-${bebida.id}`);
    if (ofertaLocalStorage) {
        let oferta = JSON.parse(ofertaLocalStorage);
        cantidadDisponible -= oferta.cantidad;
    }

    let card = document.createElement("div");
    card.classList.add("card", "col-4");
    card.style = `width: 18rem;`;
    card.style.backgroundColor = "red";

    let nombre = document.createElement("h5");
    nombre.classList = `text-center`;
    nombre.innerText = `${bebida.supermercado.toLocaleUpperCase()}:N:${bebida.id}`;


    let img = document.createElement("img");
    img.src = imagenesBebidas[indiceImagenBebidas % imagenesBebidas.length];
    indiceImagenBebidas++;
    img.style.border = `2px solid black`

    let precio = document.createElement("p");
    precio.innerText = `$${bebida.precio}`;

    let cantidadTexto = document.createElement("p");
    cantidadTexto.innerText = `Cantidad disponible: ${cantidadDisponible}`;

    let agregarCarrito = document.createElement("button");
    agregarCarrito.className = "btn";
    agregarCarrito.style.backgroundColor = `white`;
    let imgBoton = document.createElement("img");
    imgBoton.src = "./assets/img/carritodecompras.png";
    agregarCarrito.appendChild(imgBoton);
    agregarCarrito.onclick = () => {
        card.style.animation = "none";
        agregarCarrito.style.display = "none";
        let inputCantidad = document.createElement("input");
        inputCantidad.setAttribute("type", "number");
        inputCantidad.setAttribute("placeholder", "Ingrese cantidad");
        let confirmarBoton = document.createElement("button");
        confirmarBoton.innerText = "Confirmar compra";
        confirmarBoton.style.borderRadius = ".625rem";
        confirmarBoton.onclick = () => {
            confirmarBoton.style.backgroundColor = `yellow`
            let cantidad = parseInt(inputCantidad.value);
            if (!isNaN(cantidad) && cantidad > 0 && cantidad <= bebida.cantidad) {
                let ofertaAnterior = JSON.parse(localStorage.getItem(`oferta-${bebida.id}`));
                let cantidadTotal = cantidad;
                if (ofertaAnterior && ofertaAnterior.cantidad) {
                    cantidadTotal += ofertaAnterior.cantidad;
                }
                let ofertaConCantidad = {
                    id: bebida.id,
                    oferta: bebida.oferta,
                    supermercado: bebida.supermercado,
                    precio: bebida.precio * cantidadTotal,
                    cantidad: cantidadTotal,
                };
                bebida.cantidad -= cantidad;

                cantidadTexto.innerText = `Cantidad: ${bebida.cantidad}`;
                localStorage.setItem(`oferta-${bebida.id}`, JSON.stringify(ofertaConCantidad));
                precio.style.display = "none";
                cantidadTexto.style.display = "none"
                let div = document.createElement("div");
                div.style.paddingTop = "px";
                div.style.border = "2px solid black";
                div.style.borderRadius = ".625rem";
                div.style.backgroundColor = `green`;
                let p = document.createElement("p");
                p.innerText = ` se agregaron ${inputCantidad.value} ofertas con el ID:${bebida.id}  al carrito.`;
                div.appendChild(p)
                card.appendChild(div);
                setTimeout(() => {
                    precio.style.display = "";
                    cantidadTexto.style.display = "";
                    card.removeChild(div);
                }, 2500);

            } else if (cantidad > bebida.cantidad) {
                precio.style.display = "none";
                cantidadTexto.style.display = "none"
                let div = document.createElement("div");
                div.style.paddingTop = "2px";
                div.style.border = "2px solid black";
                div.style.borderRadius = ".625rem";
                div.style.backgroundColor = `yellow`;
                let p = document.createElement("p");
                p.innerText = `La cantidad seleccionada es mayor al stock disponible de la oferta: ${bebida.id}`;
                div.appendChild(p)
                card.appendChild(div);
                setTimeout(() => {
                    precio.style.display = "";
                    cantidadTexto.style.display = "";
                    card.removeChild(div);
                }, 2500);
            } else {
                precio.style.display = "none";
                cantidadTexto.style.display = "none"
                let div = document.createElement("div");
                div.style.paddingTop = "2px";
                div.style.border = "2px solid black";
                div.style.borderRadius = ".625rem";
                div.style.backgroundColor = `yellow`;
                let p = document.createElement("p");
                p.innerText = "Ingrese una cantidad válida y menor o igual a la disponible.";
                div.appendChild(p)
                card.appendChild(div);
                setTimeout(() => {
                    precio.style.display = "";
                    cantidadTexto.style.display = "";
                    card.removeChild(div);
                }, 2500);
            }
            inputCantidad.style.display = `none`;
            confirmarBoton.style.display = `none`
            agregarCarrito.style.display = "";
            card.style.animation = "";
        };
        card.appendChild(inputCantidad);
        card.appendChild(confirmarBoton);
    };

    card.appendChild(nombre);
    card.appendChild(img);
    card.appendChild(precio);
    card.appendChild(cantidadTexto);
    card.appendChild(agregarCarrito);

    seccionBebidas.appendChild(card);

}

let seccionAlmacen = document.getElementsByClassName("seccionAlmacen")[0];
let imagenesAlmacen = ["./assets/img/almacen1.jpg", "./assets/img/almacen2.jpg", "./assets/img/almacen3.jpg", "./assets/img/almacen4.jpg", "./assets/img/almacen5.jpg", "./assets/img/almacen6.jpg"]
let indiceImagenAlmacen = 0;
for (const almacen of ofertasAlmacen) {
    let cantidadDisponible = almacen.cantidad;
    let ofertaLocalStorage = localStorage.getItem(`oferta-${almacen.id}`);
    if (ofertaLocalStorage) {
        let oferta = JSON.parse(ofertaLocalStorage);
        cantidadDisponible -= oferta.cantidad;
    }

    let card = document.createElement("div");
    card.classList.add("card", "col-4");
    card.style = `width: 18rem;`;
    card.style.backgroundColor = "red";

    let nombre = document.createElement("h5");
    nombre.classList = `text-center`;
    nombre.innerText = `${almacen.supermercado.toLocaleUpperCase()}:N:${almacen.id}`;

    let img = document.createElement("img");
    img.src = imagenesAlmacen[indiceImagenAlmacen % imagenesAlmacen.length];
    indiceImagenAlmacen++;
    img.style.border = `2px solid black`

    let precio = document.createElement("p");
    precio.innerText = `$${almacen.precio}`;

    let cantidadTexto = document.createElement("p");
    cantidadTexto.innerText = `Cantidad disponible: ${cantidadDisponible}`;

    let agregarCarrito = document.createElement("button");
    agregarCarrito.className = "btn";
    agregarCarrito.style.backgroundColor = `white`;
    let imgBoton = document.createElement("img");
    imgBoton.src = "./assets/img/carritodecompras.png";
    agregarCarrito.appendChild(imgBoton);
    agregarCarrito.onclick = () => {
        card.style.animation = "none";
        agregarCarrito.style.display = "none";
        let inputCantidad = document.createElement("input");
        inputCantidad.setAttribute("type", "number");
        inputCantidad.setAttribute("placeholder", "Ingrese cantidad");
        let confirmarBoton = document.createElement("button");
        confirmarBoton.innerText = "Confirmar compra";
        confirmarBoton.style.borderRadius = ".625rem";
        confirmarBoton.onclick = () => {
            confirmarBoton.style.backgroundColor = `yellow`
            let cantidad = parseInt(inputCantidad.value);
            if (!isNaN(cantidad) && cantidad > 0 && cantidad <= almacen.cantidad) {
                let ofertaAnterior = JSON.parse(localStorage.getItem(`oferta-${almacen.id}`));
                let cantidadTotal = cantidad;
                if (ofertaAnterior && ofertaAnterior.cantidad) {
                    cantidadTotal += ofertaAnterior.cantidad;
                }
                let ofertaConCantidad = {
                    id: almacen.id,
                    oferta: almacen.oferta,
                    supermercado: almacen.supermercado,
                    precio: almacen.precio * cantidadTotal,
                    cantidad: cantidadTotal,
                };
                almacen.cantidad -= cantidad;
                cantidadTexto.innerText = `Cantidad: ${almacen.cantidad}`;
                localStorage.setItem(`oferta-${almacen.id}`, JSON.stringify(ofertaConCantidad));
                precio.style.display = "none";
                cantidadTexto.style.display = "none"
                let div = document.createElement("div");
                div.style.paddingTop = "px";
                div.style.border = "2px solid black";
                div.style.borderRadius = ".625rem";
                div.style.backgroundColor = `green`;
                let p = document.createElement("p");
                p.innerText = ` se agregaron ${inputCantidad.value} ofertas con el ID:${almacen.id}  al carrito.`;
                div.appendChild(p)
                card.appendChild(div);
                setTimeout(() => {
                    precio.style.display = "";
                    cantidadTexto.style.display = "";
                    card.removeChild(div);
                }, 2500);
            } else if (cantidad > almacen.cantidad) {
                precio.style.display = "none";
                cantidadTexto.style.display = "none"
                let div = document.createElement("div");
                div.style.paddingTop = "2px";
                div.style.border = "2px solid black";
                div.style.borderRadius = ".625rem";
                div.style.backgroundColor = `yellow`;
                let p = document.createElement("p");
                p.innerText = `La cantidad seleccionada es mayor al stock disponible de la oferta: ${almacen.id}`;
                div.appendChild(p)
                card.appendChild(div);
                setTimeout(() => {
                    precio.style.display = "";
                    cantidadTexto.style.display = "";
                    card.removeChild(div);
                }, 2500);
            } else {
                precio.style.display = "none";
                cantidadTexto.style.display = "none"
                let div = document.createElement("div");
                div.style.paddingTop = "2px";
                div.style.border = "2px solid black";
                div.style.borderRadius = ".625rem";
                div.style.backgroundColor = `yellow`;
                let p = document.createElement("p");
                p.innerText = "Ingrese una cantidad válida y menor o igual a la disponible.";
                div.appendChild(p)
                card.appendChild(div);
                setTimeout(() => {
                    precio.style.display = "";
                    cantidadTexto.style.display = "";
                    card.removeChild(div);
                }, 2500);
            }
            inputCantidad.style.display = `none`;
            confirmarBoton.style.display = `none`
            agregarCarrito.style.display = "";
            card.style.animation = "";
        };
        card.appendChild(inputCantidad);
        card.appendChild(confirmarBoton);
    };

    card.appendChild(nombre);
    card.appendChild(img);
    card.appendChild(precio);
    card.appendChild(cantidadTexto);
    card.appendChild(agregarCarrito);

    seccionAlmacen.appendChild(card);
}

let seccionLimpieza = document.getElementsByClassName("seccionLimpieza")[0];
let imagenesLimpieza = ["./assets/img/limpieza1.jpg", "./assets/img/limpieza2.jpg", "./assets/img/limpieza3.jpg", "./assets/img/limpieza4.jpg", "./assets/img/limpieza5.jpg", "./assets/img/limpieza6.jpg"];
let indiceImagenLimpieza = 0;
for (const limpieza of ofertasLimpieza) {
    let cantidadDisponible = limpieza.cantidad;
    let ofertaLocalStorage = localStorage.getItem(`oferta-${limpieza.id}`);
    if (ofertaLocalStorage) {
        let oferta = JSON.parse(ofertaLocalStorage);
        cantidadDisponible -= oferta.cantidad;
    }

    let card = document.createElement("div");
    card.classList.add("card", "col-4");
    card.style = `width: 18rem;`;
    card.style.backgroundColor = "red";

    let nombre = document.createElement("h5");
    nombre.classList = `text-center`;
    nombre.innerText = `${limpieza.supermercado.toLocaleUpperCase()}:N:${limpieza.id}`;

    let img = document.createElement("img");
    img.src = imagenesLimpieza[indiceImagenLimpieza % imagenesLimpieza.length];
    indiceImagenLimpieza++;
    img.style.border = `2px solid black`

    let precio = document.createElement("p");
    precio.innerText = `$${limpieza.precio}`;

    let cantidadTexto = document.createElement("p");
    cantidadTexto.innerText = `Cantidad disponible: ${cantidadDisponible}`;

    let agregarCarrito = document.createElement("button");
    agregarCarrito.className = "btn";
    agregarCarrito.style.backgroundColor = `white`;
    let imgBoton = document.createElement("img");
    imgBoton.src = "./assets/img/carritodecompras.png";
    agregarCarrito.appendChild(imgBoton);
    agregarCarrito.onclick = () => {
        card.style.animation = "none";
        agregarCarrito.style.display = "none";
        let inputCantidad = document.createElement("input");
        inputCantidad.setAttribute("type", "number");
        inputCantidad.setAttribute("placeholder", "Ingrese cantidad");
        let confirmarBoton = document.createElement("button");
        confirmarBoton.innerText = "Confirmar compra";
        confirmarBoton.style.borderRadius = ".625rem";
        confirmarBoton.onclick = () => {
            confirmarBoton.style.backgroundColor = `yellow`
            let cantidad = parseInt(inputCantidad.value);
            if (!isNaN(cantidad) && cantidad > 0 && cantidad <= limpieza.cantidad) {
                let ofertaAnterior = JSON.parse(localStorage.getItem(`oferta-${limpieza.id}`));
                let cantidadTotal = cantidad;
                if (ofertaAnterior && ofertaAnterior.cantidad) {
                    cantidadTotal += ofertaAnterior.cantidad;
                }
                let ofertaConCantidad = {
                    id: limpieza.id,
                    oferta: limpieza.oferta,
                    supermercado: limpieza.supermercado,
                    precio: limpieza.precio * cantidadTotal,
                    cantidad: cantidadTotal,
                };
                limpieza.cantidad -= cantidad;
                cantidadTexto.innerText = `Cantidad: ${limpieza.cantidad}`;
                localStorage.setItem(`oferta-${limpieza.id}`, JSON.stringify(ofertaConCantidad));
                precio.style.display = "none";
                cantidadTexto.style.display = "none"
                let div = document.createElement("div");
                div.style.paddingTop = "px";
                div.style.border = "2px solid black";
                div.style.borderRadius = ".625rem";
                div.style.backgroundColor = `green`;
                let p = document.createElement("p");
                p.innerText = ` se agregaron ${inputCantidad.value} ofertas con el ID:${limpieza.id}  al carrito.`;
                div.appendChild(p)
                card.appendChild(div);
                setTimeout(() => {
                    precio.style.display = "";
                    cantidadTexto.style.display = "";
                    card.removeChild(div);
                }, 2500);
            } else if (cantidad > limpieza.cantidad) {
                precio.style.display = "none";
                cantidadTexto.style.display = "none"
                let div = document.createElement("div");
                div.style.paddingTop = "2px";
                div.style.border = "2px solid black";
                div.style.borderRadius = ".625rem";
                div.style.backgroundColor = `yellow`;
                let p = document.createElement("p");
                p.innerText = `La cantidad seleccionada es mayor al stock disponible de la oferta: ${limpieza.id}`;
                div.appendChild(p)
                card.appendChild(div);
                setTimeout(() => {
                    precio.style.display = "";
                    cantidadTexto.style.display = "";
                    card.removeChild(div);
                }, 2500);
            } else {
                precio.style.display = "none";
                cantidadTexto.style.display = "none"
                let div = document.createElement("div");
                div.style.paddingTop = "2px";
                div.style.border = "2px solid black";
                div.style.borderRadius = ".625rem";
                div.style.backgroundColor = `yellow`;
                let p = document.createElement("p");
                p.innerText = "Ingrese una cantidad válida y menor o igual a la disponible.";
                div.appendChild(p)
                card.appendChild(div);
                setTimeout(() => {
                    precio.style.display = "";
                    cantidadTexto.style.display = "";
                    card.removeChild(div);
                }, 2500);
            }
            inputCantidad.style.display = `none`;
            confirmarBoton.style.display = `none`
            agregarCarrito.style.display = "";
            card.style.animation = "";
        };
        card.appendChild(inputCantidad);
        card.appendChild(confirmarBoton);
    };

    card.appendChild(nombre);
    card.appendChild(img);
    card.appendChild(precio);
    card.appendChild(cantidadTexto);
    card.appendChild(agregarCarrito);

    seccionLimpieza.appendChild(card);
};