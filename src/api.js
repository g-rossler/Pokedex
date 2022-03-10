export async function cargarPokemonesAPI(limite, pagina) {
  const link = await fetch(`https://pokeapi-215911.firebaseapp.com/api/v2/pokemon?limit=${limite}&offset=${pagina}`);
  const respuesta = await link.json();
  return respuesta;
}

export async function cargarPokemonAPI(nombre) {
  const link = await fetch(`https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/${nombre}`);
  const respuesta = link.json();
  return respuesta;
}
