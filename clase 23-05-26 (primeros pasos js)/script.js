const MI_CONSTANTE = "Intro a JS";
let mi_numero = 25;
let mi_boolean = true;
let mi_null = null;
let mi_objeto = {
  nombre: "manuel"
}

let completo = ["pan", "vienesa", "palta", "mayo", "tomate"];

let miNoDefinido; // camelCase / snake_case

let miFuncion = () => {}

let variable = "2"

// console.log(mi_objeto.apellido ? true : false)

// console.log(typeof variable, typeof parseFloat(variable))

// ciclo for

/* for(let i = 0; i <= 100; i++)   // i++
{
  if(i % 2 === 0) console.log(i)
} */

// metodos de arrays y objetos


let pokemon = [

  {
      nombre: 'Pikachu',
      tipo: 'Electrico'
  },
  {
      nombre: 'Charmander',
      tipo: 'Fuego',
  },
  {
      nombre: 'Bulbasaur',
      tipo: 'Planta'
  },
  {
      nombre: 'Squirtle',
      tipo: 'Agua'
  },
  {
      nombre: 'Charmeleon',
      tipo: 'Fuego'
  },
  {
      nombre: 'Weedle',
      tipo: 'bicho'
  },
  {
      nombre: 'Charizard',
      tipo: 'Fuego'
  }
]



let new_arr = pokemon.map((el_pokemon) => { return el_pokemon.nombre})

console.log(pokemon, new_arr)