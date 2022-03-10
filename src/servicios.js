import {
  cargarPokemonesLocalStorage, guardarPokemonesLocalStorage, cargarPokemonLocalStorage,
  guardarPokemonLocalStorage,
} from './storage.js';
import { cargarPokemonesAPI, cargarPokemonAPI } from './api.js';

export async function cargarPokemon() {
  const nombre = document.querySelectorAll('.lista-pokemon')[0].innerText.toLowerCase();
  let datos;
  try {
    datos = cargarPokemonLocalStorage(nombre);
  } catch (e) {
    datos = await cargarPokemonAPI(nombre);
    guardarPokemonLocalStorage(nombre, datos);
  }
  return datos;
}

export async function cargarPokemones(limite, pagina) {
  try {
    return cargarPokemonesLocalStorage(limite, pagina);
  } catch (e) {
    const pokemones = await cargarPokemonesAPI(limite, pagina);
    guardarPokemonesLocalStorage(limite, pagina, pokemones);
    return pokemones;
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
