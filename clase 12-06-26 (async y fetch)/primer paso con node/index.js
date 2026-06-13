const helloWorld = require('hello-world-npm');
const axios = require('axios');
const API = 'https://rickandmortyapi.com/api/character';

// EJEMPLO DE USO DE UNA DEPENDENCIA NPM (axios)
axios.get(API + '?page=1')
     .then((res) => 
        {
            console.log(res.data);
        }
    )

// EJEMPLO DE USO DE UNA DEPENDENCIA NPM (hello-world-npm)
console.log(helloWorld());

// EJEMPLO DE HERENCIA (PROGRAMACION ORIENTADA A OBJETOS)

class Figura {
    constructor (color, altura, anchura) {
        this.altura = altura;
        this.anchura = anchura;
        this.color = color; 
    }
    
    obtenerColor(){
        console.log("soy de color:", this.color)
    }
}

class Triangulo extends Figura {
    constructor (color, altura, anchura, lados) {
        super (color, altura, anchura)
        this.lados = lados;
    }
    obtenerArea () {
        return this.altura * this.anchura / 2
    }
}

class Cuadrado extends Figura {
    constructor (color, altura, anchura, lados) {
        super (color, altura, anchura)
        this.lados = lados;
    }
    obtenerArea () {
        return this.altura * this.anchura
    }
}

const miTriangulo = new Triangulo("azul", 2, 4, 3);

console.log(miTriangulo.obtenerColor());
console.log('area es: ', miTriangulo.obtenerArea());