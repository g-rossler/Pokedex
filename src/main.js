/// <reference types="jquery"/>

// eslint-disable-next-line import/extensions
import { listadoFrases, asignarFrases } from './frases.js';

import {
  asignarDatosPokemon, crearListaPokemones, asignarNombresListado, seleccionarPokemones,
  // eslint-disable-next-line import/extensions
} from './ui.js';

function asignarDatosPokemonSeleccionado(resultado) {
  const link = resultado.results[0].url;
  const linkMejorado = link.replace('https://pokeapi.co/api/v2', 'https://pokeapi-215911.firebaseapp.com/api/v2');
  fetch(linkMejorado)
    .then((resultado1) => resultado1.json())
    .then((resultado1JSON) => {
      asignarDatosPokemon(resultado1JSON);
    })
    .catch((error) => console.error('error', error));
}

async function inicio(pagina = 0) {
  asignarFrases(listadoFrases);
  const link = await fetch(`https://pokeapi-215911.firebaseapp.com/api/v2/pokemon?limit=20&offset=${pagina}`);
  const respuesta = await link.json();
  const cantidadPokemones = respuesta.results.length;
  crearListaPokemones(cantidadPokemones);
  seleccionarPokemones(cantidadPokemones);
  asignarNombresListado(respuesta);
  asignarDatosPokemonSeleccionado(respuesta);
}

function anteriorPagina() {
  if (Number(document.querySelector('#numero-pagina-comienzo').innerText) === 2) {
    document.querySelector('.pagina-anterior').style.display = 'none';
  } else if (Number(document.querySelector('#numero-pagina-comienzo').innerText) === 44) {
    document.querySelector('.pagina-siguiente').style.display = 'inline-block';
  }

  const pagina = (Number(document.querySelector('#numero-pagina-comienzo').innerText) - 1) * 20;
  document.querySelector('#numero-pagina-comienzo').innerText = (pagina / 20);
  document.querySelector('#numero-pagina-final').innerText = (pagina / 20);
  inicio(pagina);
}

async function ultimaPagina() {
  document.querySelector('.pagina-anterior').style.display = 'inline-block';
  document.querySelector('.pagina-siguiente').style.display = 'none';
  const link = await fetch('https://pokeapi-215911.firebaseapp.com/api/v2/pokemon?limit=18&offset=880');
  const respuesta = await link.json();
  const cantidadPokemones = respuesta.results.length;
  crearListaPokemones(cantidadPokemones);
  seleccionarPokemones(cantidadPokemones);
  asignarNombresListado(respuesta);
  asignarDatosPokemonSeleccionado(respuesta);
  document.querySelector('#numero-pagina-comienzo').innerText = 44;
  document.querySelector('#numero-pagina-final').innerText = 44;
}

function siguientePagina() {
  if (Number(document.querySelector('#numero-pagina-comienzo').innerText) === 43) {
    ultimaPagina();
  } else {
    document.querySelector('.pagina-anterior').style.display = 'inline-block';
    const pagina = Number(document.querySelector('#numero-pagina-comienzo').innerText);
    document.querySelector('#numero-pagina-comienzo').innerText = pagina + 1;
    document.querySelector('#numero-pagina-final').innerText = pagina + 1;
    inicio((pagina + 1) * 20);
  }
}

document.querySelector('.pagina-siguiente').onclick = siguientePagina;
document.querySelector('.pagina-anterior').onclick = anteriorPagina;
document.querySelector('.ultima-pagina').onclick = ultimaPagina;

inicio();
