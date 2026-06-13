const API = 'https://rickandmortyapi.com/api/character';

// funcion para obtener los personajes de la API
async function getCharacter() {
    // fetch es una funcion que nos permite hacer peticiones a la API
    // await es una palabra reservada que nos permite esperar a que la peticion se complete
    const response = await fetch(API);
    // json es un metodo que nos permite convertir la respuesta a un objeto JSON
    const data = await response.json();
    // regreso la respuesta de la API
    return data;
}

// funcion para pintar los personajes en el DOM (manipulacion del DOM)
async function render() {
    // obtengo los personajes de la API con la funcion de mas arriba
    const characters = await getCharacter();
    // le pregunto al HTML que me entregue un elemento con el id "container"
    const container = document.getElementById('container');

    // creo un div nuevo donde voy a meter los personajes
    const mi_div = document.createElement('div');

    // recorro el arreglo de los personajes y creo un div para cada uno
    characters.results.forEach(character => {
        // creo un h1 nuevo donde voy a meter el nombre del personaje
        const characterElement = document.createElement('h1');
        // le puedo agregar una clase llamada 'character' al h1
        characterElement.classList.add('character');
        // le agregar html puro para pintar el nombre del personaje al h1
        // usando los backticks `` para poder usar variables dentro del html
        characterElement.innerHTML = `<p class="color">${character.name}</p>`;

        // agrego el h1 nuevo al div nuevo
        mi_div.appendChild(characterElement);
        
    });

    // agrego el div ya listo y preparado al container
    container.appendChild(mi_div);
}

render();