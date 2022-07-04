import {
  cargarPokemonesLocalStorage, guardarPokemonesLocalStorage, cargarPokemonLocalStorage,
  guardarPokemonLocalStorage,
} from './storage.js';
import { cargarPokemonesAPI, cargarPokemonAPI } from './api.js';

export async function cargarPokemon() {
  const containerPrimerPokemon = document.querySelectorAll('.lista-pokemon')[0].innerText.toLowerCase();
  let datosPokemon;
  try {
    datosPokemon = cargarPokemonLocalStorage(containerPrimerPokemon);
  } catch (e) {
    datosPokemon = await cargarPokemonAPI(containerPrimerPokemon);
    guardarPokemonLocalStorage(containerPrimerPokemon, datosPokemon);
  }
  return datosPokemon;
}

export async function cargarPokemones(limite, pagina) {
  try {
    return cargarPokemonesLocalStorage(limite, pagina);
  } catch (e) {
    const listaPokemones = await cargarPokemonesAPI(limite, pagina);
    guardarPokemonesLocalStorage(limite, pagina, listaPokemones);
    return listaPokemones;
  }
}

export async function cambiarPokemon(nombre) {
  let resultado;
  try {
    resultado = cargarPokemonLocalStorage(nombre);
  } catch (e) {
    resultado = await cargarPokemonAPI(nombre);
    guardarPokemonLocalStorage(nombre, resultado);
  }
  return resultado;
}
