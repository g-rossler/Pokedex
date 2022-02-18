export const listadoFrases = [
  {
    autor: 'James',
    frase: 'No hay nada más fuerte que una amistad forjada en batalla.',
  },
  {
    autor: 'Profesor Oak',
    frase: 'Al que madruga Dios lo ayuda, o en este caso, consigue un Pokémon.',
  },
  {
    autor: 'Meowth',
    frase: 'Tenemos mucho en común, la misma tierra, el mismo aire, el mismo cielo, quizá si empezáramos a mirar lo que tenemos en común en vez de lo que nos hace diferentes, bueno, quién sabe...',
  },
  {
    autor: 'Misty',
    frase: 'Psyduck, ¡eres tan tonto que no sabes lo tonto que eres!',
  },
  {
    autor: 'Mewtwo',
    frase: 'Las circunstancias en las que uno nace no tienen importancia, es lo que uno hace con el don de la vida lo que nos dice quiénes somos.',
  },
  {
    autor: 'Rayquaza',
    frase: 'Hazte cargo de tu destino.',
  },
  {
    autor: 'Grovyle',
    frase: 'Lo importante no es cuánto tiempo vives. Es lo que logras con tu vida.',
  },
  {
    autor: 'Ash Ketchum',
    frase: 'Todo el mundo se equivoca de vez en cuando.',
  },
  {
    autor: 'Ash Ketchum',
    frase: 'Verás, a veces los amigos tienen que irse, pero una parte de ellos se queda contigo.',
  },
  {
    autor: 'Mariscal',
    frase: 'Incluso si pierdes en la batalla, si superas lo que has hecho antes, te has superado a ti mismo.',
  },
];

export function asignarFrases(frases) {
  const textoFrase = document.querySelector('#frase');
  const autorFrase = document.querySelector('#frase-autor');
  const numeroRandom = Math.floor(Math.random() * 10);
  textoFrase.textContent = frases[numeroRandom].autor;
  autorFrase.textContent = frases[numeroRandom].frase;
}
