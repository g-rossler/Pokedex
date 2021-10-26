function anteriorPagina() {
    if(Number(document.querySelector("#numero-pagina-comienzo").innerText) === 1) {
        return alert("Estas en la primera pagina")
    } else {
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
}

function siguientePagina() {
    if(Number(document.querySelector("#numero-pagina-comienzo").innerText) === 45) {
        return alert("Estas en la ultima pagina")
    } else {
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
    fetch(`https://pokeapi-215911.firebaseapp.com/api/v2/pokemon?limit=18&offset=880`)
        .then(resultado => resultado.json())
        .then(resultadoJSON => {
            let cantidadPokemones = resultadoJSON.results.length
            crearListaPokemones(cantidadPokemones)
            asignarNombres(resultadoJSON); 
            asignarDatos(resultadoJSON);
            document.querySelector("#numero-pagina-comienzo").innerText = 45
            document.querySelector("#numero-pagina-final").innerText = 45
        })
        .catch(error => console.error("error", error));
}





document.querySelector("#pagina-siguiente").onclick = siguientePagina
document.querySelector("#pagina-anterior").onclick = anteriorPagina
document.querySelector("#ultima-pagina").onclick = ultimaPagina
