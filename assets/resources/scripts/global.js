$(document).ready(function () {
    $('.sidenav').sidenav();
});

$(document).ready(function () {
    $('.tooltipped').tooltip();
});

$(document).ready(() => {
    $('.modal').modal();
});

document.onload = () => {
    let anoAtual = new Date();
    $('#ano').text(anoAtual.getFullYear());
};

(function () {
    if (window.innerWidth < 459) {
        document.getElementById('titulo_texto').style.fontSize = '1.5rem';
        console.log('teste resize');
    } else {
        document.getElementById('titulo_texto').style.fontSize = '2.1rem';
    }
})();

function mudaTitulo() {

    if (window.innerWidth < 459) {
        document.getElementById('titulo_texto').style.fontSize = '1.5rem';
        console.log('teste resize');
    } else {
        document.getElementById('titulo_texto').style.fontSize = '2.1rem';
    }


}

window.addEventListener('resize', mudaTitulo);

document.querySelector('.sidenav-trigger').onmouseover = () => {
    if (window.screen.width > 650)
        $('.sidenav').sidenav('open');

    let tempo = setTimeout(() => {
        $('.sidenav').sidenav('close');
    }, 7000);

};


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