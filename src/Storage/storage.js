export function cargarPokemonesLocalStorage(limite, pagina) {
  const id = `${limite}_${pagina}`;
  if (JSON.parse(localStorage.getItem(id)) === null) {
    throw new Error('No se encuentran los pokemones en el local Storage');
  }
  return JSON.parse(localStorage.getItem(id));
}

export function guardarPokemonesLocalStorage(limite, pagina, resultado) {
  const id = `${limite}_${pagina}`;
  localStorage.setItem(id, JSON.stringify(resultado));
}

export function guardarPokemonLocalStorage(id, resultado) {
  localStorage.setItem(id, JSON.stringify(resultado));
}

export function cargarPokemonLocalStorage(nombrePokemon) {
  if (JSON.parse(localStorage.getItem(nombrePokemon)) === null) {
    throw new Error(`No hay ${nombrePokemon} en local Storage`);
  }
  return JSON.parse(localStorage.getItem(nombrePokemon));
}
