let listaInput = document.getElementsByTagName('input');

let nome = listaInput[0];
let sobrenome = listaInput[1];
let email = listaInput[2];
let data = listaInput[3]
let senha1 = listaInput[4]
let senha2 = listaInput[5];

document.addEventListener('submit',(e) => {
    e.preventDefault();
    console.log('teste');
})