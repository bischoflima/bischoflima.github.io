# EpiscopusBlock <br> um app simples para criar tanto listas de tarefas quanto anotações do dia a dia
### projeto-final-web2
   A proposta deste projeto é uma sequencia de avaliações da disciplina de web 2 com ênfase no uso de ECMA Script 6 para tornar uma página HTML interativa.<br><br>
#### A ideia inicial é criar um app online que seja intuitivo e ao mesmo tempo contemple certos detalhes que na maioria dos aplicativos de listas de tarefas acabam passando batidos, como decidir quando deve editar um item da lista e quando irá apenas marcá-lo como uma tarefa concluída.


## Exigências Gerais propostas pela disciplina:

 * O conteúdo do site deve ser pessoal;
 * O site deverá possuir informações que os acadêmicos julgarem interessantes;
 * Utilizar marcações do HTML5;
 * Deve ser utilizado CSS;
 * Poderá ser utilizado o framework bootstrap ou materialize;
 * O layout precisa ser responsivo;
 * Não deve ser utilizado templates prontos;
 * Qualquer tipo de cola ou cópia de semestres anteriores, por menor que seja, será zerado o trabalho;
 * O aluno será questionado no momento da defesa do projeto sobre qualquer um dos itens acima e também sobre as exigências específicas.
 * O projeto precisa ser armazenado no repositório do GitHub e o endereço do repositório ser informado ao professor via formulário CheckList e também via Slack em data a ser definida.
 * O formulário de checklist não precisa ser enviado se o aluno preferir preencher o checklist via README.md
 * O projeto precisa ser hospedado do GitHub Pages e o endereço de acesso deve ser informado no README.md

## Exigências Específicas:

   O sistema deve ser implementado contendo as funcionalidades referentes aos tópicos apresentados abaixo. Cada tópico será avaliado separadamente. Para o aluno obter nota máxima em cada tópico, ele precisa utilizar todas as estruturas listadas nos respectivos sub-tópicos. Também serão consideradas as **boas práticas de programação em JavaScript, uso adequado de notações e conceitos aprendidos**, organização do código e criatividade. Ainda, serão avaliados os wireframes do sistema, os quais deverão ser entregues em data definida antes da entrega do projeto.<br>

   Implementar os itens (tópicos) apresentados a seguir, com exceção dos itens riscados, os quais não foram vistos em sala de aula:

# Avaliação 1

### Caixas de Diálogo
  - [ ] prompt
  - [x] alert
  - [x] confirm
  
### Temporizadores
- [ ] setInterval
- [x] setTimeout
  
### Funções
- [x] Função anônima com argumento
- [x] Função anônima sem argumento
- [x] Função anônima com retorno
- [x] Função auto-executável
- [x] Função com nome
- [x] Função aninhada/local - declarar uma função dentro de outra
- [x] Passagem de uma função como parâmetro
- [x] Função Flecha - Arrow Function

### Eventos
- [x] Evento de carregamento do documento - onload
- [x] Evento de movimento do mouse
- [x] Evento de teclado - usar charCode ou keyCode
- [x] Eventos de formulário - onfocus e onblur
- [x] Imprimir alguma propriedade do objeto event recebido como parâmetro

### Acesso aos elementos DOM do HTML
- [x] Via referência DOM pelo id do elemento HTML
- [x] Via getElementByID()
- [ ] Via getElementsByName()
- [x] Via getElementsByTagName()
- [x] Via seletores CSS usados na função querySelector() ou querySelectorAll()

### Tratadores de Evento
- [x] Especificar o tratador de evento inline
- [x] Especificar o tratador de evento no carregamento da página HTML no modo tradicional - no onload
- [x] Especificar o tratador de evento no carregamento da página HTML com a função addEventListener
- [x] Usar o operador this em funções tratadoras de eventos.

### Objetos Nativos
- [x] Usar pelo menos 3 métodos de manipulação de array
   - [x] repleace
   - [x] forEach
   - [x] push
- [x] Usar laço de repetição (for..in ou for..of ou forEach)
   - [x] For...of
   - [x] For...in
   - [x] forEach
- [x] Usar pelo menos 3 métodos para manipulação de string
   - [x] trim
   - [x] toLowerCase
   - [x] split
- [x] String Template 

### Objetos
- [x] Criar objeto usando função construtora ou notação literal
- [x] Criar objetos a partir da definição de classes do ES6
- [x] Usar herança prototipal nativa ou herança de classes do ES6

# Avaliação 2

### Qualidade do código
- [ ] Usar um Style Guide - apresentar o uso de pelo menos 10 regras do style escolhido (sugerido AirBnb)
   - [ ] Usar sintaxe literal para arrays
   - [ ] Aspas simples para strings
   - [ ] Ponto para acessar atributos
   - [ ] Variaveis sempre no topo do escopo em que se encontram
   - [ ] Use === e !== ao invés de == e !=
   - [ ] linha em branco no final do arquivo
   - [ ] linha em branco após o final de cada declaração
   - [ ] ponto e vírgula ao final de cada declaração
   - [ ] Não use apenas um caracter, seja descritivo
   - [ ] Use camelCase quando for nomear objetos, funções e instâncias
   - [ ] Use um underscore _ como primeiro caracter em propriedades privadas
- [ ] Usar um lint - mostrar a correção de pelo menos 5 problemas informados pelo lint (sugerido JSHint - usar o arquivo .jshintrc disponível no moodle)
- [ ] Usar strict mode
- [ ] Usar Module Pattern
- [ ] Usar pasta assets e subpastas resources e libraries para organizar o código
- [ ] Usar let ou const ao invés de var
- [ ] Nomes de arquivos minúsculos e separados por hífen (dashed-case)

### Formulário
- [ ] Validação de formulário com onsubmit usando os métodos tradicionais
- [ ] Validação de formulário com HTML5 API
    - [ ] Customizar as mensagens nos balões de mensagem
    - [ ] Usar os atributos de validação dos inputs
    - [ ] Usar expressões regulares
- [ ] Ler e escrever em elementos input com a propriedade value
- [ ] Alterar o conteúdo de elementos div ou p com a propriedade innerHTML ou textContent
- [ ] Manipulação de elemento de listagem, como checkbox, radio ou select
- [ ] Acesso aos elementos de um formulário via hierarquia (caminho) de objetos, ou seja, array forms e elements

# Avaliação 3

### jQuery
- [x] Uso de seletores CSS - id, classe e tag
- [ ] Uso de seletores hierárquicos estáticos - ancestral/descendente, pai/filho, anterior/próximo
- [ ] Uso de seletores hierárquicos dinâmicos - parent/children/next
- [ ] Efeitos fade ou slide
- [ ] Especificar o tratador de algum evento via jQuery
- [ ] Manipulação do CSS via função css() e addClass()/removeClass()
- [ ] Manipulação do conteúdo de um input e div usando jQuery
- [ ] Aplicar um plugin do jQuery (por exemplo, jQuery Mask Plugin)

### Web Storage
- [ ] LocalStorage ou SessionStorage
- [ ] Leitura e escrita de dados simples
- [ ] Leitura e escrita de JSON
- [ ] Implementação funcional (basta fazer funcionar uma requisição) do backend em ExpressJS na plataforma Node e requisições AJAX.


#### Checklist:

* Preencher o checklist no README.md do seu repositório do GitHub tal como consta no projeto vixe-quebrou-js.<br>
* **Obs:** Se o aluno preencher um item e for comprovado que ele não fez ou não sabe explicar, será penalizado com a retirada de nota deste e de outro item feito.

#### Datas:

* Wireframes do sistema: Até 21/03/2021
* Postagem e Entrega: Até 17/05/2021.

#### Defesa: 

* Agendar a defesa na planilha disponível em http://bit.ly/35Ev4vu

#### Notas:

* 60% da nota final da disciplina
* Wireframes: 10%
* Sistema: 90%
