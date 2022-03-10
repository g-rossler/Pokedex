// eslint-disable-next-line import/extensions
import { asignarFrases } from './frases.js';
import {
  asignarDatosPokemon, crearListaPokemones,
  // eslint-disable-next-line import/extensions
} from './ui.js';
// eslint-disable-next-line import/extensions
import { cargarPokemones, cargarPokemon } from './servicios.js';

export default async function inicio(pagina = 0, limite = 20) {
  asignarFrases();
  const resultado = await cargarPokemones(limite, pagina);
  const cantidadPokemones = resultado.results.length;
  crearListaPokemones(cantidadPokemones, resultado);
  const datosPokemon = await cargarPokemon();
  asignarDatosPokemon(datosPokemon);
}
