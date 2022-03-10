import { asignarFrases } from './frases.js';
import {
  asignarDatosPokemon, crearListaPokemones,
} from './ui.js';
import { cargarPokemones, cargarPokemon } from './servicios.js';
import activarPaginador from "./eventos.js"

export default async function inicio(pagina = 0, limite = 20) {
  asignarFrases();
  const resultado = await cargarPokemones(limite, pagina);
  const cantidadPokemones = resultado.results.length;
  crearListaPokemones(cantidadPokemones, resultado);
  const datosPokemon = await cargarPokemon();
  asignarDatosPokemon(datosPokemon);
  activarPaginador()
}
