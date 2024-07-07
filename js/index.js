let header = document.getElementsByClassName("header")
let titulo = document.getElementById("titulo");
titulo.classList = `d-flex justify-content-center `;
let nav = document.getElementById("navBar");
navBar.classList = `navbar navbar-expand-lg mt-1 w-100 mb-4 `
let body = document.getElementsByTagName("body")
body[0].style.backgroundColor = `black`;


let carrusel = document.createElement("div")
carrusel.style.border = `2px solid red`;
carrusel.style.width = `100%`;
carrusel.style.height = `250px`
carrusel.style.backgroundColor = `white`
carrusel.style.borderRadius = `5px`
carrusel.className = `carrusel`


header[0].appendChild(carrusel)
let imagenesSuper = ["./assets/img/dino.jpeg", "./assets/img/hiperlibertad.jpeg", "./assets/img/vea.jpg", "./assets/img/carrefour.webp", "./assets/img/disco.jpg"];
let descripcionImagenes = ["En dino alto verde:20% de descuento  con  tarjeta cordobesa y naranja", "Hiper Libertad:30% de descuento con tarjeta cordobesa y naranja", "Vea:10% de descuento con tarjeta visa,mastercard y naranja", "Carrefour:15% de descuento con tarjeta cordobesa y visa", "Disco:30% de descuento con tarjeta visa y mastercard",]
const imgSuper = document.createElement("img");
imgSuper.src = imagenesSuper[0];
imgSuper.className = `imgCarrusel`;
carrusel.appendChild(imgSuper);

const parrafoImagen = document.createElement("p");
parrafoImagen.style.color = `red`;

parrafoImagen.textContent = descripcionImagenes[0];
parrafoImagen.className = `parrafoImagen`;
parrafoImagen.setAttribute('data-aos', 'fade-up');
carrusel.appendChild(parrafoImagen);



let indiceActualSuper = 0;
function pasarImagenes() {
    indiceActualSuper++
    if (indiceActualSuper >= imagenesSuper.length) {
        indiceActualSuper = 0;
    }
    imgSuper.src = imagenesSuper[indiceActualSuper];
    parrafoImagen.textContent = descripcionImagenes[indiceActualSuper];
    setTimeout(pasarImagenes, 4000);

}
pasarImagenes();


let cartas = document.getElementsByClassName("carta");
for (let i = 0; i < cartas.length; i++) {
    cartas[i].classList.add("row", "d-flex", "justify-content-center", "gap-5", "mt-4");

}







































