<div align="center">
 <img src="https://user-images.githubusercontent.com/61476935/116564205-23641d80-a8db-11eb-95a9-96eb071ab6cb.png"> 
</div> 
<br>
<img src="https://img.shields.io/static/v1?label=javascript&message=Language&color=yellow&style=for-the-badge&logo=JavaScript"/>

O ECMAScript é uma linguagem de programação do tipo script, inicialmente criada e implementada com o propósito de otimizar client-side applications. Popularmente conhecida como JavaScript, é uma linguagem de tipagem dinâmica fraca e multiparadigmas.

Tem um crescente ganho de popularidade desde meados dos anos 90, quando foi criada. E é muitas vezes associada aos navegadores, como o popular Google Chrome. Porém, graças a ferramentas como o Node, que faz uso da mesma engine V8 do já citado Chrome, é possível desvincular o Javascript dos navegares e até mesmo do client-side.

Além disso, ainda está presente na grande maioria das aplicações Web, seja mantendo sua sintaxe pura ou em conjunto com alguma lib como o React, Vue.js, ou frmawork, como o Angular; com seu superset mais conhecido como Typescript.


<h1>Hello World</h1>


Como já foi dito, o Javascript não mais se restringe aos navegadores, podendo ser compilado e interpretado localmente através do Node. No entanto, estes ambientes permitem interações distintas, como o acesso ao DOM na web, sobre o qual falaremos mais a frente. Portanto, é recomendado ter o Node instalado pois ambas as formas de uso serão contempladas nesta documantação.


<h2>Chrome</h2>


Para executar códigos Javascript no navegar siga o passo a passo descrito abaixo:

* Abra uma janela do Chrome ou do navegador que preferir
* Precione Ctrl + Shit + i para abrir as dev tools

Diretamente no console execute o código a seguir:


    < var a = "Hello, world"
    > undefined
    > a
    < 'Hello, world'


<h2>Node</h2>


Para executar códigos Javascript no ambiente Node, faça o download da sua versão LTS disponível no link a seguir:


[nodejs.org](https://nodejs.org/en/)


Para verificar a instalação, execute o comando a seguir no terminal de comando, revelando a versão presente na sua máquina:


    node -v


Após verificar a instalação, já é possível fazer uso do ambiente. Para isso, ainda no terminal de comando, execute o código a seguir:


    > var a = "Hello, world"
    undefined
    > a
    'Hello, world'


Perceba que o resultado é exatamente o mesmo obtido no navegador. Isso mostra a mesma eficácia no processo de interpretação do código em ambos os ambientes. Mas um detalhe que os torna diferentes é visto no exemplo a seguir:

Ainda nas dev tools do navegador, digite a seguinte chamada:

    
    document.


Note que há uma série de opções atreladas ao <i>document</i>(parte da tela em destaque), sendo este o já citado DOM(Document Object Model). Ao executar a mesma chamada no terminal node temos o seguinte resultado:


    > document
    Uncaught ReferenceError: document is not defined


Isso se dá pois não há uma definição de document fora do ambiente do navegador, portanto, o node não o reconhece.


<h2>VSCode</h2>


Além do Node ou dos navegadores, também é possível executar códigos Javascript em ferramentas como o VSCode, esta que pode ser baixada no link a seguir:


[Visual Studio Code](https://code.visualstudio.com/)


Após o término da instalação, siga o passo a passo a seguir:


* Acesse o cmd 
* Use o comando cd/ para acessar o disco local C:
* Nele crie um diretório com o comando mkdir + nome
* Acesse o diretório através do comando cd + nome
* Abra o arquivo no VSCode através do comando code .


Tendo aberto o novo diretório no VSCode, crie um novo arquivo chamado de main.js e nele defina as seguintes linhas de código:


    var message = "Hello, world";
    
    console.log(message);


É possível executar o arquivo atráves do Run Code buttom no canto superior direito ou através do comando Ctrl + Alt + N, tendo como resultado:


    [Done] exited with code=0 in 0.15 seconds
    
    [Running] node "c:\JavaScript\main.js"
    Hello, world
    
    [Done] exited with code=0 in 0.122 seconds



<h1>Built-in Types</h1>


O Javascript é uma linguagem dinamicamente tipada, ou seja, nela é possível declarar uma variável como tendo determinado tipo ou mesmo omití-lo, dando ao valor atribuido a esta a função de determinar seu type. Estes tipos são:


<h2>Primitive</h2>


Os valores primitivos são chamados assim porque são imutáveis e, portanto, antigos dentro do Javascript. Correspondem ao Primitive Type:


<h3>String</h3>


O tipo string define a representação de dados textuais ou alfanuméricos imutáveis. Veja o exemplo a seguir:

    
    > var string = ''
    undefined
    > var string = 'some text'
    undefined
    > string
    'some text'


Veja que uma variável pode ter seu valor sobrescrito quando redefinida, demonstrando a tipagem dinâmica que define o Javascript.


<h3>Number</h3> 


O tipo number, como o nome sugere, tem  a função de representação numérica. Essa representação recebe uma designação de infinity, podendo ser - (negativa) ou + >(positiva). Uma representação dessa designação pode ser vista a seguir, onde as variações podem ser tanto do valor quanto do sinal:


    42 / +0 Infinity > 42 / -0 -Infinity


A seguir há um exemplos de definição do tipo number:

  
    > var number = 12344;
    undefined
    > var number = -12344;
    undefined
    > number
    -12344


<h3>NaN</h3>


Um NaN, ou Not-a-Number, é uma propriedade do objeto global que define um tipo não numérico:


    > var nan = NaN
    undefined
    > number
    NaN
  

<h3>Boolean</h3>


O Boolean Type é considerado uma entidade lógica com apenas dois resultados possíveis: true (verdadeiro) e false (falso):


    > var bool = false;
    undefined
    > var bool = true;
    undefined
    > bool
    true


<h2>Null</h2>


O Null é tido como o anulador dentro do JavaScript, onde seu valor único é Null (nulo):


    > var nullable = null;
    undefined
    > nullable
    null


<h2>Undefined</h2>

 
O Undefined type é atribuído a uma variável cujo valor é indefinido dentro do programa:


    > var undefined;
    undefined
    > undefined
    undefined


<h2>Symbol</h2>


São mais recentes na linguagem que os anteriores. São utilizados como chaves de propriedades de um objeto que, por sua vez, é um valor registrado na memória que pode ser referenciado por um identificador. 


<h2>Object</h2>


O JavaScript é uma linguagem projetada com base em paradigmas orientados a objetos. Um objeto é uma junção de propriedades, que são definidas pela associação entre um nome e um valor. Em JavaScript, um objeto possui as mesmas características de um objeto na nossa realidade. No JavaScript os objetos são caracterizados por suas propriedades e, portanto, possuem variações como objetos reais. Veremos mais sobre o Javascript orientado a objetos futuramente.



<h2>Operadores Aritméticos</h2>


O Javascript suporta os operadores aritméticos usuais, como mostrado abaixo:


<h3>Soma +</h3>


Soma os operandos:

  
    > 2 + 3
    5


<h3>Subtração -</h3>


Subtrai os operandos:

  
    > 2 - 3
    -1


<h3>Muiltiplicação *</h3>


Multiplica os operandos:


    > 10 * 150
    1500


<h3>Divisão /</h3>


Divide os operandos:

    
    > 15 / 17
    0.8823529411764706


<h3>Exponenciação **</h3>

   
Aleva um operando determinada quantidade de vezes:

    > 2 ** 8
    256


<h3>Módulo %</h3>


Resulta no resto de uma divisão entre operandos:


    > 3 % 9
    3
    > 9 % 3
    0


<h2>Incremento</h2>


O incremento age como um anexador de valor para a variável, podendo incluir um número a ela, ou redefini-la, sempre de forma crescente:
 

<h3>++X</h3>


Sendo x a variável, é chamado de operador pré fixado, já que é definido antes da variável. Sua função é atribuir valor a sua variável e mostrar o resultado após a soma


    > var a  = 1
    undefined
    > ++a
    2


<h3>X++</h3>


É chamado de operador pós fixado, sendo definido após a variável. Sua função também é atribuir valor a sua variável, mas não altera visialmente o valor da mesma


    > var a  = 1
    undefined
    > ++a
    2
    > a++
    2


<h2>Decremento</h2>


O decremento age como um redultor de valor para a variável, podendo retirar um número da mesma, ou redefini-la, sempre de forma decrescente:


<h2>--X</h2>


<h5>Causa decremento ao valor atribuído à variável</h5>


    > var b = 2
    undefined
    > --b
    1


<h2>X--</h2>


Causa decremento ao valor atribuído à variável, não causando alteração visual nesse valor


    > var b = 2
    undefined
    > --b
    1
    > b--
    1


<h2>Auto Atribuições</h2>


Age de forma a vincular um valor a uma variável já numerada, ou valorada, de forma que esta use do valor nela antes incluído para se auto atribuir, reduzir, multiplicar ou dividir, através de uma operação dentro dela mesma, e com ela mesma.


    > var a = 4
    undefined
    > a = a + 10
    14


<h2>Simplificando</h2>


    > var a = 4
    undefined
    > a += 10
    14


<h3>Forma Comum</h3>        

  
    t = t - 4  
    t = t * 4  
    t = t / 4  
    t = t **4  
    t = t % 4  


<h3>Simplificada</h3>

  
    t -= 4
    t *= 4
    t /= 4
    t **= 4
    t %= 4


<h2>Relacionais</h2>


Estruturas que analisam dois elementos determinando qual é a relação entre ambos, se de igualdade, superioridade numérica, superioridade semântica, etc. Sendo o resultado desta operação um boolean:


     > 30 > 15
     true
     > 49 < 1
     false
     > 200 >= 7
     true
     > 81 <= 19
     false
     > 20 == 20.0
     true
     > 500 != 500
     false


<h3>Igualdade Restrita ===</h3>


Operador variante do que define igualdade, sendo representado por ===, ele define se os valores em operação são identicos, tanto em valor numerico quanto em valor semantico, além de definir se são do mesmo tipo:


    > "nome" === 7
    false
    > false === false
    true
    > null === "null"
    false



<h2>Operadores Lógicos</h2>


Com suas restrições, os operadores lógicos tipicamente são usados com booleans e retornam booleans, executando uma operação
entre dois ou mais operandos, definindo um valor lógico final com base no valor lógico dos operandos que contenham:


<h3>Negação !</h3>


Define que o valor lógico de qualquer objeto, variável ou item que o receba sempre será false, exceto se já for false:


    > !true
    false
    > !false
    true


<h3>Conjunção &&</h3>


O operador de conjunção, representado por && (também chamado de “e comercial”) tem a função semântica de conjunto: "um elemento e outro com ele". Segue uma sintaxe binária, onde há dois operandos, sendo eles verdadeiro e falso. Se ambos forem verdadeiros a operação retorna true, se apenas um for falso, assim caso sejam os dois, o valor retornado é false:


    > "number" === 1 && null === null
    false
    > "number" === "number" && null === null
    true


<h3>Disjunção ||</h3>

    
A disjunção define que a operação pode aceitar dentre dois operandos um false como resultante. Mas ele não aceita que ambos sejam do tipo false sem determinar o resultado final como false. Caso apenas um seja true, assim como os dois, o resultado final será true:
   

    > false || false
    false
    > true || false
    true
    > true || true
    true


<h1>Unidades de Armazenamento</h1>


Assim como em qualquer linguagem de programação, as unidades de armazenamento no Javascript armazenam e referenciam dados, tendo aqui algumas características e variações importantes a serem mencionadas:


<h2>Var</h2>


Elemento que carrega consigo algum valor atrubuído, e é definido pela valavra-chave <i>var</i> + um identificador. Sendo definida como global, ela pode ser utilizada em qualquer parte do código:


<h4>Declarada fora de qualquer bloco</h4>
  

     var userAge = 19
     console.log(userAge)


<h4>Declarada fora de um bloco existente</h4>
 

    var userCep = 53777500
    if(true){
        console.log(userCep)
    }


<h4>Declarada dentro de um bloco existente</h4>


    if(true){
      var userNumb = 81991173016;
      console.log(userNumb)
    }


<h2>Let</h2>


Definida pela palavra-chave <i>let</i> + um identificador, possui função semelhante a de uma var, porém, só pode ser utilizada no trecho de código que a contém:


    if(true){
      let userProfession = 'Software Developer'
      console.log(userProfession)
    }

    ou

    let userProfession = 'Software Developer'
    
    if(true){
        console.log(userProfession)
    }


<h3>Causando um Erro</h3>


    if(true){
      let userProfession = 'Software Developer'
    }
    console.log(userProfession)

    //OutPut:

    ReferenceError: userProfession is not defined


<h2>Const</h2>


Assim como uma let, uma const possui a limitação de ter seu uso restrito ao trecho de código que a contém, porém, as semelhanças acabam aqui. Uma constante, por definição, possui um valor imutável em casos como os vistos acima. Veja:


    if(true) {
      const userName = 'Name'
      userName = 'Name'
      console.log(userName)
    }

    //OutPut:

    userName = 'João'
             ^

    TypeError: Assignment to constant variable.


<h3>Corrigindo</h3>


Apesar do resultado, não é impossível editar o valor que uma const carrega, porém, o dado que a mesma contém precisa ser de um tipo específico, como um objeto ou array por exemplo: 


    if(true){
     const user = {nome: 'Victor'};
     user.nome = "João"
     console.log(user)
    }
 
    //OutPut:

    { nome: 'João' }


<h1>Declarações de Controle de Fluxo</h1>


O JavaScript suporta um conjunto compacto de declarações, especificamente de fluxo de controle, que podem ser utilizadas para atribuir uma grande interatividade com os dados:


<h2>Declaração if... else</h2>


Define a execução de uma declaração caso a condição definida seja atendida, e outra caso não seja. É definida pela sintaxe a seguir:


    if (condicao) {

      declaracao_1;

    } else if(condicao) {

      declaracao_2;
    } 
    
    ...

    else {
      declaracao_n;
    }


A condição é definida por uma exepressão lógica que resulte em um boolean ou um valor que leve o mesmo tipo. Caso a primeira condição não for atendida a seguinte é verificada, sendo a declaração definida no else a última possível.


<h2>Declaração switch</h2>


Uma declaração switch permite que um programa avalie uma expressão e tente associar o valor da expressão ao rótulo de um case. Se uma correspondência é encontrada, o programa executa a declaração associada. Uma declaração switch é definida pela sintaxe a seguir:


    switch (expressao) {
      case rotulo_1:
        declaracoes_1
        [break;]
      case rotulo_2:
        declaracoes_2
        [break;]
      ...

      default:
        declaracoes_padrao
        [break;]
    }


A expressão declarada será comparada aos cases definidos como um rótulo com um valor. Esses valores serão comparados ao valor da expressão e caso um deles corresponda, a declaração deste será executada. Há também a expressão condicional break, que define o fim da operação caso a sua declaração seja executada. 

Se nenhum rótulo correspondente é encontrado, o programa procura pela cláusula opcional default, que, por convenção, é a última, não sendo um padrão obrigatório.


<h2>Declaração try...catch</h2>


A declaração try...catch coloca um bloco de declarações em try, e especifica uma ou mais respostas para uma exceção lançada. Se uma exceção é lançada, a declaração catch é responsável por tratá-la.

A declaração try...catch é composta por um bloco try, que contém uma ou mais declarações, e zero ou mais blocos catch, contendo declarações que especificam o que fazer se uma exceção é lançada no bloco try. Ou seja, caso o bloco try não tenha sucesso é ossível tratar a exceção resultante. Uma declaração try...catch é definida pela sintaxe a seguir:


    try {
    
      declaracoes
    
    } catch (e[error]) {
     
      declaracoes
     
    }


<h1>Funções</h1>


Uma função é definida pela executação de uma rotina que envolva ou não o retorno de valores, estes podendo ser recebitos via parâmetro. Uma função Javascript se dá por:


* Declaração da palavra-chave <i>function</i>
* Nome da função
* Definição de parâmetros opcionais declarados entre parênteses
* Body da função declarado entre chaves <b>{ }</b>


Por exemplo, o código a seguir define uma função simples chamada square:


    function square(numero) {
      return numero * numero;
    }


A função <i>square</i> recebe por parâmetro um valor chamado de <i>numero</i>. Esse valor será tratado e retornado pela função, sendo multiplicado por ele mesmo neste caso. O bloco de execução de uma função, ou body, pode conter a chamada de outras funções, a declaração de variáveis, estruturas de controle de fluxo e mais.


<h2>Funções aninhadas e closures</h2>


Aninhar uma função define declarar uma function dentro do escopo de outra, restringindo seu usa ao trecho de declaração. Uma função aninha, por padrão, herda os parâmetros passados na sua function parent. Isso determina que uma função aninhada também é uma closure. Em outras palavras, a função interior contém o escopo da função exterio. 

Em resumo:

- A função interna só pode ser acessada a partir de declarações em função externa.
- A função interna forma uma closure: a função  interna pode usar os argumentos e variáveis da função externa, enquanto a função externa não pode usar os argumentos e variáveis da função interna.

Exemplo:


    function addSquares(a,b) {
       function square(x) {
          return x * x;
       }
       return square(a) + square(b);
    }

    a = addSquares(2,3); // retorna 13
    b = addSquares(3,4); // retorna 25
    c = addSquares(4,5); // retorna 41


<h2>Arrow Function</h2>


Uma Arrow Function, por definição, é uma função comum seguindo uma sintaxe encurtada, sendo lexicalmente vinculada ao valor <i>this</i>. Sendo sempre anônimas, ou seja, não possuiem um identificador, pode receber parâmetros extamente da mesma forma que uma função comum. As Arroy Functions seguem a sintaxe a seguir:


    var hello = () => {
      return "Hello World!";
    }


Caso essa function fosse declarado do modo convencional seria:


    var hello = function() {
      return "Hello World!";
    }


A clausula <i>return</i> também pode ser omitida em uma Arroy function, tendo a restrição de só permitir o retorno de um único valor:


    var hello = () => "Hello World!";


<h1>Estruturas de Loop</h1>


 Um loop é bastante usual quando é preciso definir o aparecimento de um bloco repetidas vezes e é comumente associado a interação de estruturas de armazenamento, como vetores, sobre os quais falaremos mais adiante. A seguir temos definições de uso das estruturas de loop:


<h2>For</h2>


Segue uma sintaxe padrão que increnta o valor de uma variável através da comparação entre essa variável e a quantidade de vezes que a ação deve se repetir:


    for (let i = 0; i < 5; i++) {
      text += "The number is " + i + "<br>";
    }


<h2>For In</h2>


O for in tem a mesma função do for loop, porém, o determinador da repetição é a propriedade de um objeto, seguindo a sintaxe abaixo:

    const person = {fname:"John", lname:"Doe", age:25};
    
    let text = "";

    for (let x in person) {
      text += person[x];
    }


<h2>For Of</h2>


O for of executa um loop diacirdo com a quantidade de valores presentes em um object interable, como um Array, String, NodeList e mais:


    const cars = ["BMW", "Volvo", "Mini"];

    let text = "";
    for (let x of cars) {
      text += x;
    }


<h2>While</h2>


O loop While executa determinado bloco de código enquanto uma condição específica definida como uma expressão boleana for true ou false:


    while (i < 10) {
      text += "The number is " + i;
      i++;
    }


<h2>Breack point</h2>


O atributo break encerra o loop e retorna o array de acordo com o parâmetro definido. A seguir temos um exemplo de uso do break:


    const users = [

      user1 = {
       name: "Victor",
       age: 19,
      },
      user2 = {
       name: "Milena",
       age: 23,
      },
      user3 = {
       name: "Matheus",
       age: 30,
      },
      user4 = {
       name: "João",
       age: 22,
      },
      user5 = {
       name: "Hugo",
       age: 39

     }
    ];
 
    for ( base of users ) {

       console.log(base)

       if(base.name === "João") {
         break;
      }
    }

<br>

    //Console

    { name: 'Victor', age: 19 }
    { name: 'Milena', age: 23 }
    { name: 'Matheus', age: 30 }
    { name: 'João', age: 22 }


<h1>Vetores</h1>


Um vetor, array ou mesmo variável compostas, difere de uma variável simples apenas pela capacidade de armazenar multiplos dados em sua estrutura:


    var exemplo = [item1, item2, item3];


Um Array é declarado abrindo chaves([ ]), o que define que mais de um valor será declarado. Os valores em um Array são separados por vírgula e podem ser acessados por meio de seus indexes:


    var food = ["Pizza", "Bolo", "Macarrão"];

    console.log(food[0], food[1], food[2]);


Um detalhe importante a se ater é que a contagem de posições, ou indexes, de um vetor sempre se inicia em 0.
   
    

<h1>Métodos e Atributos de Um Array</h1> 


Estruturas de armazenamento compostas têm a função de agrupar informações que posteriormente devem poder ser acessadas, alteradas, excluidas e etc. Para tais funções o Javascript disponibiliza uma série de métodos com funcionalidades distintas e que atribuem muito mais funcionalidades a estrutura simples como um array muito mais:


<h2>Push( )</h2>


O push é um método interno do javascript que insere valor a um array, de forma que esse oculpe o ultimo indice do vetor:

    let books = ["Harry Potter", "O Hobbit", "Sapiens"];

    books.push("A Guerra dos Tronos");

    console.log(books);
   
    //Console
    
    ["Harry Potter", "O Hobbit", "Sapiens", "A Guerra dos Tronos"]

<br>
    
    //Sintaxe

    arr.push(elemento1, ..., elementoN)


<h2>Unshift( )</h2>


Tem a função inversa do método push( ), inserindo um elemento como primeiro indice do array:
  
    let cidades = ["João Pessoa", "Natal", "Salvador"];
    cidades.unshift("Recife");

    console.log(cidades);
    
    //Console
    
    [ 'Recife', 'João Pessoa', 'Natal', 'Salvador' ]

<br>
    
    //Sintaxe

    arr.unshift([element1[, ...[, elementN]]])


<h2>Sort( )</h2>


O sort( ), que literalmente significa organizar, é um método javascript que distribui os valores de uma array de forma a torna-los numericamente ou alfabeticamente ordenados:

     let numb = [1, 456, 30, 17, 0.5];
   
     console.log(numb.sort());

     //Console
     
     [ 0.5, 1, 17, 30, 456 ]

<br>
    
    //Sintaxe

    arr.sort([funcaoDeComparacao])


<h2>Length</h2>


O length é uma atributo que pode ser dado a um array, definindo a quantidade de indices que a mesma possui:

    let things = ["Celular", "Mouse", "Ventilado"];
    console.log(things.length);

    //Console

    3

<br>
    
    //Sintaxe

    arr.length

    
<h2>Slice( )</h2>


O método slice cria um novo array a partir de um array existente, sendo possível definir quais indexes do antigo irão compor o novo:

    let array = ['Lord of the Rings', 'O Hobbit', '1255', 'Batata'];
    let novoArray = array.slice(1,3);
    console.log(novoArray);
    
    //Console
    
    ['O Hobbit', '1255']

<br>
    
    //Sintaxe

    arr.slice([início[,fim]])


<h2>Split( )</h2>


O método split gera um array a partir de um string, sendo um string nada mais é que um array com indices do tipo char, ou caractere:

    //Gerar indices com base no espaçamento(" ")
   
    let nome = "João Victor dos Santos";
    let splitNome = nome.split(' ');
    
    console.log(splitNome);
    
    //Console
    
    [ 'João', 'Victor', 'dos', 'Santos' ]


 O parâmetro de separação é definido no método split(' '), sendo este o espaço entre as substrings que formam a string atribuída a variável nome:


    //Defnindo um parâmetro de limite
    
    let dataNascimento = "28 de Maio de 2001";
    let data = dataNascimento.split(" ", 3)
    
    console.log(data);
    
    //Console
    
    [ '28', 'de', 'Maio' ]


 Neste caso é definido um parâmetro de limite, atribuíndo a variável data apenas as três primeira substrings, sendo estas seus novosindices.


<h2>Slice( ) + Split( )</h2>


Ambos os métodos slice e split possuem a mesma função prática, portanto, é possível relacioná-los para obter um resultado ainda mais preciso:

    let dataNascimento = "28 de Maio de 2001";
    let mes = dataNascimento.split(" ", 3)
    let dia = mes.slice(0,1);
    
    console.log(dia);
    
    //Console
    
    [ '28' ]


A união desses métodos permite quebrar ainda mais uma informação, o que é bastante útil caso seja preciso ter apenas parte dela.

 
<h2>Join( )</h2>


O método join( ) tem a função oposta ao método split( ), gerando um string a partir de um array:

    let array = ['João', 'Victor', 'dos', 'Santos'];
    let nome = array.join(' ');
   
    console.log(nome);
    
    //Console
    
    João Victor dos Santos

<br>

    //Sintaxe

    arr.join([separador = ' '])


 Assim como o split( ), um parâmetro de definição do espaçamento é determinado no método.


<h2>Concat( )</h2>


O método concat( ) basicamente concatena dois arrays distintos criando um novo:

    let array1 = [ 0, 1, 2, 3, 4, 5 ];
    let array2 = [ 6, 7, 8, 9, 10 ];
    array3 = array1.concat(array2);
    
    console.log(array3);
    
    //Console
    
    [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

<br>

    //Sintaxe

    arr.concat(valor1, valor2, ..., valorN)


 O resultando é um array cujos indices são a soma dos indices dos arrays concatenados.


<h2>Pop( )</h2>


O método pop( ) remove o ultimo indice de um array:

    let array1 = ['João', 'Victor', 'dos', 'Santos'];
    array1.pop();

    console.log(array1);

    //Console
    
    [ 'João', 'Victor', 'dos' ]

<br>

    //Sintaxe

    arr.pop()


<h2>Shift( )</h2>


Sendo o oposto do pop( ), o método shift( ) remove o primeiro indice do array:
  
    let array1 = ['João', 'Victor', 'dos', 'Santos'];
    array1.shift();

    console.log(array1);

    //Console

    [ 'Victor', 'dos', 'Santos' ]
 
<br>

    //Sintaxe

    arr.shift()


<h2>Splice( )</h2>


Com o método splice é possível definir dois elementos e inserir um valor entre eles, substituíndo os que ocupavam esta(s) posições:

    let cidades = [ 'Recife', 'João Pessoa', 'Natal', 'Salvador' ];
    cidades.splice(1,2, 'Fortaleza');

    console.log(cidades);
    
    //Console
    
    [ 'Recife', 'Fortaleza', 'Salvador' ]

<br>

    //Sintaxe

    array.splice(indice[, deleteCount[, elemento1[, ...[, elementoN]]])
    array.splice(indice) 


<h2>Reverse( )</h2>


O método reverse( ) inverte a ordem dos elementos de um array:

    let cidades = [ 'Recife', 'João Pessoa', 'Natal', 'Salvador' ];
    cidades.reverse();

    console.log(cidades); 

    //Console
    
    [ 'Salvador', 'Natal', 'João Pessoa', 'Recife' ]

<br>

    //Sintaxe

    arr.reverse()

    
<h2>Entries( )</h2>    


O método entries( ) retorna um novo objeto Array Iterator que contém os pares chave/valor para cada índice no array, definindo um valor de posição para cada:

    let array = ['Variáveis', 'Vetores', 'Loops', 'Objetos'];
    let result = array.entries();

    console.log(result.next().value);
    console.log(result.next().value); 
    console.log(result.next().value);
    console.log(result.next().value); 
    
    //Console
    
    [ 0, 'Variáveis' ]
    [ 1, 'Vetores' ]
    [ 2, 'Loops' ]
    [ 3, 'Objetos' ]
    
<br>

    //Sintaxe

    arr.entries()


<h2>Entries() + Loop</h2>  


Uma outra forma de uso do entries() é em conjunto com um loop de execução. Para cada indice é definida uma posição dentro do novo objeto gerado:

    let array = ['Vetores', 'Loops', 'Variáveis', 'Objetos'];
    let result = array.entries();

    for ( item of result ) {
      console.log(item);
    }
    
     //Console
    
    [ 0, 'Vetores' ]
    [ 1, 'Loops' ]
    [ 2, 'Variáveis' ]
    [ 3, 'Objetos' ]


<h2>Every()</h2>  

    
O método every( ) age como uma forma de validação lógica. Um Array é submetido a ele para definir se cada indice do mesmo corresponde a determinado padrão pré definido:

    function isBigEnough(element, index, array) {
        return element >= 10;
      }
    
    let sequenceOne =  [12, 5, 8, 130, 44];
    let sequenceTwo =   [12, 54, 18, 130, 44];

    let resultOne = sequenceOne.every(isBigEnough);   
    let resultTwo = sequenceTwo.every(isBigEnough); 

    console.log(`sequence one is big enough ? ${resultOne}`);
    console.log(`sequence two is big enough ? ${resultTwo}`);
    
    //Console
    
    sequence one is big enough ? false
    sequence two is big enough ? true

<br>

    //Sintaxe

    arr.every(callback[, thisArg])


 A função isBigEnough(função de callback) define um valor padrão como return, quando submetemos as variáveis que guardam o array, esse valor padrão é comparato com os valores contidos nas mesmas. Caso os valores não correspondam ao padrão, o método every() retorna false, caso correspondam, retorna true.

 Obs.: Os parâmetros element, index e array são parâmetros padrão de uso em uma função de callback, eles definem respectivamente: 

- O elemento atual sendo processado no array(Obrigatório);
- O índice do elemento atual sendo processado no array(Opcional);
- O array de origem(Opcional);


<h2>Filter()</h2>


O método filter é semelhante ao every(), porém, ele define como resultado todos os valores que corresponderem ao valor padrão pré definido:

     function isBigEnough(element, index, array) {
         return element >= 10;
     }

     let values = [20, 346, 6, 9, 38, 11, 9.99];
     let result = values.filter(isBigEnough);

     console.log(result);
     
     //Console
     
     [ 20, 346, 38, 11 ]

<br>

    //Sintaxe

    var newArray = arr.filter(callback[, thisArg])

Nesse caso, cada valor foi submetido ao valor padão pré definido, e os que corresponderam a ele foram filtrados


<h2>Find()</h2>

  
Como o nome sugere, é utilizado para encontrar determinada informação, esta sendo pré definida. Caso um valor dentro doS array corresponda ao valor pré definido, o método find() toma esse valor como resultado:

    let data = [18, 100, 0.05]

    let result = data.find(element => element < 1);

    console.log(result);
 
    //Console
    
    0.05

<br>

    //Sintaxe

    arr.find(callback(element[, index[, array]])[, thisArg])


<h2>ForEach()</h2>


O método forEach() executa determinada ação em cada elemento de um array:

    function definePosition(element, index, array) {
        console.log(`[${index}] = ${element}`);
    }

    ['SmartPhone', 'óculos', 'prato'].forEach(definePosition);

    //Console
    
    [0] = SmartPhone
    [1] = Óculos
    [2] = Prato

<br>

    //Sintaxe

    arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);

Uma função determina uma ação, quando esta é aplicada ao array cada elemento do array sofre a ação, neste caso sendo atribuido um valor correpondente a posição e mostrado no console.


<h2>Map()</h2>


O método map() invoca a função de callback passada por parâmetro para cada elemento do Array e devolve um novo Array como resultado:

    let numbers = [1, 2, 3, 4, 5];
    let doubles = numbers.map(function(number) {
      return number * 2;
    });

    console.log(doubles)

     //Console
     
     [ 2, 4, 6, 8, 10 ]

<br>

    //Sintaxe

    arr.map(callback[, thisArg])


<h2>Reduce()</h2>


O método reduce() executa uma função reducer (fornecida) para cada elemento do array, resultando num único valor de retorno:

    //Sintaxe
    
    array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]))

<h2>Callback</h2>

Função que é executada em cada valor no array (exceto no primeiro, se nenhum valorInicial for passado); recebe os seguintes argumentos:

<h2>Acumulador</h2>

Opcional. O índice do elemento atual que está sendo processado no array. Começa a partir do index 0 se um valor Inicial for fornecido. Do contrário, começa do index 1.


<h2>Valor Inicial</h2>


Opcional. Valor a ser usado como o primeiro argumento da primeira chamada da função callback. Se nenhum valorInicial é fornecido, o primeiro elemento do array será usado como o valor inicial do acumulador e o valorAtual não será lido. Chamar reduce() em uma array vazia sem valor inicial retornará um erro:


    const reduce = [
      { nome: "Luan", idade: 25, sexo: "Masculino"},
      { nome: "Victor", idade: 19, sexo: "Masculino"},
      { nome: "Lucas", idade: 21, sexo: "Masculino"},
      { nome: "Ana", idade: 22, sexo: "Feminino"},
      { nome: "Clara", idade: 16, sexo: "Feminino"},
      { nome: "Luíza", idade: 30, sexo: "Feminino"},
    ];
    
    console.log('\n' + `Reduce()` + `\n`);
    
    console.log( reduce.reduce((a, b) => ({...a, [b.sexo] : [...a[b.sexo] || [], b]}), {}) );

<br>

    //Console

    {
      Masculino: [
        { nome: 'Luan', idade: 25, sexo: 'Masculino' },
        { nome: 'Victor', idade: 19, sexo: 'Masculino' },
        { nome: 'Lucas', idade: 21, sexo: 'Masculino' }
      ],
      Feminino: [
        { nome: 'Ana', idade: 22, sexo: 'Feminino' },
        { nome: 'Clara', idade: 16, sexo: 'Feminino' },
        { nome: 'Luíza', idade: 30, sexo: 'Feminino' }
      ]
    }


<h1>Programação Assíncrona</h1>


Antes de entendermos os conceitos da programação assíncrona, é importante ter ciência da razão pela qual ela passou a ser adotada. Em processos de execução mais antigos, onde o cenário de processamento de dados era apenas síncrono, o tratamento de threads era executado em cascata, onde o fim de uma operação resultava no início da próxima. Tal método de processamento torna qualquer ação que demande mais tempo um bloqueio no sistema.

A programção assíncrona define uma resposta para a limitação dos processos mais antigos, eleminando a necessita de esperar o fim de uma execução para que outra possa ocorrer. Este modelo dá um poder de processamento muito maior para qualquer aplicação que o adote, a tornando não bloqueante. Exemplo:

Um algoritmo que executa algumas rotinas demanda um tempo variável para executar cada uma delas, o que em uma estrutura síncrona causaria um bloqueio. Para ilustrar o exemplo, crie um arquivo <i>async.js</i> e nela faça as seguintes inserções:


    setTimeout(() => {
      
      console.log('\n 1º rotina executada...\n');
      
    }, 1000);
    
    setTimeout(() => {
      
      console.log(' 2º rotina executada...\n');
      
    }, 3000);
    
    setTimeout(() => {
      
      console.log(' 3º rotina executada...\n');
      
    }, 1000);
    

Cada função recebe um setTimeout method para simular o tempo de execução. Com o run do arquivo é possível perceber que todas têm seu proprio tempo de execução, mas não se bloqueiam. Isso se dá pois o Javascript segue o modelo de execução assíncrona não bloqueante. O output do exemplo seria:


    1º rotina executada...
   
    3º rotina executada...
   
    2º rotina executada...


Todas as rotinas são inicadas ao mesmo tempo independente da ordem de declaração, porém, a primeira e a terceira demandam menos tempo em relação a segunda, logo, suas finalizações são reportadas primeiro.

A seguir definiremos as diferentes formas de aplicar a programação assíncrona no Javascript:


<h2>CallBacks</h2>


Uma CallBack function é uma função associada a execução de uma rotina assíncrona, sendo chamada após sua conclusão. Para entender na prática, trascreva o código abaixo no arquivo anteriomente criado:


    function sendEmail(destinatario, corpo) {
    
      setTimeout(() => {
    
        console.log(`
    
          Para: ${destinatario}
          ________________________________________
    
          ${corpo}
          ________________________________________
    
          De: Victor
    
        `);
    
      }, 4000);
    
    }
    
    console.log('\n Enviando e-mail...')

    sendEmail('Maria', 'Olá Maria...');

    console.log(' E-mail enviado');


Estamos simulando o envio um e-mail com uma mensagem de inicialização e uma de confirmação, com o seguinte output:


      Enviando e-mail...
      E-mail enviado


      Para: Maria
      ________________________________________

      Olá Maria...
      ________________________________________

      De: Victor


Porém, seria ideal ter a mensagem de confirmação exibida após o fim da execução. Para corrigir o problema podemos utilizar uma CallBack function que só seja executada quando a rotina de envio for encerrada. Observe:

                                               V
    function sendEmail(destinatario, corpo, callBack) {
    
      setTimeout(() => {
    
        console.log(`
    
          Para: ${destinatario}
          ________________________________________
    
          ${corpo}
          ________________________________________
    
          De: Victor
    
        `);
        callBack(); <<<
      }, 4000);
    
    }
    
    console.log('\n Enviando e-mail...')
    
    sendEmail('Maria', 'Olá Maria...', () => {
      
      console.log('E-mail enviado');
    
    });


Um novo atributo foi adicionado a função sendEmail(), este sendo chamado após o console.log que simula o envio do email. Quando a função é intanciada é possível declarar uma Arrow function que execute a mensagem de confirmação. Com isso temos o resultado desejado:


    Enviando e-mail...
   
   
    Para: Maria
    ________________________________________

    Olá Maria...
    ________________________________________
    
    De: Victor
   
       
    E-mail enviado


<h2>Parâmetros em CallBacks</h2>


Por ser uma função as CallBacks permitem que parâmetros sejam passados como argumentos no momento de declaração. Veja essa ideia aplicada ao exemplo anterior:


    function sendEmail(destinatario, corpo, callBack) {
    
      setTimeout(() => {
    
        console.log(`
    
          Para: ${destinatario}
          ________________________________________
    
          ${corpo}
          ________________________________________
    
          De: Victor
    
        `);
        callBack(destinatario);
      }, 4000);
    
    }
    
    console.log('\n Enviando e-mail...')
    
    sendEmail('Maria', 'Olá Maria...', (destinatario) => {
      
      console.log(`E-mail enviado para ${destinatario}`);
    
    });


Com isso temos o seguinte output:


    Enviando e-mail...
   
   
    Para: Maria
    ________________________________________
   
    Olá Maria...
    ________________________________________
   
    De: Victor
   
       
    E-mail enviado para Maria


<h2>Promises</h2>


As promises(promessas) são um meio mais sofisticado de tratar execuções assíncronas, estas sendo lançadas ao iniciar uma rotina, determinando que sua execução irá acontecer em algum momento futuro. As promises também permitem tratar o resultado após serem finalizadas, seja a informação obtida ou um erro de operação. Uma promise segue a sintaxe abaixo: 


    function identifier() {
      return new Primise((resolve, reject) => {
    
      });
    }


Uma função assíncrona que espera uma promise retorna uma promise. E para tratar os possíveis resultados da rotina usa-se como pârametro as funções resolve(ação bem sucedida) e reject(falha na execução). As duas possíbilidades são tratadas de formas distintas ao instanciar a função assíncrona:


    identifier(

    ).then(
     
     // Ação bem sucedida

    ).catch(

     // Falha na execução

    );


Para melhor ilustrar, imagine uma rotina que registre um usuário no banco de dados. Para essa rotina é possível ter dois resultados plausíveis: sucesso e falha. Com isso, em uma pasta <i>promise.js</i>, transcreva as seguintes linhas de código:


    function registerUser() {
      return new Promise((resolve, reject) => {
    
        setTimeout(() => {
    
          var error = false;
          
          if(!error) {
    
            resolve(); // Ação bem sucedida
    
          } else {
    
            reject(); // Falha na execução
    
          }
    
        }, 4000);
    
      });
    
    }
    
    console.log('\n Processando...\n');
    
    registerUser().then(() => {
      console.log(' Usuário registrado com sucesso!')
    });


Criamos uma promise que inclui um setTimeout para simular o tempo de execução e uma clausula if-else, que define o sucesso ou a falha da execução. A condição que determina a chamada da function resolve() é um boolean chamado de error, inicialmente declarado como false. Ao executar o arquivo temos o seguinte output:


    Processando...
   
    Usuário registrado com sucesso!


O resolve foi tratado e tivemos a resposta correspondente ao registro bem sucedido do usuário. Mas, se mudarmos a variável error para true, temos o seguinte problema:


    (node:5540) UnhandledPromiseRejectionWarning: undefined


A mensagem diz que uma promise foi lançada mas seu resultado não foi tratado. Isso ocorreu pois a falha na simulação, ou a reject function, não foi tratada. Para resolver o problema defina através da função catch como sua promise irá tratar o reject na ação:


    registerUser().then(() => {

       console.log(' Usuário registrado com sucesso!');

    }).catch(() => {

      console.log(' Não foi possível registrar o usuário!');

    });


Após tornar a rodar o arquivo, temos o seguinte resultado:


    Processando...
   
    Não foi possível registrar o usuário!


<h2>Parâmetros em Promises</h2>


Da mesma forma que nas CallBack functions, uma promise também pode definir um parâmetro para cada uma das suas functions de resposta, sendo especificamente um parâmetro por function. Observe:

    ...

    resolve({
      acction: 'Register user',
      status: 'Success',
      duration: 4
    });

    ...

    reject({
      acction: 'Register user',
      status: 'Failure',
      duration: 4
    });


Um objeto json é definido como parâmetro de cada function resultante, podendo ser utilizado da seguinte maneira:


    registerUser().then((message) => {
    
      console.log(`
    
        Ação: ${message.acction}
        _______________________________
    
        Status: ${message.status}
        _______________________________
    
        Duração: ${message.duration}
      
      `);
    
    }).catch((message) => {
    
        console.log(`
      
        Ação: ${message.acction}
        _______________________________
      
        Status: ${message.status}
        _______________________________
      
        Duração: ${message.duration}
      
      `);
    
    });


Caso o resultado for bem sucedido teremos o seguinte resultado:
    
    Processando...



    Ação: Register user
    _______________________________

    Status: Success
    _______________________________

    Duração: 4


Caso ocorra uma falha na execução:


    Processando...


  
    Ação: Register user
    _______________________________
  
    Status: Failure
    _______________________________
  
    Duração: 4
  

<h2>Async/Await</h2>


Async e Await são palavra-chaves que definem a execução de uma ação assíncrona, normalmente utilizadas quando a ação resulta na obtenção de dados da base de dados, por exemplo. Async e Await são respectivamente atribuidas a uma função que espera o resultado de uma promise e a uma primise. Observe:


    function myPromise() {
      return new Promise(...);
    }

    async function myAsyncFunction() {

        await myPromise();

    }


Para melhor entender, imagine um cenário em que é preciso atribuir a uma variável uma lista de usuários que são obtidos a partir de uma promise, esta sendo responsável por faz um SELECT no banco de dados. Primeiro definiremos a promise:


    function getUsers() {
      return new Promise((resolve, reject) => {
    
        setTimeout(() => {
    
          resolve(
            [
              {name: 'Victor'},
              {name: 'Dinah'},
              {name: 'André'},
              {name: 'Maria'},
              {name: 'Carlos'},
            ]
          );
    
        }, 3000);
    
      });
    }


Uma lista com cinco usuários é definida como parâmetro da função resolve. Em seguida iremos criar a função assincrona que irá esperar o resultado da promise e em seguida irá atribuir o resultado a uma variável:


    async function main() {
    
      var users = await getUsers();
      console.log(users);
    
    }

    main(); 


Como resultado temos a lista de usuários sendo atribuída a variável users, e esta por sua vez sendo listada no console:


    [
      { name: 'Victor' },
      { name: 'Dinah' },
      { name: 'André' },
      { name: 'Maria' },
      { name: 'Carlos' }
    ]


Um detalhe importante para se deixar claro é que aplicar a programação assícrona nem sempre é necessário ou recomendado, já que certas execuções demandam uma ordem a ser seguida, especialmente se algum trecho depender da informação obtida em uma rotina ainda não executada.


<h1>Javascript Orientado a Objetos</h1>