<div align="center">
 <img src="https://user-images.githubusercontent.com/61476935/116564205-23641d80-a8db-11eb-95a9-96eb071ab6cb.png"> 
</div> 
<br>
<img src="https://img.shields.io/static/v1?label=javascript&message=Language&color=yellow&style=for-the-badge&logo=JavaScript"/>

O ECMAScript é uma linguagem de programação do tipo script, criada e implementada para o desenvolvimento Web. Popularmente conhecida como JavaScript, é uma linguagem de tipagem dinâmica fraca, e multiparadigmas

<div align="center">
  <h1>Tipos de Dados</h1>
</div>


<h2>Primitive </h2>


Os valores primitivos são chamados assim porque são imutáveis e, portanto, antigos dentro do Js. Não são representados por object, datatype que será visto mais à frente. Correspondem ao Primitive Type:


<h2>String </h2>


O tipo string é voltado para a representação de dados textuais ou alfanuméricos imutáveis;


<h2>Number</h2> 


O tipo number, como o nome sugere, tem  a função de representação numérica no Js. Essa representação recebe uma designação de infinity, podendo ser - (negativa) ou + >(positiva). Uma representação dessa designação pode ser vista a seguir:

> 42 / +0 Infinity > 42 / -0 -Infinity
 Onde as variações podem ser tanto do valor quanto do sinal;
 

<h2>NaN</h2>


Um NaN, ou Not-a-Number, é uma propriedade do objeto global ;
  

<h2>Boolean</h2>


O Boolean Type é considerado uma entidade lógica com apenas dois resultados possíveis: true (verdadeiro) e false (falso); 


<h2>Null</h2>


O Null é tido como o anulador dentro do JavaScript, onde seu valor único é Null (nulo);


<h2>Undefined</h2>

 
O Undefined type é atribuído a uma variável cujo valor é indefinido dentro do programa;


<h2>Symbol</h2>


São mais recentes na linguagem que os anteriores. São utilizados como chaves de propriedades de um objeto que, por sua vez, é um valor registrado na memória que pode ser referenciado por um identificador. 


<h2>Object</h2>


O JavaScript é uma linguagem projetada com base em paradigmas orientados a objetos. Um objeto é uma junção de propriedades, que são definidas pela associação entre um nome e um valor. Em JavaScript, um objeto possui as mesmas características de um objeto na nossa realidade. Os objetos ao nosso redor têm forma, tamanho, peso, cor e inúmeras características que os definem. No JavaScript há objetos que são caracterizados por suas propriedades e, portanto, possuem variações como na vida real. 


<div align="center">
   <h1>Armazenando Dados</h1>
</div>


<h2>Var</h2>


Elemento que carrega consigo algum valor atrubuído. Sendo definida como global, ela pode ser utilizada em qualquer lugar da aplicação. Exemplos:

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


Possui função semelhante a de uma var, porém, só pode ser utilizada no trecho de código que a contém

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

    //Console

    ReferenceError: userProfession is not defined


<h2>Const</h2>


Assim como uma let, uma const possui a limitação de ter seu uso restrito ao trecho de código que a contém, porém, as semelhanças acabam aqui. Uma constante, por definição, possui um valor imutável em casos como os vistos acima. Veja:

    if(true) {
        const userName = 'Victor'
        userName = 'João'
        console.log(userName)
    }

    //Console

    userName = 'João'
             ^

    TypeError: Assignment to constant variable.


<h3>Corrigindo</h3>


Apesar do resultado, não é impossível editar o valor que uma const carrega, o ponto é, o dado que a mesma contém precisa ser de um tipo especifico, como um objeto ou array por exemplo: 


    if(true){
        const user = {nome: 'Victor'};
        user.nome = "João"
        console.log(user)
    }
 
    //Console

    { nome: 'João' }
    
    
<div align="center">
  <h1>Operadores</h1>
</div>


<h2>Aritméticos</h2>


  >soma(+) subtração(-) multiplicação(*) divisão(/) exponenciação (**) módulo(%) 

<h2>Incremento</h2>


O incremento age como um anexador de valor para a variável, podendo incluir um número a ela, ou redefini-la, sempre de forma crescente.
Possui duas formas com função diferente para cada uma:
 

<h2>Pré Fixado ++X</h2>


Sendo x a variável, é chamado de operador pré fixado, já que é definido antes da variável. Sua função é atribuir valor a sua variável e mostrar o resultado após a soma

    > var a  = 1
    undefined
    > ++a
    2


<h2>Pós Fixado X++</h2>


É chamado de operador pós fixado, sendo definido após a variável. Sua função também é atribuir valor a sua variável, mas não altera visialmente o valor da mesma

    > var a  = 1
    undefined
    > ++a
    2
    > a++
    2


<h2>Decremento</h2>


O decremento age como um redultor de valor para a variável, podendo retirar um número da mesma, ou redefini-la, sempre de forma decrescente. Possui duas formas com função diferente para cada uma:


<h2>Pré Fixado --X</h2>


<h5>Causa decremento ao valor atribuído à variável</h5>

    > var b = 2
    undefined
    > --b
    1


<h2>Pós Fixado X--</h2>


Causa decremento ao valor atribuído à variável, não causando alteração visual nesse valor

    > var b = 2
    undefined
    > --b
    1
    > b--
    1


<h2>Auto Atribuições</h2>


Age de forma a vincular um valor a uma variável já numerada, ou valorada, de forma que essa variável use do valor nela antes incluído para se auto atribuir, reduzir, multiplicar ou dividir, através de uma operação dentro dela mesma, e com ela mesma.

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

  
  >t = t - 4  
  >t = t * 4  
  >t = t / 4  
  >t = t **4  
  >t = t % 4  


<h3>Simplificada</h3>

  
  >t -= 4<br>
  >t *= 4<br>
  >t /= 4<br>
  >t **= 4<br>
  >t %= 4<br>


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
   

<div align="center">
  <h1>Vetores</h1>
</div>


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

    arr.join([separador = ','])

<div align="center">
  <h5>
   Assim como o split( ), um parâmetro de definição do espaçamento é determinado no método 
  </h5>
</div>



<h2>Concat( )</h2>

O método concat( ) basicamente concatena dois arrays distintos.

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

<ul>
 <li>O elemento atual sendo processado na array(Obrigatório);</li>
 <li>O índice do elemento atual sendo processado na array(Opcional);</li>
 <li>O array de origem(Opcional);</li>
</ul>


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

  
Como nome sugere, é utilizado para encontrar determinada informação, esta sendo pré definida. Caso um valor dentro da array corresponder ao valor pré definido, o método find() toma esse valor como resultado

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

<h2>Callback<h2>

Função que é executada em cada valor no array (exceto no primeiro, se nenhum valorInicial for passado); recebe quatro argumentos:

<h2>Acumulador<h2>

Opcional. O índice do elemento atual que está sendo processado no array. Começa a partir do index 0 se um valorInicial for fornecido.
Do contrário, começa do index 1.

<h2>ValorInicial<h2>

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

É onde se define as expressões ou variáveis que serão utilizadas no loop, sendo essas variáveis obrigatoriamente do tipo var

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



<h2>For(... of... )</h2>

    const users = ["Victor", "Milena", "Matheus", "João", "Hugo"];

    for( names of users ){
        console.log(names)
    };

    Terminal 

    Victor
    Milena
    Matheus
    João 
    Hugo 


<h2>Breack point</h2>

    const users = ["Victor", "Milena", "Matheus", "João", "Hugo"];

    for( names of users ){
       console.log(names);
        if(names === "João") {
           break;
        }
    
    };
    
    Terminal 

    Victor
    Milena
    Matheus
    João

<h2>While</h2>

O while executa uma rotina enquanto a condição que ele contém for verdadeira. Sintaxe:

    while (condição) {
      rotina
    }

Exemplo:

    let numb = 0;

    while(numb < 5) {
        numb++
        console.log(numb)
    };
    
    Terminal
    
    1
    2
    3
    4
    5
    
<h2>Switch</h2>
