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
    .then((resultadoLink) => resultadoLink.json())
    .then((resultadoJSON) => {
      asignarDatosPokemon(resultadoJSON);
    })
    .catch((error) => console.error('error', error));
}

export default async function inicio(pagina = 0, limite = 20) {
  asignarFrases(listadoFrases);
  const link = await fetch(`https://pokeapi-215911.firebaseapp.com/api/v2/pokemon?limit=${limite}&offset=${pagina}`);
  const respuesta = await link.json();
  const cantidadPokemones = respuesta.results.length;
  crearListaPokemones(cantidadPokemones);
  seleccionarPokemones(cantidadPokemones);
  asignarNombresListado(respuesta);
  asignarDatosPokemonSeleccionado(respuesta);
}

inicio();
