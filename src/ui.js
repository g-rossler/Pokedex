// eslint-disable-next-line import/extensions
import { cambiarPokemon } from './servicios.js';

const $botonAnteriorPagina = document.querySelector('.anterior-pagina');
const $botonSiguientePagina = document.querySelector('.siguiente-pagina');
const $botonUltimaPagina = document.querySelector('.ultima-pagina');

class Pokemon {
  constructor(datos) {
    this.nombre = datos.name.toUpperCase();
    this.codigo = datos.id;
    this.imagen = datos.sprites.front_default;
    this.altura = datos.height;
    this.peso = datos.weight;
    this.vida = datos.stats[0].base_stat;
    this.ataque = datos.stats[1].base_stat;
    this.defensa = datos.stats[2].base_stat;
    this.ataqueEspecial = datos.stats[3].base_stat;
    this.defensaEspecial = datos.stats[4].base_stat;
    this.velocidad = datos.stats[5].base_stat;
    this.tipo = datos.types;
  }
}

export function asignarDatosPokemon(datos) {
  const pokemon = new Pokemon(datos);

  const $nombrePokemon = document.querySelector('#especificaciones-nombre');
  const $codigoPokemon = document.querySelector('#especificaciones-codigo-valor');
  const $AlturaPokemon = document.querySelector('#especificaciones-altura-valor');
  const $VidaPokemon = document.querySelector('#especificaciones-vida-valor');
  const $AtaquePokemon = document.querySelector('#especificaciones-ataque-valor');
  const $DefensaPokemon = document.querySelector('#especificaciones-defensa-valor');
  const $PesoPokemon = document.querySelector('#especificaciones-peso-valor');
  const $AtaqueEspecialPokemon = document.querySelector('#especificaciones-ataque-especial-valor');
  const $DefensaEspecialPokemon = document.querySelector('#especificaciones-defensa-especial-valor');
  const $VelocidadPokemon = document.querySelector('#especificaciones-velocidad-valor');
  const $TipoPokemon = document.querySelector('#especificaciones-tipo-valor');
  const $imagenPokemon = document.querySelector('#especificaciones-imagen');

  $nombrePokemon.textContent = pokemon.nombre;
  $codigoPokemon.textContent = pokemon.codigo;
  $imagenPokemon.src = pokemon.imagen;
  $AlturaPokemon.textContent = pokemon.altura;
  $VidaPokemon.textContent = pokemon.vida;
  $AtaquePokemon.textContent = pokemon.ataque;
  $DefensaPokemon.textContent = pokemon.defensa;
  $PesoPokemon.textContent = pokemon.peso;
  $AtaqueEspecialPokemon.textContent = pokemon.ataqueEspecial;
  $DefensaEspecialPokemon.textContent = pokemon.defensaEspecial;
  $VelocidadPokemon.textContent = pokemon.velocidad;

  let texto = '';
  pokemon.tipo.forEach((elemento) => {
    texto = `${texto} ${elemento.type.name[0].toUpperCase()}${elemento.type.name.slice(1)}`;
  });
  $TipoPokemon.textContent = texto;

  if (pokemon.imagen === null) {
    $imagenPokemon.src = 'Img/Error_img.jpg';
  }
}

function asignarNombresListado(resultado) {
  const nombre = document.querySelectorAll('.nombre-pokemon');
  nombre.forEach((element, index) => {
    const elemento = element;
    elemento.textContent = resultado.results[index].name.toUpperCase();
  });
}

function crearLista(cantidad) {
  if (document.querySelector('ul')) {
    document.querySelector('ul').remove();
  }
  const $cuadroLista = document.querySelector('#lista');
  const $lista = document.createElement('ul');
  $lista.className = 'lista-contenedor';
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
    $cuadroPokemon.addEventListener('click', async () => {
      document.querySelector('.seleccionado').className = 'lista-pokemon';
      $cuadroPokemon.className = 'lista-pokemon seleccionado';
      const resultado = await cambiarPokemon($nombrePokemon.innerText.toLowerCase());
      asignarDatosPokemon(resultado);
    });
    $lista.appendChild($cuadroPokemon);
  }
  $cuadroLista.appendChild($lista);
  document.querySelector('#lista-pokemon-1').className = 'lista-pokemon seleccionado';
}

export function crearListaPokemones(cantidad, resultado) {
  crearLista(cantidad);
  asignarNombresListado(resultado);
}

export function verificarVisibilidadBotonesPaginador(numeroPagina) {
  switch (numeroPagina) {
    case 1:
      $botonAnteriorPagina.className = 'btn btn-dark anterior-pagina boton-pagina oculto';
      break;
    case 56:
      $botonAnteriorPagina.className = 'btn btn-dark anterior-pagina boton-pagina';
      $botonSiguientePagina.className = 'btn btn-dark siguiente-pagina boton-pagina oculto';
      $botonUltimaPagina.className = 'btn btn-dark ultima-pagina boton-pagina oculto';
      break;
    default:
      $botonAnteriorPagina.className = 'btn btn-dark anterior-pagina boton-pagina';
      $botonSiguientePagina.className = 'btn btn-dark siguiente-pagina boton-pagina';
      $botonUltimaPagina.className = 'btn btn-dark ultima-pagina boton-pagina';
      break;
  }
}

export function modificarNumeroPagina(accion = 'ultimo') {
  const $numeroPagina = document.querySelector('#numero-pagina');
  if (accion === 'mas') {
    $numeroPagina.innerText = Number($numeroPagina.innerText) + 1;
  } else if (accion === 'menos') {
    $numeroPagina.innerText = Number($numeroPagina.innerText) - 1;
  } else {
    $numeroPagina.innerText = 56;
  }
}
