

const carritoAbonos = [];

const abonos = [
  { nombre: "Abono Platea Alta", codigo: 1974, importe: 45000 },
  { nombre: "Abono tribuna oficial", codigo: 1988, importe: 20000 },
  { nombre: "Abono visera", codigo: 1990, importe: 70000 },
  { nombre: "Abono vieja amelia", codigo: 1991, importe: 40000 },
  { nombre: "Abono platea este", codigo: 2004, importe: 60000 },
  { nombre: "Abono palomar", codigo: 2013, importe: 20000 },
];


const container = document.querySelector(".container-card");
const totalCarrito = document.querySelector("span");
const filtradorDeAbonos = document.querySelector("input#filterAbonos");

function returnCardHTML(abono) {
  let {nombre,importe,codigo} =abono
  return `
    <div class="card-abonos">
      <div class="nombre"><p>${nombre}</p></div>
      <div class="importe"><p>$ ${importe}</p></div>
      <div class="comprar"><button class="boton-card" id="${codigo}">Comprar</button></div>
    </div>
  `;
}
function CardError() {
  container.innerHTML = `<div class="card-error">
                             <h1>🤦🏻‍♂️</h1>
                             <h2>Houston, tenemos un problema.</h2>
                             <h3>No pudimos obtener los productos a mostrar.</h3>
                             <h4>Intenta de nuevo en unos minutos...</h4>
                         </div>`
}
function cantidadAbonosComprar() {
  carritoAbonos.textContent = carritoAbonos.length;
}

cantidadAbonosComprar();

function clickButton() {
  const botones = document.querySelectorAll("button.boton-card");
  if (botones !== null) {
    for (const boton of botones) {
      boton.addEventListener("click", (e) => {
        let producto = abonos.find((abono) => abono.codigo === parseInt(e.target.id));
        carritoAbonos.push(producto);
        cantidadAbonosComprar();
      });
    }
  }
}
function cargarAbonos(abono) {
  container.innerHTML = ""
  abono.forEach((abono) => { container.innerHTML += returnCardHTML(abono) })
  clickButton()
}
  
  abonos.length > 0 ? cargarAbonos(abonos) : CardError()


cargarAbonos(abonos);

function filtrarAbonos(value) {
  const resultado = abonos.filter((abono) => abono.nombre.toLowerCase().includes(filtradorDeAbonos.value.toLowerCase().trim()))
  resultado.length > 0 && cargarAbonos(resultado)
}

filtradorDeAbonos.addEventListener("search", filtrarAbonos);
