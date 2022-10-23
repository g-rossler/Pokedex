import { changeSelectedPokemon } from "../service/service.js";
import { Pokemon } from "../entities/entities.js";

const pokeBolaImg = new URL("../img/PokeBall.png", import.meta.url);
const errorImg = new URL("../img/Error_img.jpg", import.meta.url);


export function printPokemonData(pokemonData) {
  const pokemon = new Pokemon(pokemonData);

  const $pokemonName = document.querySelector("#stats-name");
  const $pokemonID = document.querySelector("#stats-id-value");
  const $pokemonHeight = document.querySelector("#stats-height-value");
  const $pokemonHealth = document.querySelector("#stats-health-value");
  const $pokemonAttack = document.querySelector("#stats-attack-value");
  const $pokemonDefence = document.querySelector("#stats-defence-value");
  const $pokemonWeight = document.querySelector("#stats-weight-value");
  const $pokemonSpecialAttack = document.querySelector(
    "#stats-attack-special-value"
  );
  const $pokemonSpecialDefence = document.querySelector(
    "#stats-defence-special-value"
  );
  const $pokemonSpeed = document.querySelector("#stats-speed-value");
  const $pokemonType = document.querySelector("#stats-type-value");
  const $pokemonImage = document.querySelector("#stats-image");

  $pokemonName.textContent = pokemon.name;
  $pokemonID.textContent = pokemon.id;
  $pokemonImage.src = pokemon.image;
  $pokemonHeight.textContent = pokemon.height;
  $pokemonHealth.textContent = pokemon.health;
  $pokemonAttack.textContent = pokemon.attack;
  $pokemonDefence.textContent = pokemon.defence;
  $pokemonWeight.textContent = pokemon.weight;
  $pokemonSpecialAttack.textContent = pokemon.specialAttack;
  $pokemonSpecialDefence.textContent = pokemon.specialDefence;
  $pokemonSpeed.textContent = pokemon.speed;

  let typeText = "";
  pokemon.type.forEach((element) => {
    typeText = `${typeText} ${element.type.name[0].toUpperCase()}${element.type.name.slice(
      1
    )}`;
  });
  $pokemonType.textContent = typeText;

  if (pokemon.image === null) {
    $pokemonImage.src = errorImg;
  }
}

function printPokemonNameList(pokemonList) {
  const $containerPokemonName = document.querySelectorAll(".pokemon-name");
  $containerPokemonName.forEach((element, index) => {
    element.textContent = pokemonList.results[index].name.toUpperCase();
  });
}

function createList(quantityPokemons) {
  if (document.querySelector("ul")) {
    document.querySelector("ul").remove();
  }
  const $listContainer = document.querySelector("#list");
  const $list = document.createElement("ul");
  $list.className = "list-container";
  for (let i = 1; i <= quantityPokemons; i += 1) {
    const $pokemonElement = document.createElement("li");
    $pokemonElement.className = "list-pokemon";
    $pokemonElement.id = `list-pokemon-${i}`;
    const $imgPokebola = document.createElement("img");
    $imgPokebola.className = "pokebola-image";
    $imgPokebola.src = pokeBolaImg;
    $imgPokebola.alt = "Pokebola image";
    $pokemonElement.appendChild($imgPokebola);
    const $pokemonName = document.createElement("span");
    $pokemonName.className = "pokemon-name";
    $pokemonElement.appendChild($pokemonName);
    $pokemonElement.addEventListener("click", async () => {
      document.querySelector(".selected-pokemon").className = "list-pokemon";
      $pokemonElement.className = "list-pokemon selected-pokemon";
      const result = await changeSelectedPokemon(
        $pokemonName.innerText.toLowerCase()
      );
      printPokemonData(result);
    });
    $list.appendChild($pokemonElement);
  }
  $listContainer.appendChild($list);
  document.querySelector("#list-pokemon-1").className =
    "list-pokemon selected-pokemon";
}

export function createPokemonList(pokemonQuantity, pokemonList) {
  createList(pokemonQuantity);
  printPokemonNameList(pokemonList);
}

export function changePagerButtonsVisibility(pageNumber) {
  const $buttonAnteriorPagina = document.querySelector(
    ".pagination__button--previous-page"
  );
  const $buttonSiguientePagina = document.querySelector(
    ".pagination__button--next-page"
  );
  const $buttonUltimaPagina = document.querySelector(
    ".pagination__button--last-page"
  );

  switch (pageNumber) {
    case 1:
      $buttonAnteriorPagina.className =
        "btn btn-dark pagination__button--previous-page page-button hide";
      break;
    case 56:
      $buttonAnteriorPagina.className =
        "btn btn-dark pagination__button--previous-page page-button";
      $buttonSiguientePagina.className =
        "btn btn-dark pagination__button--next-page page-button hide";
      $buttonUltimaPagina.className =
        "btn btn-dark pagination__button--last-page page-button hide";
      break;
    default:
      $buttonAnteriorPagina.className =
        "btn btn-dark pagination__button--previous-page page-button";
      $buttonSiguientePagina.className =
        "btn btn-dark pagination__button--next-page page-button";
      $buttonUltimaPagina.className =
        "btn btn-dark pagination__button--last-page page-button";
      break;
  }
}

export function changePageNumber(action = "last") {
  const $pageNumber = document.querySelector("#page-number");
  if (action === "next") {
    $pageNumber.innerText = Number($pageNumber.innerText) + 1;
  } else if (action === "previous") {
    $pageNumber.innerText = Number($pageNumber.innerText) - 1;
  } else {
    $pageNumber.innerText = 56;
  }
}
