import { asignarFrases } from './frases.js';
import {
  asignarDatosPokemon, crearListaPokemones,
} from './ui.js';
import { cargarPokemones, cargarPokemon } from './servicios.js';
import activarPaginador from "./eventos.js"

export async function crearPaginaPokedex(pagina = 0, limite = 20){
  asignarFrases();
  const listaPokemones = await cargarPokemones(limite, pagina);
  const cantidadPokemones = listaPokemones.results.length;
  crearListaPokemones(cantidadPokemones, listaPokemones);
  const datosPokemon = await cargarPokemon();
  asignarDatosPokemon(datosPokemon);
}


export async function inicioPokedex() {
  await crearPaginaPokedex()
  activarPaginador()
}
