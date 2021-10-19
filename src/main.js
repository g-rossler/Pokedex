/// <reference types="jquery"/>

function asignarNombres(resultado){
    let nombre = document.querySelectorAll(".nombre-pokemon")
    nombre.forEach((element, index) => {
        element.textContent = resultado.results[index].name.toUpperCase()
    })
}

function mostrarDetallesPokemon() {
    console.log("hola")
    document.querySelector("#ventana-detalles-pokemon").style.display = "block"
}

function eliminarCuadros(){
    document.querySelectorAll(".col").forEach((elemento) => {
    elemento.remove()
    })
}



function asignarImagenes(resultado){
    let imagen = document.querySelectorAll(".pokemones-imagen")
    imagen.forEach((element, index) => {
        let link = resultado.results[index].url;
        fetch(link)
        .then(resultado1 => resultado1.json())
        .then(resultado1JSON => {
            element.src = resultado1JSON.sprites.front_default
        })
        .catch(error => console.error("error", error))
    })
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

function datosPrimeraPagina() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
        .then(resultado => resultado.json())
        .then(resultadoJSON => {



            asignarNombres(resultadoJSON);
            asignarImagenes(resultadoJSON);

        })
        .catch(error => console.error("error", error));
}

datosPrimeraPagina()


document.querySelectorAll(".btn-info").onclick = mostrarDetallesPokemon
document.querySelector("#pagina-siguiente").onclick = siguientePagina
document.querySelector("#pagina-anterior").onclick = controlPagina
document.querySelector("#ultima-pagina").onclick = ultimaPagina



/*

function asignarImagenes(resultado){
    let imagen = document.querySelectorAll(".pokemones-imagen")
    imagen.forEach((element, index) => {
        let link = resultado.results[index].url;
        fetch(link)
        .then(resultado1 => resultado1.json())
        .then(resultado1JSON => {
            element.src = resultado1JSON.sprites.front_default
        })
        .catch(error => console.error("error", error))
    })
}

*/