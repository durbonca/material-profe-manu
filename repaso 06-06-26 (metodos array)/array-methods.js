const methods = [
  {
    name: 'push',
    desc: 'Agrega uno o más elementos al FINAL del array. Modifica el original.',
    syntax: 'arr.push(elemento1, elemento2, ...)',
    code: `let nums = [1, 2, 3];
nums.push(4, 5);
console.log(nums); // → [1, 2, 3, 4, 5]`,
    tag: { label: 'muta', class: 'tag-mut' }
  },
  {
    name: 'pop',
    desc: 'Elimina el ÚLTIMO elemento y lo devuelve. Modifica el original.',
    syntax: 'const ultimo = arr.pop()',
    code: `let nums = [1, 2, 3];
let ultimo = nums.pop();
console.log(ultimo);  // → 3
console.log(nums);    // → [1, 2]`,
    tag: { label: 'muta', class: 'tag-mut' }
  },
  {
    name: 'shift',
    desc: 'Elimina el PRIMER elemento y lo devuelve. Modifica el original.',
    syntax: 'const primero = arr.shift()',
    code: `let nums = [1, 2, 3];
let primero = nums.shift();
console.log(primero); // → 1
console.log(nums);    // → [2, 3]`,
    tag: { label: 'muta', class: 'tag-mut' }
  },
  {
    name: 'unshift',
    desc: 'Agrega uno o más elementos al PRINCIPIO. Modifica el original.',
    syntax: 'arr.unshift(elemento1, ...)',
    code: `let nums = [2, 3];
nums.unshift(0, 1);
console.log(nums); // → [0, 1, 2, 3]`,
    tag: { label: 'muta', class: 'tag-mut' }
  },
  {
    name: 'forEach',
    desc: 'Ejecuta una función por cada elemento. No devuelve nada (undefined).',
    syntax: 'arr.forEach((elemento, índice) => { ... })',
    code: `let nums = [10, 20, 30];
nums.forEach((n, i) => {
  console.log(\`Índice \${i}: \${n}\`);
});
// → Índice 0: 10
// → Índice 1: 20
// → Índice 2: 30`,
    tag: { label: 'nuevo arr', class: 'tag-new' }
  },
  {
    name: 'map',
    desc: 'Crea un NUEVO array transformando cada elemento.',
    syntax: 'const nuevo = arr.map((elemento) => { return ... })',
    code: `let nums = [1, 2, 3];
let dobles = nums.map(n => n * 2);
console.log(dobles); // → [2, 4, 6]
console.log(nums);   // → [1, 2, 3] (original intacto)`,
    tag: { label: 'nuevo arr', class: 'tag-new' }
  },
  {
    name: 'filter',
    desc: 'Crea un NUEVO array solo con los elementos que cumplan la condición.',
    syntax: 'const filtrados = arr.filter((elemento) => condición)',
    code: `let nums = [1, 2, 3, 4, 5];
let pares = nums.filter(n => n % 2 === 0);
console.log(pares); // → [2, 4]`,
    tag: { label: 'nuevo arr', class: 'tag-new' }
  },
  {
    name: 'find',
    desc: 'Devuelve el PRIMER elemento que cumpla la condición, o undefined si no encuentra.',
    syntax: 'const encontrado = arr.find((elemento) => condición)',
    code: `let usuarios = [
  { id: 1, nombre: 'Ana' },
  { id: 2, nombre: 'Luis' },
];
let user = usuarios.find(u => u.id === 2);
console.log(user); // → { id: 2, nombre: 'Luis' }`,
    tag: { label: 'nuevo arr', class: 'tag-new' }
  },
  {
    name: 'some / every',
    desc: 'some → ¿ALGUNO cumple?  every → ¿TODOS cumplen? Devuelven boolean.',
    syntax: 'arr.some(condición)  ·  arr.every(condición)',
    code: `let nums = [1, 2, 3, 4, 5];
console.log(nums.some(n => n > 4));  // → true (5 sí)
console.log(nums.every(n => n > 0)); // → true (todos > 0)
console.log(nums.every(n => n > 2)); // → false (1 y 2 no)`,
    tag: { label: 'nuevo arr', class: 'tag-new' }
  },
  {
    name: 'reduce',
    desc: 'Reduce todo el array a un solo valor (suma, objeto, string, etc.).',
    syntax: 'const total = arr.reduce((acum, actual) => acum + actual, valorInicial)',
    code: `let nums = [1, 2, 3, 4];
let suma = nums.reduce((acc, n) => acc + n, 0);
console.log(suma); // → 10

let palabras = ['Hola', ' ', 'Mundo'];
let frase = palabras.reduce((acc, p) => acc + p, '');
console.log(frase); // → "Hola Mundo"`,
    tag: { label: 'nuevo arr', class: 'tag-new' }
  },
  {
    name: 'includes',
    desc: 'Devuelve true si el array contiene el valor especificado.',
    syntax: 'arr.includes(valor, desdeÍndice?)',
    code: `let frutas = ['🍎', '🍌', '🍇'];
console.log(frutas.includes('🍌')); // → true
console.log(frutas.includes('🥝')); // → false`,
    tag: { label: 'nuevo arr', class: 'tag-new' }
  },
  {
    name: 'indexOf / lastIndexOf',
    desc: 'Devuelve el índice del elemento, o -1 si no existe.',
    syntax: 'arr.indexOf(valor)  ·  arr.lastIndexOf(valor)',
    code: `let nums = [10, 20, 30, 20, 40];
console.log(nums.indexOf(20));     // → 1
console.log(nums.lastIndexOf(20)); // → 3
console.log(nums.indexOf(99));     // → -1`,
    tag: { label: 'nuevo arr', class: 'tag-new' }
  },
  {
    name: 'slice',
    desc: 'Devuelve una COPIA de una porción del array (sin mutar el original).',
    syntax: 'const copia = arr.slice(inicio, fin)  // fin no incluido',
    code: `let nums = [10, 20, 30, 40, 50];
console.log(nums.slice(1, 3)); // → [20, 30]
console.log(nums.slice(-2));   // → [40, 50] (últimos 2)
console.log(nums);             // → [10,20,30,40,50] (intacto)`,
    tag: { label: 'nuevo arr', class: 'tag-new' }
  },
  {
    name: 'splice',
    desc: 'Elimina, reemplaza o agrega elementos. ¡MODIFICA el original!',
    syntax: 'arr.splice(índice, cuántosEliminar, ...elementosAAgregar)',
    code: `let nums = [10, 20, 30, 40, 50];

// Eliminar 2 desde índice 1
let eliminados = nums.splice(1, 2);
console.log(eliminados); // → [20, 30]
console.log(nums);       // → [10, 40, 50]

// Reemplazar: splice(índice, 0, nuevo) para insertar
nums.splice(1, 0, 99);
console.log(nums); // → [10, 99, 40, 50]`,
    tag: { label: 'muta', class: 'tag-mut' }
  },
  {
    name: 'sort',
    desc: 'Ordena el array. Por defecto como strings. ¡OJO! Modifica el original.',
    syntax: 'arr.sort()  ·  arr.sort((a, b) => a - b)  // numérico',
    code: `let nums = [3, 30, 1, 100];
nums.sort();
console.log(nums); // → [1, 100, 3, 30] (como texto ❌)

nums.sort((a, b) => a - b);
console.log(nums); // → [1, 3, 30, 100] (numérico ✅)`,
    tag: { label: 'muta', class: 'tag-mut' }
  },
  {
    name: 'concat / spread',
    desc: 'Concatena arrays. No muta los originales.',
    syntax: 'arr1.concat(arr2)  ·  [...arr1, ...arr2]',
    code: `let a = [1, 2];
let b = [3, 4];
console.log(a.concat(b));  // → [1, 2, 3, 4]
console.log([...a, ...b]); // → [1, 2, 3, 4]
console.log(a);            // → [1, 2] (intacto)`,
    tag: { label: 'nuevo arr', class: 'tag-new' }
  },
];

/* 
 Querido estudiante, si ves estas lineas de momento ignoralas.
 Esto es la manipulación de un documento html con javascript.
 De todas formas si te interesa saber como funcionan los metodos de 'document'
 puedes revisar el siguiente enlace: https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction
 y no te preocupes, lo veremos mas tarde en clase. a partir de los modulos de REACT. 🧑‍🔬💻
*/

const app = document.getElementById('app');

methods.forEach(m => {
  const div = document.createElement('div');
  div.className = 'method';

  const nameRow = document.createElement('div');
  nameRow.innerHTML = `
    <span class="method-name">.${m.name}</span>
    <span class="tag ${m.tag.class}">${m.tag.label}</span>
  `;

  const desc = document.createElement('div');
  desc.className = 'method-desc';
  desc.textContent = m.desc;

  const syntax = document.createElement('div');
  syntax.className = 'method-syntax';
  syntax.textContent = m.syntax;

  const pre = document.createElement('div');
  pre.className = 'method-example';
  pre.textContent = m.code;

  div.append(nameRow, desc, syntax, pre);
  app.appendChild(div);
});
