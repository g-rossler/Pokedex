import { createPokedexPage } from "../main/main.js";
import { changePagerButtonsVisibility, changePageNumber } from "../ui/ui.js";

function findPageNumber() {
  const $pageNumber = document.querySelector("#page-number");
  return Number($pageNumber.innerText);
}

function changePage(text, pageNumber) {
  if (text === "Next Page") {
    changePageNumber("next");
    createPokedexPage(pageNumber * 20);
  } else if (text === "Previous Page") {
    changePageNumber("previous");
    createPokedexPage((pageNumber - 2) * 20);
  } else {
    changePageNumber();
    createPokedexPage(1120);
  }
}

function handleChangePage(text) {
  let pageNumber = findPageNumber();
  changePage(text, pageNumber);
  pageNumber = findPageNumber();
  changePagerButtonsVisibility(pageNumber);
}

export default function activatePager() {
  const $buttonAnteriorPagina = document.querySelector(
    ".pagination__button--previous-page"
  );
  const $buttonSiguientePagina = document.querySelector(
    ".pagination__button--next-page"
  );
  const $buttonUltimaPagina = document.querySelector(
    ".pagination__button--last-page"
  );

  $buttonSiguientePagina.addEventListener("click", (e) => {
    handleChangePage(e.target.innerText);
  });

  $buttonAnteriorPagina.addEventListener("click", (e) => {
    handleChangePage(e.target.innerText);
  });

  $buttonUltimaPagina.addEventListener("click", (e) => {
    handleChangePage(e.target.innerText);
  });
}
