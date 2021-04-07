let listaInput = document.getElementsByTagName('input');

let nome = listaInput[0];
let sobrenome = listaInput[1];
let email = listaInput[2];
let data = listaInput[3]
let senha1 = listaInput[4]
let senha2 = listaInput[5];

function analiseDeSenha(senhaDigitada) {

    if (senhaDigitada === null || senhaDigitada === undefined || senhaDigitada === '')
        return 0;

    let vetorSenha = senhaDigitada.split('');
    let letrasSenha = 1;
    let numeroSenha = 1;
    let caracteresEspeciais = 1;

    function calculaValorDaSenha() {
        return letrasSenha * numeroSenha * caracteresEspeciais;
    }

    vetorSenha.forEach(letra => {
        if (letra.charCodeAt(0) > 65 && letra.charCodeAt(0) < 123)
            letrasSenha += 2;
        else if (letra.charCodeAt(0) > 47 && letra.charCodeAt(0) < 58)
            numeroSenha += 1;
        else
            caracteresEspeciais += 3;
    });

    return calculaValorDaSenha();
}

window.icon_nome.addEventListener("blur", () => {
    validaNome();
});

function ajustaTexto(texto) {
    return texto.trim().toLowerCase();
}

let validaNome = () => {
    let campoNome = window.icon_nome;

    campoNome.classList.remove('validate');

    //passagem da funcao ajusta texto como parametro
    if (validaTamanhoDoNome(ajustaTexto, campoNome.value)) {
        campoNome.classList.add('valid');
        campoNome.classList.remove('invalid');
    } else {
        campoNome.classList.remove('valid');
        campoNome.classList.add('invalid');
    }
}

let validaTamanhoDoNome = function (funcao, nome) {

    if (funcao(nome).length < 3)
        return false;
    return true;
}

document.getElementById('icon_sobrenome').addEventListener('blur', () => {
    let campoSobrenome = window.icon_sobrenome;

    campoSobrenome.classList.remove('validate');

    //passagem da funcao ajusta texto como parametro
    if (validaTamanhoDoNome(ajustaTexto, campoSobrenome.value)) {
        campoSobrenome.classList.add('valid');
        campoSobrenome.classList.remove('invalid');
    } else {
        campoSobrenome.classList.remove('valid');
        campoSobrenome.classList.add('invalid');
    }
});

function validaCaracterCharCode(letra) {

    if (letra > 65 && letra < 123)
        return true;

    return false;
}

document.getElementById('icon_sobrenome').addEventListener('keypress', (evento) => {
    let letraCharCode = evento.keyCode;

    console.log(letraCharCode);

    if (!validaCaracterCharCode(letraCharCode))
        evento.preventDefault();

});

document.getElementById('icon_nome').addEventListener('keypress', (evento) => {
    let letraCharCode = evento.keyCode;

    console.log(letraCharCode);

    if (!validaCaracterCharCode(letraCharCode))
        evento.preventDefault();

});

senha2.onfocus = () => {
    let inputForca = document.querySelector('#forca_senha');
    inputForca.value = analiseDeSenha(senha1.value);
    console.log('teste onfocus senha 2');

};
senha2.onblur = () => {
    if (senha1.value.length === 0 || senha2.value.length === 0)
        alert('Os campos de senha não devem estar vazios');
    else if (senha1.value !== senha2.value)
        alert('As senhas não coincidem');
};

document.addEventListener('submit', (e) => {
    e.preventDefault();
    let booleanoSalvar = confirm('Deseja mesmo salvar os seus dados?');
    console.log('teste');
});