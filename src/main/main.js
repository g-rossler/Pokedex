import addQuote from "../quote/quote.js";
import { printPokemonData, createPokemonList } from "../ui/ui.js";
import { loadPokemonList, loadPokemon } from "../service/service.js";
import activatePager from "../events/events.js";

export async function createPokedexPage(page = 0, limit = 20) {
  addQuote();
  const pokemonList = await loadPokemonList(limit, page);
  const pokemonQuantity = pokemonList.results.length;
  createPokemonList(pokemonQuantity, pokemonList);
  const pokemonData = await loadPokemon();
  printPokemonData(pokemonData);
}

export async function startPokedex() {
  await createPokedexPage();
  activatePager();
}
