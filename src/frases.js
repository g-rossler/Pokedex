let frases = {
    1: ["James", "No hay nada más fuerte que una amistad forjada en batalla."],
    2: ["Profesor Oak" ,"Al que madruga Dios lo ayuda, o en este caso, consigue un Pokémon."],
    3: ["Meowth", "Tenemos mucho en común, la misma tierra, el mismo aire, el mismo cielo, quizá si empezáramos a mirar lo que tenemos en común en vez de lo que nos hace diferentes, bueno, quién sabe..."],
    4: ["Misty","Psyduck, ¡eres tan tonto que no sabes lo tonto que eres!"],
    5: ["Mewtwo", "Las circunstancias en las que uno nace no tienen importancia, es lo que uno hace con el don de la vida lo que nos dice quiénes somos."],
    6: ["Rayquaza", "Hazte cargo de tu destino."],
    7: ["Grovyle", "Lo importante no es cuánto tiempo vives. Es lo que logras con tu vida."],
    8: [" Ash Ketchum", "Todo el mundo se equivoca de vez en cuando."],
    9: ["Ash Ketchum", "Verás, a veces los amigos tienen que irse, pero una parte de ellos se queda contigo."],
    10: ["Mariscal", "Incluso si pierdes en la batalla, si superas lo que has hecho antes, te has superado a ti mismo."]
}

function asignarFrases(frases) {
    let textoFrase = document.querySelector("#frase")
    let autorFrase = document.querySelector("#frase-autor")
    let numeroRandom = Math.ceil(Math.random() * 10)
    textoFrase.textContent = frases[`${numeroRandom}`][1]
    autorFrase.textContent = frases[`${numeroRandom}`][0]
}

asignarFrases(frases)


