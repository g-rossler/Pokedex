import { crearPaginaPokedex } from "../Main/main.js";
import {
  verificarVisibilidadBotonesPaginador,
  modificarNumeroPagina,
} from "../UI/ui.js";

const $botonAnteriorPagina = document.querySelector(".anterior-pagina");
const $botonSiguientePagina = document.querySelector(".siguiente-pagina");
const $botonUltimaPagina = document.querySelector(".ultima-pagina");

function averiguarPagina() {
  const $numeroPagina = document.querySelector("#numero-pagina");
  return Number($numeroPagina.innerText);
}

function cambiarPagina(texto, numeroPagina) {
  if (texto === "Pagina Siguiente") {
    modificarNumeroPagina("mas");
    crearPaginaPokedex(numeroPagina * 20);
  } else if (texto === "Pagina Anterior") {
    modificarNumeroPagina("menos");
    crearPaginaPokedex((numeroPagina - 2) * 20);
  } else {
    modificarNumeroPagina();
    crearPaginaPokedex(1120);
  }
}

function manejarCambioPagina(texto) {
  let numeroPagina = averiguarPagina();
  cambiarPagina(texto, numeroPagina);
  numeroPagina = averiguarPagina();
  verificarVisibilidadBotonesPaginador(numeroPagina);
}

export default function activarPaginador() {
  $botonSiguientePagina.addEventListener("click", (e) => {
    manejarCambioPagina(e.target.innerText);
  });

  $botonAnteriorPagina.addEventListener("click", (e) => {
    manejarCambioPagina(e.target.innerText);
  });

  $botonUltimaPagina.addEventListener("click", (e) => {
    manejarCambioPagina(e.target.innerText);
  });
}
