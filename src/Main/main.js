import asignarFrases from '../Frases/frases.js';
import {
  asignarDatosPokemon, crearListaPokemones,
} from '../UI/ui.js';
import { cargarPokemones, cargarPokemon } from '../Servicios/servicios.js';
import activarPaginador from "../Eventos/eventos.js"

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
