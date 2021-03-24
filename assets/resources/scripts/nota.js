/**
 * @argument usuario
 * @argument titulo
 */
class Anotacao {
    constructor(usuario, titulo) {
        this.titulo = titulo;
        this.usuario = usuario;
    }
    getNomeClasse() {
        return this.constructor.name;
    }
}

/**
 * @argument titulo
 * @argument usuario
 * @argument texto
 */
class Nota extends Anotacao {
    constructor(titulo, usuario, texto) {
        super(titulo, usuario);
        this.texto = texto;
    }
}

/**
 * 
 */
function Lista(titulo, usuario, itensLista) {
    this.prototype = Object.create(Anotacao);
    this.__proto__.titulo = titulo;
    this.__proto__.usuario = usuario;
    this.itensLista = itensLista;
}