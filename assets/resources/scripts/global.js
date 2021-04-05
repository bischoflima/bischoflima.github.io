$(document).ready(function () {
    $('.sidenav').sidenav();
});

$(document).ready(function () {
    $('.tooltipped').tooltip();
});

$(document).ready(() => {
    $('.modal').modal();
});

let anoAtual = new Date();
$('#ano').text(anoAtual.getFullYear());

let mudaTitulo = () => {
    if (window.innerWidth < 459) {
        document.getElementById('titulo').getAttribute('width') -= 10;
        console.log('teste resize');
    }
    console.log('teste resize');
}

document.addEventListener('resize', mudaTitulo);

function modificaCor(botao) {
    let novaCor = (botao.getAttribute('class').split(' '))[1];
    console.log(novaCor);

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