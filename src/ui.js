export function asignarDatosPokemon(resultado) {
  const nombre = document.querySelector('#especificaciones-nombre');
  nombre.textContent = resultado.name.toUpperCase();

  const codigo = document.querySelector('#especificaciones-codigo-valor');
  codigo.textContent = resultado.id;

  const $imagen = document.querySelector('#especificaciones-imagen');
  $imagen.src = resultado.sprites.front_default;

  const $spanTipo = document.querySelector('#especificaciones-tipo-valor');
  const $spanAltura = document.querySelector('#especificaciones-altura-valor');
  const $spanVida = document.querySelector('#especificaciones-vida-valor');
  const $spanAtaque = document.querySelector('#especificaciones-ataque-valor');
  const $spanDefensa = document.querySelector('#especificaciones-defensa-valor');
  const $spanPeso = document.querySelector('#especificaciones-peso-valor');
  const $spanAtaqueEspecial = document.querySelector('#especificaciones-ataque-especial-valor');
  const $spanDefensaEspecial = document.querySelector('#especificaciones-defensa-especial-valor');
  const $spanVelocidad = document.querySelector('#especificaciones-velocidad-valor');

  $spanAltura.textContent = resultado.height;
  $spanVida.textContent = resultado.stats[0].base_stat;
  $spanAtaque.textContent = resultado.stats[1].base_stat;
  $spanDefensa.textContent = resultado.stats[2].base_stat;
  $spanPeso.textContent = resultado.weight;
  $spanAtaqueEspecial.textContent = resultado.stats[3].base_stat;
  $spanDefensaEspecial.textContent = resultado.stats[4].base_stat;
  $spanVelocidad.textContent = resultado.stats[5].base_stat;

  let texto = '';
  resultado.types.forEach((elemento) => {
    texto = `${texto} ${elemento.type.name[0].toUpperCase()}${elemento.type.name.slice(1)}`;
  });

  $spanTipo.textContent = texto;
}

function cambiarPokemon(seleccion) {
  fetch(`https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/${seleccion}`)
    .then((resultado) => resultado.json())
    .then((resultadoJSON) => {
      asignarDatosPokemon(resultadoJSON);
    })
    .catch((error) => console.error('error', error));
}

export function seleccionarPokemones(cantidad) {
  const pokemonUno = document.querySelector('#lista-pokemon-1');
  const pokemonDos = document.querySelector('#lista-pokemon-2');
  const pokemonTres = document.querySelector('#lista-pokemon-3');
  const pokemonCuatro = document.querySelector('#lista-pokemon-4');
  const pokemonCinco = document.querySelector('#lista-pokemon-5');
  const pokemonSeis = document.querySelector('#lista-pokemon-6');
  const pokemonSiete = document.querySelector('#lista-pokemon-7');
  const pokemonOcho = document.querySelector('#lista-pokemon-8');
  const pokemonNueve = document.querySelector('#lista-pokemon-9');
  const pokemonDiez = document.querySelector('#lista-pokemon-10');
  const pokemonOnce = document.querySelector('#lista-pokemon-11');
  const pokemonDoce = document.querySelector('#lista-pokemon-12');
  const pokemonTrece = document.querySelector('#lista-pokemon-13');
  const pokemonCatorce = document.querySelector('#lista-pokemon-14');
  const pokemonQuince = document.querySelector('#lista-pokemon-15');
  const pokemonDieciseis = document.querySelector('#lista-pokemon-16');
  const pokemonDiecisiete = document.querySelector('#lista-pokemon-17');
  const pokemonDieciocho = document.querySelector('#lista-pokemon-18');

  pokemonUno.addEventListener('click', () => {
    document.querySelector('.seleccionado').className = 'lista-pokemon';
    pokemonUno.className = 'lista-pokemon seleccionado';
    cambiarPokemon(pokemonUno.innerText.toLowerCase());
  });
  pokemonDos.addEventListener('click', () => {
    document.querySelector('.seleccionado').className = 'lista-pokemon';
    pokemonDos.className = 'lista-pokemon seleccionado';
    cambiarPokemon(pokemonDos.innerText.toLowerCase());
  });
  pokemonTres.addEventListener('click', () => {
    document.querySelector('.seleccionado').className = 'lista-pokemon';
    pokemonTres.className = 'lista-pokemon seleccionado';
    cambiarPokemon(pokemonTres.innerText.toLowerCase());
  });
  pokemonCuatro.addEventListener('click', () => {
    document.querySelector('.seleccionado').className = 'lista-pokemon';
    pokemonCuatro.className = 'lista-pokemon seleccionado';
    cambiarPokemon(pokemonCuatro.innerText.toLowerCase());
  });
  pokemonCinco.addEventListener('click', () => {
    document.querySelector('.seleccionado').className = 'lista-pokemon';
    pokemonCinco.className = 'lista-pokemon seleccionado';
    cambiarPokemon(pokemonCinco.innerText.toLowerCase());
  });
  pokemonSeis.addEventListener('click', () => {
    document.querySelector('.seleccionado').className = 'lista-pokemon';
    pokemonSeis.className = 'lista-pokemon seleccionado';
    cambiarPokemon(pokemonSeis.innerText.toLowerCase());
  });
  pokemonSiete.addEventListener('click', () => {
    document.querySelector('.seleccionado').className = 'lista-pokemon';
    pokemonSiete.className = 'lista-pokemon seleccionado';
    cambiarPokemon(pokemonSiete.innerText.toLowerCase());
  });
  pokemonOcho.addEventListener('click', () => {
    document.querySelector('.seleccionado').className = 'lista-pokemon';
    pokemonOcho.className = 'lista-pokemon seleccionado';
    cambiarPokemon(pokemonOcho.innerText.toLowerCase());
  });
  pokemonNueve.addEventListener('click', () => {
    document.querySelector('.seleccionado').className = 'lista-pokemon';
    pokemonNueve.className = 'lista-pokemon seleccionado';
    cambiarPokemon(pokemonNueve.innerText.toLowerCase());
  });
  pokemonDiez.addEventListener('click', () => {
    document.querySelector('.seleccionado').className = 'lista-pokemon';
    pokemonDiez.className = 'lista-pokemon seleccionado';
    cambiarPokemon(pokemonDiez.innerText.toLowerCase());
  });
  pokemonOnce.addEventListener('click', () => {
    document.querySelector('.seleccionado').className = 'lista-pokemon';
    pokemonOnce.className = 'lista-pokemon seleccionado';
    cambiarPokemon(pokemonOnce.innerText.toLowerCase());
  });
  pokemonDoce.addEventListener('click', () => {
    document.querySelector('.seleccionado').className = 'lista-pokemon';
    pokemonDoce.className = 'lista-pokemon seleccionado';
    cambiarPokemon(pokemonDoce.innerText.toLowerCase());
  });
  pokemonTrece.addEventListener('click', () => {
    document.querySelector('.seleccionado').className = 'lista-pokemon';
    pokemonTrece.className = 'lista-pokemon seleccionado';
    cambiarPokemon(pokemonTrece.innerText.toLowerCase());
  });
  pokemonCatorce.addEventListener('click', () => {
    document.querySelector('.seleccionado').className = 'lista-pokemon';
    pokemonCatorce.className = 'lista-pokemon seleccionado';
    cambiarPokemon(pokemonCatorce.innerText.toLowerCase());
  });
  pokemonQuince.addEventListener('click', () => {
    document.querySelector('.seleccionado').className = 'lista-pokemon';
    pokemonQuince.className = 'lista-pokemon seleccionado';
    cambiarPokemon(pokemonQuince.innerText.toLowerCase());
  });
  pokemonDieciseis.addEventListener('click', () => {
    document.querySelector('.seleccionado').className = 'lista-pokemon';
    pokemonDieciseis.className = 'lista-pokemon seleccionado';
    cambiarPokemon(pokemonDieciseis.innerText.toLowerCase());
  });
  pokemonDiecisiete.addEventListener('click', () => {
    document.querySelector('.seleccionado').className = 'lista-pokemon';
    pokemonDiecisiete.className = 'lista-pokemon seleccionado';
    cambiarPokemon(pokemonDiecisiete.innerText.toLowerCase());
  });
  pokemonDieciocho.addEventListener('click', () => {
    document.querySelector('.seleccionado').className = 'lista-pokemon';
    pokemonDieciocho.className = 'lista-pokemon seleccionado';
    cambiarPokemon(pokemonDieciocho.innerText.toLowerCase());
  });

  if (cantidad === 20) {
    const pokemonDiecinueve = document.querySelector('#lista-pokemon-19');
    const pokemonVeinte = document.querySelector('#lista-pokemon-20');

    pokemonDiecinueve.addEventListener('click', () => {
      document.querySelector('.seleccionado').className = 'lista-pokemon';
      pokemonDiecinueve.className = 'lista-pokemon seleccionado';
      cambiarPokemon(pokemonDiecinueve.innerText.toLowerCase());
    });
    pokemonVeinte.addEventListener('click', () => {
      document.querySelector('.seleccionado').className = 'lista-pokemon';
      pokemonVeinte.className = 'lista-pokemon seleccionado';
      cambiarPokemon(pokemonVeinte.innerText.toLowerCase());
    });
  }
}

export function crearListaPokemones(cantidad) {
  if (document.querySelector('ul')) {
    document.querySelector('ul').remove();
  }
  const $cuadroLista = document.querySelector('#lista');
  const $lista = document.createElement('ul');
  for (let i = 1; i <= cantidad; i += 1) {
    const $cuadroPokemon = document.createElement('li');
    $cuadroPokemon.className = 'lista-pokemon';
    $cuadroPokemon.id = `lista-pokemon-${i}`;
    const $imgPokebola = document.createElement('img');
    $imgPokebola.className = 'poke-bola-imagen';
    $imgPokebola.src = 'Img/Poké_Ball_icon.svg.png';
    $imgPokebola.alt = 'poke-bola';
    $cuadroPokemon.appendChild($imgPokebola);
    const $nombrePokemon = document.createElement('span');
    $nombrePokemon.className = 'nombre-pokemon';
    $cuadroPokemon.appendChild($nombrePokemon);
    $lista.appendChild($cuadroPokemon);
  }
  $cuadroLista.appendChild($lista);
  document.querySelector('#lista-pokemon-1').className = 'lista-pokemon seleccionado';
}

export function asignarNombresListado(resultado) {
  const nombre = document.querySelectorAll('.nombre-pokemon');
  nombre.forEach((element, index) => {
    const elemento = element;
    elemento.textContent = resultado.results[index].name.toUpperCase();
  });
}
