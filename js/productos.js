let seccionBebidas = document.getElementsByClassName("seccioBebidas")[0];
let seccionAlmacen = document.getElementsByClassName("seccionAlmacen")[0];
let seccionLimpieza = document.getElementsByClassName("seccionLimpieza")[0];

const peticion = async () => {
    const respuesta = await fetch('/productos.json')
    const datos = await respuesta.json();
    const data = await datos
    for (const producto of data) {
        let cantidadDisponible = producto.cantidad;
        let ofertaLocalStorage = localStorage.getItem(`oferta-${producto.id}`);
        if (ofertaLocalStorage) {
            let oferta = JSON.parse(ofertaLocalStorage);
            cantidadDisponible -= oferta.cantidad;
        }
        let card = document.createElement("div");
        card.classList.add("card", "col-4");
        card.style = `width: 18rem;`;
        card.style.backgroundColor = "red";
        card.setAttribute('data-aos', 'flip-left');


        let logo = document.createElement("img")
        logo.src = `${producto.logo}`
        logo.style.width = `25px`
        logo.style.height = `25px`

        let supermercado = document.createElement("h5");
        supermercado.classList = `text-center`;
        supermercado.innerText = `${producto.supermercado.toLocaleUpperCase()}|Nº${producto.id} `;
        supermercado.appendChild(logo);



        let nombre = document.createElement("h5");
        nombre.classList = `text-center`;
        nombre.innerText = `${producto.nombre}`;


        let img = document.createElement("img");
        img.src = `${producto.imagen}`;
        img.style.border = `2px solid black`;

        let descripcion = document.createElement("p")
        descripcion.classList = `text-center`
        descripcion.innerText = `${producto.descripcion}`

        let precio = document.createElement("p");
        precio.innerText = `$${producto.precio}`;

        let oferta = producto.oferta_tipo


        let cantidadTexto = document.createElement("p");
        cantidadTexto.innerText = `Cantidad disponible: ${cantidadDisponible}`;

        let agregarCarrito = document.createElement("button");
        agregarCarrito.className = "btn";
        agregarCarrito.style.backgroundColor = `white`;
        agregarCarrito.onmouseover = () => {
            agregarCarrito.style.backgroundColor = `orange`
        }
        agregarCarrito.onmouseout = () => {
            agregarCarrito.style.backgroundColor = `white`
        }
        agregarCarrito.style.border = `2px solid black`;
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
                confirmarBoton.style.backgroundColor = `yellow`;
                let cantidad = parseInt(inputCantidad.value);
                if (!isNaN(cantidad) && cantidad > 0 && cantidad <= producto.cantidad) {
                    let ofertaAnterior = JSON.parse(localStorage.getItem(`oferta-${producto.id}`));
                    let cantidadTotal = cantidad;
                    if (ofertaAnterior && ofertaAnterior.cantidad) {
                        cantidadTotal += ofertaAnterior.cantidad;
                    }

                    let ofertaConCantidad = {
                        id: producto.id,
                        nombre: producto.nombre,
                        descripcion: producto.descripcion,
                        supermercado: producto.supermercado,
                        precio: producto.precio * cantidadTotal,
                        cantidad: cantidadTotal,
                    };

                    producto.cantidad -= cantidad;
                    cantidadTexto.innerText = `Cantidad disponible: ${producto.cantidad}`;
                    if (producto.cantidad === 0) {
                        cantidadTexto.innerText = `Sin Stock`;
                        card.removeChild(agregarCarrito);
                        img.style.height = `70%`;
                    }

                    localStorage.setItem(`oferta-${producto.id}`, JSON.stringify(ofertaConCantidad));
                    Swal.fire({
                        width: 400,
                        position: "center",
                        icon: "success",
                        title: `Se agregaron ${inputCantidad.value} ofertas de la sección Productos con el ID ${producto.id} al carrito.`,
                        color: "red",
                        background: "black",
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true,
                    });
                } else if (cantidad > producto.cantidad) {
                    Swal.fire({
                        width: 400,
                        height: 200,
                        color: "red",
                        background: "black",
                        icon: "error",
                        text: `La cantidad seleccionada es mayor al stock disponible del producto con ID ${producto.id}`,
                    });
                } else {
                    Swal.fire({
                        width: 400,
                        title: "Debe ingresar una cantidad válida.",
                        icon: "info",
                        color: "red",
                        background: "black",
                        showCloseButton: true,
                        focusConfirm: false,
                        confirmButtonText: `Aceptar`,
                    });
                }
                inputCantidad.style.display = `none`;
                confirmarBoton.style.display = `none`;
                agregarCarrito.style.display = "";
                card.style.animation = "";
            };
            card.appendChild(inputCantidad);
            card.appendChild(confirmarBoton);

        };
        card.appendChild(supermercado)
        card.appendChild(nombre);
        card.appendChild(img);
        card.appendChild(descripcion)
        card.appendChild(precio);
        card.appendChild(cantidadTexto);
        card.appendChild(agregarCarrito);


        if (oferta === "bebidas" && seccionBebidas) {
            seccionBebidas.appendChild(card);
        } else if (oferta === "almacen" && seccionAlmacen) {
            seccionAlmacen.appendChild(card);
        } else if (oferta === "limpieza" && seccionLimpieza) {
            seccionLimpieza.appendChild(card);
        } else {
            console.error();
        }
    }
}
peticion();

