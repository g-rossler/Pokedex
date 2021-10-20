/// <reference types="jquery"/>

function asignarNombres(resultado){
    let nombre = document.querySelectorAll(".nombre-pokemon")
    nombre.forEach((element, index) => {
        element.textContent = resultado.results[index].name.toUpperCase()
    })
}

function asignarCodigo(resultado){
    let codigo = document.querySelector("#especificaciones-codigo-valor")
    codigo.textContent = resultado.id
}

function asignarImagen(resultado) {
    let $imagen = document.querySelector("#especificaciones-imagen")
    $imagen.src = resultado.sprites.front_default
}

function asignarDatosPokemon(resultado){
    let $spanTipo = document.querySelector("#especificaciones-tipo-valor")
    let $spanAltura = document.querySelector("#especificaciones-altura-valor")
    let $spanVida = document.querySelector("#especificaciones-vida-valor")
    let $spanAtaque = document.querySelector("#especificaciones-ataque-valor")
    let $spanDefensa = document.querySelector("#especificaciones-defensa-valor")
    let $spanPeso = document.querySelector("#especificaciones-peso-valor")
    let $spanAtaqueEspecial = document.querySelector("#especificaciones-ataque-especial-valor")
    let $spanDefensaEspecial = document.querySelector("#especificaciones-defensa-especial-valor")
    let $spanVelocidad = document.querySelector("#especificaciones-velocidad-valor")

    $spanAltura.textContent = resultado.height
    $spanVida.textContent = resultado.stats[0].base_stat
    $spanAtaque.textContent = resultado.stats[1].base_stat
    $spanDefensa.textContent = resultado.stats[2].base_stat
    $spanPeso.textContent = resultado.weight
    $spanAtaqueEspecial.textContent = resultado.stats[3].base_stat
    $spanDefensaEspecial.textContent = resultado.stats[4].base_stat
    $spanVelocidad.textContent = resultado.stats[5].base_stat

    let texto = ""

   resultado.types.forEach(elemento => {
        texto = texto + " " + elemento.type.name[0].toUpperCase() + elemento.type.name.slice(1)
    } )
    
    $spanTipo.textContent = texto
}

function asignarDatos(resultado){
    
        let link = resultado.results[0].url;
        let linkMejorado = link.replace("https://pokeapi.co/api/v2", "https://pokeapi-215911.firebaseapp.com/api/v2")
        fetch(linkMejorado)
        .then(resultado1 => resultado1.json())
        .then(resultado1JSON => {
            asignarImagen(resultado1JSON)
            asignarDatosPokemon(resultado1JSON)
            asignarCodigo(resultado1JSON)
        })
        .catch(error => console.error("error", error))
}

function asignarNombre(resultado) {
    let nombre = document.querySelector("#especificaciones-nombre")
    nombre.textContent = resultado.results[0].name.toUpperCase()
}

function datosPrimeraPagina() {
    fetch("https://pokeapi-215911.firebaseapp.com/api/v2/pokemon?limit=20&offset=0")
        .then(resultado => resultado.json())
        .then(resultadoJSON => {


            
            asignarNombres(resultadoJSON);
            asignarNombre(resultadoJSON)
            asignarDatos(resultadoJSON);

        })
        .catch(error => console.error("error", error));
}

function cambiarPokemon($seleccion) {
    $seleccion.onclick = function(e) {
        const $elemento = e.target
        
    }
}

let $seleccion = document.querySelectorAll(".lista-pokemon") 


datosPrimeraPagina()
cambiarPokemon($seleccion) 




document.querySelector("#pagina-siguiente").onclick = siguientePagina
document.querySelector("#pagina-anterior").onclick = controlPagina
document.querySelector("#ultima-pagina").onclick = ultimaPagina



