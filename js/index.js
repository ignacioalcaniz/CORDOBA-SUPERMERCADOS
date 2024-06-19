let header = document.getElementsByClassName("header")
let titulo = document.getElementById("titulo");
titulo.classList = `d-flex justify-content-center `;
let nav = document.getElementById("navBar");
navBar.classList = `navbar navbar-expand-lg mt-1 w-100 mb-4 `
let body = document.getElementsByTagName("body")
body[0].style.backgroundColor = `black`;

const ofertasBebidas = [{ id: 1, oferta: "bebidas", supermercado: "hiper libertad", precio: 2500, cantidad: 5 },
{ id: 2, oferta: "bebidas", supermercado: "super mami", precio: 8500, cantidad: 5 },
{ id: 3, oferta: "bebidas", supermercado: "vea", precio: 7500, cantidad: 5 },
{ id: 4, oferta: "bebidas", supermercado: "disco", precio: 4500, cantidad: 2 },
{ id: 5, oferta: "bebidas", supermercado: "carrefour", precio: 1700, cantidad: 5 },
{ id: 6, oferta: "bebidas", supermercado: "carrefour", precio: 1500, cantidad: 7 },]

const ofertasAlmacen = [{ id: 7, oferta: "almacen", supermercado: "super mami", precio: 1200, cantidad: 5 },
{ id: 8, oferta: "almacen", supermercado: "vea", precio: 3000, cantidad: 6 },
{ id: 9, oferta: "almacen", supermercado: "disco", precio: 800, cantidad: 5 },
{ id: 10, oferta: "almacen", supermercado: "disco", precio: 1000, cantidad: 3 },
{ id: 11, oferta: "almacen", supermercado: "carrefour", precio: 1200, cantidad: 3 },
{ id: 12, oferta: "almacen", supermercado: "vea", precio: 750, cantidad: 3 },];

const ofertasLimpieza = [{ id: 13, oferta: "limpieza", supermercado: "hiper libertad", precio: 4500, cantidad: 5 },
{ id: 14, oferta: "limpieza", supermercado: "hiper libertad", precio: 1500, cantidad: 5 },
{ id: 15, oferta: "limpieza", supermercado: "vea", precio: 2500, cantidad: 5 },
{ id: 16, oferta: "limpieza", supermercado: "super mami", precio: 3200, cantidad: 4 },
{ id: 17, oferta: "limpieza", supermercado: "carrefour", precio: 2200, cantidad: 4 },
{ id: 18, oferta: "limpieza", supermercado: "disco", precio: 2800, cantidad: 3 },
]

let cartas = document.getElementsByClassName("carta");
for (let i = 0; i < cartas.length; i++) {
    cartas[i].classList.add("row", "d-flex", "justify-content-center", "gap-5", "mt-4");

}







































