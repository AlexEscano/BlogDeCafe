// querySelector
// const header = document.querySelector('h2');
// header.textContent = 'Hola mundo';

// // querySelectorAll
// const enlaces = document.querySelectorAll('.navegacion a');
// enlaces[0].textContent = 'Hola mundo';
// enlaces[0].href = 'https://google.com';
// console.log(enlaces)

// // create elementos

// const nuevoEnlace = document.createElement('A');
// nuevoEnlace.href = 'https://google.com';
// nuevoEnlace.textContent = 'Nuevo enlace desde script';
// nuevoEnlace.classList.add('navegacion__enlace');

// // para añadirlo
// const navegacionPai = document.querySelector('.navegacion');
// navegacionPai.appendChild(nuevoEnlace);


// // addEventListener
// console.log(1)
// window.addEventListener('load', ()=>{//el load espera que el documento este listo.
//     console.log(2);
// })

// //otra forma de hacerlo
// window.onload = function(){
//     console.log(3)
// }

// document.addEventListener('DOMContentLoaded', function(){
//     console.log()
// })

// console.log(4)

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const inputNombre = document.querySelector('#nombre');
const inputEmail = document.querySelector('#email');
const inputMensaje = document.querySelector('#mensaje');

inputNombre.addEventListener('input', leerCampo)
inputEmail.addEventListener('input', leerCampo)
inputMensaje.addEventListener('input', leerCampo)
function leerCampo(e){
    datos[e.target.id] = e.target.value;

    
} 
console.log(datos)
