function anteriorPagina() {
    if(Number(document.querySelector("#numero-pagina-comienzo").innerText) === 2) {
        document.querySelector(".pagina-anterior").style.display = "none"
    } else if(Number(document.querySelector("#numero-pagina-comienzo").innerText) === 44){
        document.querySelector(".pagina-siguiente").style.display = "inline-block"
    }

    let pagina = (Number(document.querySelector("#numero-pagina-comienzo").innerText) - 1) * 20
    fetch(`https://pokeapi-215911.firebaseapp.com/api/v2/pokemon?limit=20&offset=${pagina}`)
        .then(resultado => resultado.json())
        .then(resultadoJSON => {
            let cantidadPokemones = resultadoJSON.results.length
            crearListaPokemones(cantidadPokemones)
            asignarNombres(resultadoJSON);
            asignarDatos(resultadoJSON);
            document.querySelector("#numero-pagina-comienzo").innerText = (pagina / 20) 
            document.querySelector("#numero-pagina-final").innerText = (pagina / 20) 

        })
        .catch(error => console.error("error", error));
    
}

function siguientePagina() {
    if(Number(document.querySelector("#numero-pagina-comienzo").innerText) === 43) {
        document.querySelector(".pagina-siguiente").style.display = "none"
        document.querySelector(".pagina-anterior").style.display = "inline-block"
        let pagina = Number(document.querySelector("#numero-pagina-comienzo").innerText) * 20
        fetch(`https://pokeapi-215911.firebaseapp.com/api/v2/pokemon?limit=20&offset=${pagina}`)
            .then(resultado => resultado.json())
            .then(resultadoJSON => {
                let cantidadPokemones = resultadoJSON.results.length
                crearListaPokemones(cantidadPokemones)
                asignarNombres(resultadoJSON);
                asignarDatos(resultadoJSON);
                document.querySelector("#numero-pagina-comienzo").innerText = (pagina / 20) + 1
                document.querySelector("#numero-pagina-final").innerText = (pagina / 20) + 1
    
            })
            .catch(error => console.error("error", error));
    } else {
        document.querySelector(".pagina-anterior").style.display = "inline-block"
        let pagina = Number(document.querySelector("#numero-pagina-comienzo").innerText) * 20
        fetch(`https://pokeapi-215911.firebaseapp.com/api/v2/pokemon?limit=20&offset=${pagina}`)
            .then(resultado => resultado.json())
            .then(resultadoJSON => {
                let cantidadPokemones = resultadoJSON.results.length
                crearListaPokemones(cantidadPokemones)
                asignarNombres(resultadoJSON);
                asignarDatos(resultadoJSON);
                document.querySelector("#numero-pagina-comienzo").innerText = (pagina / 20) + 1
                document.querySelector("#numero-pagina-final").innerText = (pagina / 20) + 1
    
            })
            .catch(error => console.error("error", error));
    }
    

}

function ultimaPagina() {
    document.querySelector(".pagina-anterior").style.display = "inline-block"
    document.querySelector(".pagina-siguiente").style.display = "none"
    fetch(`https://pokeapi-215911.firebaseapp.com/api/v2/pokemon?limit=18&offset=880`)
        .then(resultado => resultado.json())
        .then(resultadoJSON => {
            let cantidadPokemones = resultadoJSON.results.length
            crearListaPokemones(cantidadPokemones)
            asignarNombres(resultadoJSON); 
            asignarDatos(resultadoJSON);
            document.querySelector("#numero-pagina-comienzo").innerText = 44
            document.querySelector("#numero-pagina-final").innerText = 44
        })
        .catch(error => console.error("error", error));
}





document.querySelector(".pagina-siguiente").onclick = siguientePagina
document.querySelector(".pagina-anterior").onclick = anteriorPagina
document.querySelector(".ultima-pagina").onclick = ultimaPagina
