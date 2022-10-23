import {
  loadPokemonListFromLocalStorage,
  savePokemonListLocalStorage,
  loadPokemonLocalStorage,
  savePokemonLocalStorage,
} from "../storage/storage.js";
import { fetchPokemonListApi, fetchPokemonApi } from "../api/api.js";

export async function loadPokemon() {
  const $firstPokemonContainer = document
    .querySelectorAll(".list-pokemon")[0]
    .innerText.toLowerCase();
  let pokemonData;
  try {
    pokemonData = loadPokemonLocalStorage($firstPokemonContainer);
  } catch (e) {
    pokemonData = await fetchPokemonApi($firstPokemonContainer);
    savePokemonLocalStorage($firstPokemonContainer, pokemonData);
  }
  return pokemonData;
}

export async function loadPokemonList(limit, page) {
  try {
    return loadPokemonListFromLocalStorage(limit, page);
  } catch (e) {
    const pokemonList = await fetchPokemonListApi(limit, page);
    savePokemonListLocalStorage(limit, page, pokemonList);
    return pokemonList;
  }
}

export async function changeSelectedPokemon(name) {
  let result;
  try {
    result = loadPokemonLocalStorage(name);
  } catch (e) {
    result = await fetchPokemonApi(name);
    savePokemonLocalStorage(name, result);
  }
  return result;
}
