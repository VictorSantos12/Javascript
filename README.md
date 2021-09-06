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

 
O Undefined type é atribuído a uma variável cujo valor é indefinido dentro do programa;


    > var undefined;
    undefined
    > undefined
    undefined


<h2>Symbol</h2>


São mais recentes na linguagem que os anteriores. São utilizados como chaves de propriedades de um objeto que, por sua vez, é um valor registrado na memória que pode ser referenciado por um identificador. 


<h2>Object</h2>


O JavaScript é uma linguagem projetada com base em paradigmas orientados a objetos. Um objeto é uma junção de propriedades, que são definidas pela associação entre um nome e um valor. Em JavaScript, um objeto possui as mesmas características de um objeto na nossa realidade. No JavaScript os objetos são caracterizados por suas propriedades e, portanto, possuem variações como objetos reais. Veremos mais sobre o Javascript orientado a objetos mais a frente.



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


Estruturas que analisam dois elementos determinando qual é a relação entre ambos, se de igualdade, superioridade numérica, superioridade semântica, etc. Sendo o resultado dessa operação um boolean, ela pode ser utilizado de inúmeras formas

> Maior que( > )    Menor que( < )     Maior ou igual( >= )    Menor ou igual( <= )    Igual( == )     Diferente( != ) 
   
<h5>Exemplos</h5>

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


<h2>Igualdade Restrita ===</h2>


Operador variante do que define igualdade, sendo representado por ===, ele define se os valores em operação são identicos, tanto 
em valor numerico quanto em valor semantico, além de definir se são do mesmo tipo

    > "nome" === 7
    false
    > false === false
    true
    > null === "null"
    false


<div align="center">
  <h1>Operadores Lógicos</h1>
</div>


Com suas restrições, os operadores lógicos tipicamente são usados com booleans e retornam booleans, executando uma operação
entre dois ou mais operandos, definindo um valor lógico final com base no valor lógico dos operandos que contenham


<h2>Negação !</h2>


>! - Chamado de NÃO/NOT lógico

Define que o valor lógico de qualquer objeto, variável o item que o receba sempre será false, exceto em casos em que esse valor já for do tipo false, ou seja, ele define o oposta do valor inicial de quem o recebe

    > !true
    false
    > !false
    true


<h2>Conjunção &&</h2>


>&& - Chamado de E/AND lógico

O operador de conjunção, representado por && (também chamado de “e comercial”) tem a função semântica de conjunto: "um elemento e outro com ele". Segue uma sintaxe binária, onde há dois operandos, sendo eles verdadeiro e falso. Se ambos forem verdadeiros a operação retorna true, se apenas um for falso, assim caso sejam os dois, o valor retornado é false

    > "number" === 1 && null === null
    false
    > "number" === "number" && null === null
    true


<h2>Disjunção ||</h2>


>|| - Chamado de OU lógico 
    
A disjunção literalmente diz para o programa que pode aceitar dentre dois operandos um false como resultante. Mas ele não aceita que ambos sejam do tipo false sem determinar o resultado final como false. Caso apenas um seja true, assim como os dois, o resultado final será true
   
    > false || false
    false
    > true || false
    true
    > true || true
    true


<h1>Unidades de Armazenamento</h1>


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


<h1>Vetores</h1>


Um vetor, array ou mesmo variável compostas, difere de uma variável simples apenas pela capacidade de armazenar multiplos dados na sua estrutura

    var exemplo = [item1, item2, item3];

Um Array é defindo dentro de uma variável comum que recebe [ ] definindo que mais de um valor será declarado. Os valores podem ser acessados por suas posições

    var food = ["Pizza", "Bolo", "Macarrão"];

    console.log(food[0], food[1], food[2]);

Um detalhe importante a se ater é que a contagem de posições, ou indices, de um vetor sempre se inicia em 0


<h2>Inserindo Dados</h2>


    var food = ["Pizza", "Bolo", "Macarrão"];
    food[3] = "Sushi";

    console.log(`${food[0]}, ${ food[1]}, ${food[2]}, ${food[3]}`);

    Terminal 

    Pizza, Bolo, Macarrão, Sushi
   
    
<div align="center">
   <h1>Métodos e Atributos de Um Array</h1> 
</div>


<h2>Push( )</h2>


O push é um método interno do javascript que insere valor a um array, de forma que esse oculpe o ultimo indice do vetor

    let books = ["Harry Potter", "O Hobbit", "Sapiens"];

    books.push("A Guerra dos Tronos");

    console.log(books);
   
    //Console
    
    ["Harry Potter", "O Hobbit", "Sapiens", "A Guerra dos Tronos"]

<br>
    
    //Sintaxe

    arr.push(elemento1, ..., elementoN)


<h2>Unshift( )</h2>


Tem a função inversa do método push( ), inserindo um elemento como primeiro indice do array
  
    let cidades = ["João Pessoa", "Natal", "Salvador"];
    cidades.unshift("Recife");

    console.log(cidades);
    
    //Console
    
    [ 'Recife', 'João Pessoa', 'Natal', 'Salvador' ]

<br>
    
    //Sintaxe

    arr.unshift([element1[, ...[, elementN]]])


<h2>Sort( )</h2>


O sort( ), que literalmente significa organizar, é um método javascript que distribui os valores de uma array de forma a torna-los numericamente ou alfabeticamente ordenados

     let numb = [1, 456, 30, 17, 0.5];
   
     console.log(numb.sort());

     //Console
     
     [ 0.5, 1, 17, 30, 456 ]

<br>
    
    //Sintaxe

    arr.sort([funcaoDeComparacao])


<h2>Length</h2>


O length é uma atributo que pode ser dado a um array, definindo a quantidade de indices que a mesma possui

    let things = ["Celular", "Mouse", "Ventilado"];
    console.log(things.length);

    //Console

    3

<br>
    
    //Sintaxe

    arr.length

    
<h2>Slice( )</h2>


O método slice define um novo array a partir de um outro

    let array = ['Lord of the Rings', 'O Hobbit', '1255', 'Batata'];
    let novoArray = array.slice(1,3);
    console.log(novoArray);
    
    //Console
    
    ['O Hobbit', '1255']

<br>
    
    //Sintaxe

    arr.slice([início[,fim]])

<div align="center">
  <h5>
   A definição é feita a partir do identificador da array inicial, e a partir dos indices deste são definidos os valores do novo array(1,3)
  </h5>
</div>


<h2>Split( )</h2>


O método split gera um array a partir de um string, lembrando que um string nada mais é que um array com indices do tipo char, ou caractere

    //Gerar indices com base no espaçamento(" ")
   
    let nome = "João Victor dos Santos";
    let splitNome = nome.split(' ');
    
    console.log(splitNome);
    
    //Console
    
    [ 'João', 'Victor', 'dos', 'Santos' ]

<h5>
 O parâmetro de separação é definido no método split(' '), sendo este o espaço entre as substrings que formam a string atribuída a variável nome
</h5>

    //Defnindo um parâmetro de limite
    
    let dataNascimento = "28 de Maio de 2001";
    let data = dataNascimento.split(" ", 3)
    
    console.log(data);
    
    //Console
    
    [ '28', 'de', 'Maio' ]

<h5>
 Neste caso é definido um parâmetro de limite, atribuíndo a variável data apenas as três primeira substrings, sendo estas seus novosindices
</h5>


<h2>Slice( ) + Split( )</h2>


Ambos os métodos slice e split possuem a mesma função prática, portanto, é possível relacioná-los para obter um resultado ainda mais preciso

    let dataNascimento = "28 de Maio de 2001";
    let mes = dataNascimento.split(" ", 3)
    let dia = mes.slice(0,1);
    
    console.log(dia);
    
    //Console
    
    [ '28' ]

<div align="center">
  <h5>
   A união desses métodos permite quebrar ainda mais uma informação, o que é bastante útil caso seja preciso ter apenas parte dela 
  </h5>
</div>

 
<h2>Join( )</h2>


O método join( ) tem a função oposta ao método split( ), gerando um string a partir de um array

    let array = ['João', 'Victor', 'dos', 'Santos'];
    let nome = array.join(' ');
   
    console.log(nome);
    
    //Console
    
    João Victor dos Santos

<br>

    //Sintaxe

    arr.join([separador = ' '])

<div align="center">
  <h5>
   Assim como o split( ), um parâmetro de definição do espaçamento é determinado no método 
  </h5>
</div>



<h2>Concat( )</h2>

O método concat( ) basicamente concatena dois arrays distintos

    let array1 = [ 0, 1, 2, 3, 4, 5 ];
    let array2 = [ 6, 7, 8, 9, 10 ];
    array3 = array1.concat(array2);
    
    console.log(array3);
    
    //Console
    
    [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

<br>

    //Sintaxe

    arr.concat(valor1, valor2, ..., valorN)

<div align="center">
  <h5>
   O resultando é um array cujos indices são a soma dos indices dos arrays concatenados
  </h5>
</div>



<h2>Pop( )</h2>


O método pop( ) remove o ultimo indice de um array

    let array1 = ['João', 'Victor', 'dos', 'Santos'];
    array1.pop();

    console.log(array1);

    //Console
    
    [ 'João', 'Victor', 'dos' ]

<br>

    //Sintaxe

    arr.pop()


<h2>Shift( )</h2>


Sendo o oposto do pop( ), o método shift( ) remove o primeiro indice do array
  
    let array1 = ['João', 'Victor', 'dos', 'Santos'];
    array1.shift();

    console.log(array1);

    //Console

    [ 'Victor', 'dos', 'Santos' ]
 
<br>

    //Sintaxe

    arr.shift()


<h2>Splice( )</h2>


Com o método splice é possível definir dois elementos e inserir um valor entre eles, substituíndo os que ocupavam esta(s) posições

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


O método reverve( ) inverte a ordem dos elementos de um array

    let cidades = [ 'Recife', 'João Pessoa', 'Natal', 'Salvador' ];
    cidades.reverse();

    console.log(cidades); 

    //Console
    
    [ 'Salvador', 'Natal', 'João Pessoa', 'Recife' ]

<br>

    //Sintaxe

    arr.reverse()

    
<h2>Entries( )</h2>    


O método entries( ) retorna um novo objeto Array Iterator que contém os pares chave/valor para cada índice no array, definindo um valor de posição para cada 

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


Uma outra forma de uso do entries() é em conjunto com um loop de execução. Para cada indice é definida uma posição dentro do novo objeto gerado

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

<div align="center">
  <h5>
   Os loops serão mais bem abordados a frente
  </h5>
</div>



<h2>Every()</h2>  
    
O método every( ) age como uma forma de validação lógica. Ele é submetido a um array para definir se cada indice do mesmo corresponde a determinado padrão pré definido

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


<h5>
 A função isBigEnough(função de callback) define um valor padrão como return, quando submetemos as variáveis que guardam os array essevalor padrão é comparato com os valores contidos nas mesmas. Caso os valores não correspondam ao padrão, o método every() retorna umboolean to tipo false, caso correspondam, retorna true.
</h5>

<h5>
 Obs.: Os parâmetros element, index e array são parâmetros padrão de uso em uma função de callback, eles definem respectivamente: 
</h5>


- O elemento atual sendo processado no array(Obrigatório);
- O índice do elemento atual sendo processado no array(Opcional);
- O array de origem(Opcional);


<h2>Filter()</h2>


O método filter é semelhante ao every(), porém, ele define como resultado todos os valores que corresponderem ao valor padrão pré definido

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

<div align="center">
  <h5>
   Nesse caso, cada valor foi submetido ao valor padão pré definido, e os que corresponderam a ele foram filtrados
  </h5>
</div>


<h2>Find()</h2>

  
Como nome sugere, é utilizado para encontrar determinada informação, esta sendo pré definida. Caso um valor dentro da array corresponda ao valor pré definido, o método find() toma esse valor como resultado

    let data = [18, 100, 0.05]

    let result = data.find(element => element < 1);

    console.log(result);
 
    //Console
    
    0.05

<br>

    //Sintaxe

    arr.find(callback(element[, index[, array]])[, thisArg])


<h2>ForEach()</h2>


O método forEach() executa determinada ação em cada elemento de um array

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


<div align="center">
  <h5>
   Uma função determina uma ação, quando esta é aplicada ao array cada elemento do array sofre a ação, neste caso sendo atribuido um valor correpondente a posição e mostrado no console
  </h5>
</div>


<h2>Map()</h2>


O método map() invoca a função de callback passada por parâmetro para cada elemento do Array e devolve um novo Array como resultado

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


O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

    //Sintaxe
    
    array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]))

<h2>Callback</h2>

Função que é executada em cada valor no array (exceto no primeiro, se nenhum valorInicial for passado); recebe os seguintes argumentos:

<h2>Acumulador</h2>

Opcional. O índice do elemento atual que está sendo processado no array. Começa a partir do index 0 se um valor Inicial for fornecido.
Do contrário, começa do index 1.

<h2>ValorInicial</h2>

Opcional. Valor a ser usado como o primeiro argumento da primeira chamada da função callback. Se nenhum valorInicial é fornecido, o
primeiro elemento do array será usado como o valor inicial do acumulador e o valorAtual não será lido. Chamar reduce() em uma array
vazia sem valor inicial retornará um erro

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


<div align="center">
  <h1>Criando Loops</h1>
</div>


<h2>For</h2>


O for é um mecanismo de looping do javascript. Adaptativo, é bastante usual quando é preciso definir o aparecimento de um bloco repetidas vezes. O mesmo funciona seguindo a sintaxe abaixo:

    for ([inicialização]; [condição]; [expressão de mudança])
    declaração

<h5>Exemplo prático</h5>

    for (var numb = 0; numb < 101 ; numb++ ) {
        console.log(numb)
     }
 

<h2>Inicialização (Valor inicial)</h2>


É onde se define as expressões ou variáveis que serão utilizadas no loop

    let numb = 0;


<h2>Condição (Enquanto...)</h2>


Expressão que é avaliada antes de qualquer processo de execução no loop. Possuindo um valor padrão true, executa o bloco enquanto esse valor permanecer verdadeiro, e o encerra quando for falso. A definição de uma condição não é obrigatória para executar o loop, masi é necessária para definir  que esse loop é finito

    numb < 101


<h2>Expressão de Mudança (faça...)</h2>


<h5>Expressão que define uma alteração após cada ciclo de repetição do loop, normalmente definido alguma mudança, incrementando ou decremento</h5>

    numb++


<h2>Declaração (faça...)</h2>


A declaração é semelhante a expressão final, sendo executada apenas se a condição se mantiver verdadeira, em casos podendo substituír a própria expressão final

    for (let numb = 0; numb < 101 ;) {
        numb++ 
       console.log(numb)
    }


<h2>For(... in... )</h2>


O laço for...in  interage sobre propriedades enumeradas de um objeto, na ordem original de inserção. O laço pode ser executado para cada propriedade distinta do objeto

    var obj = {a:1, b:2, c:3};
    
    for (var prop in obj) {
    
      console.log("obj." + prop + " = " + obj[prop]);
    }

    //Console

    obj.a = 1
    obj.b = 2
    obj.c = 3


<h2>For(... of... )</h2>


O loop for...of percorre objetos iterativos (incluindo Array, Map, Set, o objeto arguments e assim por diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto

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
    }

    //Console

    { name: 'Victor', age: 19 }
    { name: 'Milena', age: 23 }
    { name: 'Matheus', age: 30 }
    { name: 'João', age: 22 }
    { name: 'Hugo', age: 39 }


<h2>Breack point</h2>


O atributo break encerra o loop e retorna o array de acordo com o parâmetro definido


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

    //Console

    { name: 'Victor', age: 19 }
    { name: 'Milena', age: 23 }
    { name: 'Matheus', age: 30 }
    { name: 'João', age: 22 }


<h2>While</h2>


O while executa uma rotina enquanto a condição que ele carrega for verdadeira. Sintaxe:

    while (condição) {
      rotina
    }

Exemplo:

    let numb = 0;

    while(numb < 5) {
        numb++
        console.log(numb)
    };
    
    //Console
    
    1
    2
    3
    4
    5
    
    
<h2>Switch</h2>


