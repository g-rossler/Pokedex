/// <reference types="jquery"/>

function asignarNombres(resultado){
    let nombre = document.querySelectorAll(".nombre-pokemon")
    nombre.forEach((element, index) => {
        element.textContent = resultado.results[index].name.toUpperCase()
    })
}

function asignarCodigo(resultado){
    let codigo = document.querySelectorAll("#especificaciones-codigo")
    codigo.forEach((element, index) => {
        element.textContent = resultado.results[index]
    })
}


function asignarImagen(resultado){
    let imagen = document.querySelector("#especificaciones-imagen")
        let link = resultado.results[0].url;
        let linkMejorado = link.replace("https://pokeapi.co/api/v2", "https://pokeapi-215911.firebaseapp.com/api/v2")
        fetch(linkMejorado)
        .then(resultado1 => resultado1.json())
        .then(resultado1JSON => {
            imagen.src = resultado1JSON.sprites.front_default
        })
        .catch(error => console.error("error", error))
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



function asignarNombre(resultado) {
    let nombre = document.querySelector("#especificaciones-nombre")
    nombre.textContent = resultado.results[0].name.toUpperCase()
}

function datosPrimeraPagina() {
    fetch("https://pokeapi-215911.firebaseapp.com/api/v2/pokemon?limit=20&offset=0")
        .then(resultado => resultado.json())
        .then(resultadoJSON => {


            asignarCodigo(resultadoJSON)
            asignarNombres(resultadoJSON);
            asignarNombre(resultadoJSON)
            asignarImagen(resultadoJSON);

        })
        .catch(error => console.error("error", error));
}

datosPrimeraPagina()



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