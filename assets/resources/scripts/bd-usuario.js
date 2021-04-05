class Usuario {
    constructor(nome, sobrenome, email, dataNascimento) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.dataNascimento = dataNascimento;
    }

    getProximoId() {
        let proximoId = localStorage.getItem('id_usuario');
        return parseInt(proximoId) + 1;
    }

    gravar(usuario) {
        let id_usuario = this.getProximoId();
        localStorage.setItem('id_usuario', id_usuario);
        localStorage.setItem(id_usuario, JSON.stringify(usuario));
    }

    removerRegistro(id = undefined){
        if(id){
            localStorage.removeItem(`${id}`);
        }
    }

    recuperarTodosRegistros() {
        let qtdRegistros = parseInt(localStorage.getItem('id_usuario'));
        let usuarios = [];

        for (let i in qtdRegistros) {
            if (localStorage.getItem(i) === null)
                continue;
            let usuario = JSON.parse(localStorage.getItem(i));
            usuario.id = i;
            usuarios.push(usuario);
        }
        return usuarios;
    }
}