class BdAnotacao {

    constructor() {
        let id = localStorage.getItem('id_anotacao');

        if (id === null) {
            localStorage.setItem('id_anotacao', 0);
        }
    }

    getProximoId() {
        let proximoId = localStorage.getItem('id_anotacao');
        return parseInt(proximoId) + 1;
    }

    gravar(anotacao) {
        let id = this.getProximoId();
        localStorage.setItem('id_anotacao', id);
        localStorage.setItem(id, JSON.stringify(anotacao));
    }

    recuperarTodosRegistros() {
        let qtdRegistros = parseInt(localStorage.getItem('id_anotacao'));
        let anotacoes = [];

        for (let i = 1; i <= qtdRegistros; i++) {
            if (localStorage.getItem(i) === null)
                continue;
            let anotacao = JSON.parse(localStorage.getItem(i));
            anotacao.id = i;
            anotacoes.push(anotacao);
        }
        return anotacoes;
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