function anteriorPagina() {
    let pagina = (Number(document.querySelector("#numero-pagina").innerText) - 2) * 20
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pagina}`)
        .then(resultado => resultado.json())
        .then(resultadoJSON => {


 
            asignarNombres(resultadoJSON);
            asignarImagenes(resultadoJSON);
            document.querySelector("#numero-pagina").innerText = (pagina / 20) + 1

        })
        .catch(error => console.error("error", error));

}

function siguientePagina() {
    let pagina = Number(document.querySelector("#numero-pagina").innerText) * 20
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pagina}`)
        .then(resultado => resultado.json())
        .then(resultadoJSON => {

            asignarNombres(resultadoJSON);
            asignarImagenes(resultadoJSON);
            document.querySelector("#numero-pagina").innerText = (pagina / 20) + 1

        })
        .catch(error => console.error("error", error));

}

function ultimaPagina() {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=1100`)
        .then(resultado => resultado.json())
        .then(resultadoJSON => {


            asignarNombres(resultadoJSON);
            asignarImagenes(resultadoJSON);
            document.querySelector("#numero-pagina").innerText = 56

        })
        .catch(error => console.error("error", error));
}

function controlPagina() {
    let pagina = Number(document.querySelector("#numero-pagina").innerText)
    if(pagina > 1) {
        anteriorPagina()
    } else {
        return false
    }
}
