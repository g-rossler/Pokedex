export function loadPokemonListFromLocalStorage(limit, page) {
  const id = `${limit}_${page}`;
  if (JSON.parse(localStorage.getItem(id)) === null) {
    throw new Error("The Pokemon list was not found in local storage");
  }
  return JSON.parse(localStorage.getItem(id));
}

export function savePokemonListLocalStorage(limit, page, result) {
  const id = `${limit}_${page}`;
  localStorage.setItem(id, JSON.stringify(result));
}

export function savePokemonLocalStorage(id, result) {
  localStorage.setItem(id, JSON.stringify(result));
}

export function loadPokemonLocalStorage(pokemonName) {
  if (JSON.parse(localStorage.getItem(pokemonName)) === null) {
    throw new Error(`There is no ${pokemonName} in local storage`);
  }
  return JSON.parse(localStorage.getItem(pokemonName));
}
