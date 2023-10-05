// declaracion de variables en javascript moderno
// let contador = 0;
// contador = 8;
// const constante = 4;
// constante = 10;

// alerta en javascript
// alert("hola desde una alerta de javascript");
// console.log("esto es javascript desde el html");
// console.log(numero);
// console.log(constante);


let nombre = "anthony";
let apellido = " gonzalez";
console.log('mi nombre es: '+nombre+apellido);

// document.write('hola en el documento de javascript ');
// document.write('mi nombre es: '+nombre+apellido);

let seleccion = document.querySelector('#seccion1');

seleccion.innerHTML = `mi nombre es: `+nombre+apellido;