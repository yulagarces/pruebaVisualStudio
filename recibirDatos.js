const prompt = require('prompt-sync')();

// Solicitar al usuario ingresar su nombre
const nombre = prompt('¿Cuál es tu nombre? ');
console.log(`Hola, ${nombre}!`);