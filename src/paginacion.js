// eslint-disable-next-line import/extensions
import inicio from './main.js';
// eslint-disable-next-line import/extensions
import { cambiarNumeroPagina, ocultarBoton, visibilizarBoton } from './ui.js';

function anteriorPagina(numeroPagina) {
  if (numeroPagina === 2) {
    const anterior = 'anterior';
    ocultarBoton(anterior);
  } else if (numeroPagina === 44) {
    const siguiente = 'siguiente';
    visibilizarBoton(siguiente);
  }
  const menos = 'menos';
  cambiarNumeroPagina(menos);
}

function siguientePagina() {
  const anterior = 'anterior';
  visibilizarBoton(anterior);
  const mas = 'mas';
  cambiarNumeroPagina(mas);
}

function ultimaPagina() {
  const anterior = 'anterior';
  const siguiente = 'siguiente';
  const ultima = 'ultima';
  visibilizarBoton(anterior);
  ocultarBoton(siguiente);
  ocultarBoton(ultima);
  cambiarNumeroPagina(ultima);
}

function averiguarPagina() {
  const $numeroPagina = document.querySelector('#numero-pagina');
  return Number($numeroPagina.innerText);
}

const $botonAnteriorPagina = document.querySelector('.anterior-pagina');
const $botonSiguientePagina = document.querySelector('.siguiente-pagina');
const $botonUltimaPagina = document.querySelector('.ultima-pagina');

$botonAnteriorPagina.addEventListener('click', () => {
  const numeroPagina = averiguarPagina();
  anteriorPagina(numeroPagina);
  inicio((numeroPagina - 1) * 20);
});

$botonSiguientePagina.addEventListener('click', () => {
  const numeroPagina = averiguarPagina();
  if (numeroPagina === 43) {
    ultimaPagina();
    inicio(880, 18);
  } else {
    siguientePagina(numeroPagina);
    inicio((numeroPagina + 1) * 20);
  }
});

$botonUltimaPagina.addEventListener('click', () => {
  ultimaPagina();
  inicio(880, 18);
});
