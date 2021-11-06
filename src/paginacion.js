import inicio from './main';
import { cambiarNumeroPagina, ocultarBoton, visibilizarBoton } from './ui';

function anteriorPagina() {
  const $numeroPagina = document.querySelector('#numero-pagina');
  if (Number(($numeroPagina).innerText) === 2) {
    const anterior = 'anterior';
    ocultarBoton(anterior);
  } else if (Number(($numeroPagina).innerText) === 44) {
    const siguiente = 'siguiente';
    visibilizarBoton(siguiente);
  }
  const menos = 'menos';
  cambiarNumeroPagina(menos);
  inicio((Number($numeroPagina.innerText) - 1) * 20);
}

function siguientePagina(pagina) {
  const $numeroPagina = document.querySelector('#numero-pagina');
  const anterior = 'anterior';
  if (Number($numeroPagina.innerText) === 43 || pagina === 44) {
    const siguiente = 'siguiente';
    const ultima = 'ultima';
    visibilizarBoton(anterior);
    ocultarBoton(siguiente);
    ocultarBoton(ultima);
    cambiarNumeroPagina(ultima);
    inicio(880, 18);
  } else {
    visibilizarBoton(anterior);
    const mas = 'mas';
    cambiarNumeroPagina(mas);
    inicio((Number($numeroPagina.innerText) - 1) * 20);
  }
}

const $botonAnteriorPagina = document.querySelector('.anterior-pagina');
const $botonSiguientePagina = document.querySelector('.siguiente-pagina');
const $botonUltimaPagina = document.querySelector('.ultima-pagina');

$botonAnteriorPagina.onclick = anteriorPagina;
$botonSiguientePagina.onclick = siguientePagina;
$botonUltimaPagina.addEventListener('click', () => {
  siguientePagina(44);
});
