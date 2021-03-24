class BD {

    constructor() {
        let id = localStorage.getItem('id');

        if (id === null) {
            localStorage.setItem('id', 0);
        }
    }

    getProximoId() {
        let proximoId = localStorage.getItem('id');
        return parseInt(proximoId) + 1;
    }

    gravar(nota) {
        let id = this.getProximoId();
        localStorage.setItem('id', id);
        localStorage.setItem(id, JSON.stringify(nota));
    }

    recuperarTodosRegistros() {
        let qtdRegistros = parseInt(localStorage.getItem('id'));
        let notas = [];

        for (let i = 1; i <= qtdRegistros; i++) {
            if (localStorage.getItem(i) === null)
                continue;
            let nota = JSON.parse(localStorage.getItem(i));
            nota.id = i;
            notas.push(nota);
        }
        return notas;
    }

    removerRegistro(id = undefined){
        if(id){
            localStorage.removeItem(`${id}`);
        }
    }

    // pesquisar(despesa) {

    //     let despesasFiltradas = this.recuperarTodosRegistros();
    //     // filter de ano, mes, dia, tipo, descricao, valor

    //     if(despesa._ano != ''){
    //         despesasFiltradas = despesasFiltradas.filter((d) => { return d._ano == despesa._ano });
    //     }

    //     return despesasFiltradas;
    // }
}