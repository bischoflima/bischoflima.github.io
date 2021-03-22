$(document).ready(function () {
    $('.sidenav').sidenav();
});

$(document).ready(function () {
    $('.tooltipped').tooltip();
});

$(document).ready( () => {
    $('.modal').modal();
});

function modificaCor(novaCor) {

    let listaMudaCor = document.getElementsByClassName('mudaCor');

    let listaMudaCorTexto = document.querySelectorAll('.mudaCorTexto');

    for (const elemento of listaMudaCor) {
        let corInicial = elemento.classList[0];

        elemento.classList.replace(corInicial, novaCor);
    }
    
    for (const elemento of listaMudaCorTexto) {
        let corInicial = elemento.classList[0];

        elemento.classList.replace(corInicial, `${novaCor}-text`);
    }

    $('.modal').modal('close');

}