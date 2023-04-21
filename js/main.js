
const container = document.querySelector(".container-card");
const totalCarrito = document.querySelector("span");
const filtradorDeAbonos = document.querySelector("input#filterAbonos");
const carritoAbonos = volverCarro();

function filtrarAbonos(value) {
  let rta = abonos.filter(abono => abono.nombre.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
  rta.length > 0 && cargarAbonos(rta)
}

filtradorDeAbonos.addEventListener ("search", (e)=> {filtrarAbonos(e.target.value)});

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

function cantidadAbonosComprar() {
  carritoAbonos.textContent = carritoAbonos.length;
}

cantidadAbonosComprar();

function cargarAbonos(abono) {
  container.innerHTML = ""
  abono.forEach(abono => { container.innerHTML += returnCardHTML(abono) })
  clickButton()
}

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
  abono.forEach(abono => { container.innerHTML += returnCardHTML(abono) })
  clickButton()
}
  
  abonos.length > 0 ? cargarAbonos(abonos) : CardError()


cargarAbonos(abonos);


