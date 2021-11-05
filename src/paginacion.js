import inicio from './main';

function anteriorPagina() {
  const $numeroPagina = document.querySelector('#numero-pagina-comienzo');
  const $botonPaginaAnterior = document.querySelector('.pagina-anterior');
  const $botonPaginaSiguiente = document.querySelector('.pagina-siguiente');
  if (Number(($numeroPagina).innerText) === 2) {
    $botonPaginaAnterior.className = 'boton-pagina btn btn-dark pagina-anterior oculto';
  } else if (Number(($numeroPagina).innerText) === 44) {
    $botonPaginaSiguiente.className = 'boton-pagina btn btn-dark pagina-siguiente visible';
  }
  $numeroPagina.innerText = Number($numeroPagina.innerText) - 1;
  inicio((Number($numeroPagina.innerText) - 1) * 20);
}

function siguientePagina(pagina) {
  const $numeroPagina = document.querySelector('#numero-pagina-comienzo');
  const $botonPaginaAnterior = document.querySelector('.pagina-anterior');
  const $botonPaginaSiguiente = document.querySelector('.pagina-siguiente');
  if (Number($numeroPagina.innerText) === 43 || pagina === 44) {
    $botonPaginaAnterior.className = 'boton-pagina btn btn-dark pagina-anterior visible';
    $botonPaginaSiguiente.className = 'boton-pagina btn btn-dark pagina-siguiente oculto';
    $numeroPagina.innerText = 44;
    inicio(880, 18);
  } else {
    $botonPaginaAnterior.className = 'boton-pagina btn btn-dark pagina-anterior visible';
    $numeroPagina.innerText = Number($numeroPagina.innerText) + 1;
    inicio((Number($numeroPagina.innerText) - 1) * 20);
  }
}

const $botonAnteriorPagina = document.querySelector('.pagina-anterior');
const $botonSiguientePagina = document.querySelector('.pagina-siguiente');
const $botonUltimaPagina = document.querySelector('.ultima-pagina');

$botonAnteriorPagina.onclick = anteriorPagina;
$botonSiguientePagina.onclick = siguientePagina;
$botonUltimaPagina.addEventListener('click', () => {
  siguientePagina(44);
});
