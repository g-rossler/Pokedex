export async function fetchPokemonListApi(limit, page) {
  const apiLink = await fetch(
    `https://pokeapi-215911.firebaseapp.com/api/v2/pokemon?limit=${limit}&offset=${page}`
  );
  const responseJSON = apiLink.json();
  return responseJSON;
}

export async function fetchPokemonApi(name) {
  const apiLink = await fetch(
    `https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/${name}`
  );
  const responseJSON = apiLink.json();
  return responseJSON;
}
