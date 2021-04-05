/**
 * 
 * @param {string} nome 
 * @param {string} sobrenome 
 * @param {string} email 
 * @param {string} dataNascimento 
 * @param {string} senha 
 */
function Usuario(nome, sobrenome, email, dataNascimento, senha) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.dataNascimento = dataNascimento;
    this.senha = senha;

    function nomeCompleto() {
        return `${nome} ${sobrenome}`;
    }
}
