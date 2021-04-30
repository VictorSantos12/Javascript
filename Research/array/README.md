<div align="center">
  <h1>Vetores</h1>
</div>


Um vetor, array ou mesmo variável compostas, difere de uma variável simples apenas pela capacidade
de armazenar multiplos dados na sua estrutura

    var exemplo = [item1, item2, item3];

Um Array é defindo dentro de uma variável comum que recebe [ ] definindo
que mais de um valor será declarado. Os valores podem ser acessados por 
suas posições

    var food = ["Pizza", "Bolo", "Macarrão"];

    console.log(food[0], food[1], food[2]);

 Um detalhe importante a se ater é que a contagem de posições, ou indices,
 de um vetor sempre se inicia em 0

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

O push é um método interno do javascript que insere valor a um
array, de forma que esse oculpe o ultimo indice do vetor

    let books = ["Harry Potter", "O Hobbit", "Sapiens"];

    books.push("A Guerra dos Tronos");

    console.log(books);
   
    //Console
    
    ["Harry Potter", "O Hobbit", "Sapiens", "A Guerra dos Tronos"]
    


<h2>Unshift( )</h2>

Tem a função inversa do método push( ), inserindo um elemento como primeiro indice do array
  
    let cidades = ["João Pessoa", "Natal", "Salvador"];
    cidades.unshift("Recife");

    console.log(cidades);
    
    //Console
    
    [ 'Recife', 'João Pessoa', 'Natal', 'Salvador' ]



<h2>Sort( )</h2>

O sort( ), que literalmente significa organizar, é um método javascript
que distribui os valores de uma array de forma a torna-los numericamente
ou alfabeticamente ordenados

     let numb = [1, 456, 30, 17, 0.5];
   
     console.log(numb.sort());

     //Console
     
     [ 0.5, 1, 17, 30, 456 ]



<h2>Length</h2>

O length é uma atributo que pode ser dado a um array, definindo a quantidade
de indices que a mesma possui

    let things = ["Celular", "Mouse", "Ventilado"];
    console.log(things.length);

     //Console

    3
    
    
    
<h2>Slice( )</h2>

O método slice define um novo array a partir de um outro

    let array = ['Lord of the Rings', 'O Hobbit', '1255', 'Batata'];
    let novoArray = array.slice(1,3);
    console.log(novoArray);
    
    //Console
    
    ['O Hobbit', '1255']

<div align="center">
  <h5>
   A definição é feita a partir do identificador da array inicial, e a partir dos
   indices deste são definidos os valores do novo array(1,3)
  </h5>
</div>



<h2>Split( )</h2>

O método split gera um array a partir de um string, lembrando que um string nada
mais é que um array com indices do tipo char, ou caractere

    //Gerar indices com base no espaçamento(" ")
   
    let nome = "João Victor dos Santos";
    let splitNome = nome.split(' ');
    
    console.log(splitNome);
    
    //Console
    
    [ 'João', 'Victor', 'dos', 'Santos' ]

<div align="center">
  <h5>
   O parâmetro de separação é definido no método split(' '), sendo este o espaço entre 
   as substrings que formam a string atribuída a variável nome
  </h5>
</div>

    //Defnindo um parâmetro de limite
    
    let dataNascimento = "28 de Maio de 2001";
    let data = dataNascimento.split(" ", 3)
    
    console.log(data);
    
    //Console
    
    [ '28', 'de', 'Maio' ]

<div align="center">
  <h5>
   Neste caso é definido um parâmetro de limite, atribuíndo a variável data apenas as
   três primeira substrings, sendo estas seus novos indices
  </h5>
</div>



<h2>Slice( ) + Split( )</h2>

Ambos os métodos slice e split possuem a mesma função prática, portanto, é possível 
relacioná-los para obter um resultado ainda mais preciso


    let dataNascimento = "28 de Maio de 2001";
    let mes = dataNascimento.split(" ", 3)
    let dia = mes.slice(0,1);
    
    console.log(dia);
    
    //Console
    
    [ '28' ]

<div align="center">
  <h5>
   A união desses métodos permite quebrar ainda mais uma informação, o que é bastante útil
   caso seja preciso ter apenas parte dela 
  </h5>
</div>

 
 
<h2>Join( )</h2>

O método join( ) tem a função oposta ao método split( ), gerando um string a partir de
um array

    let array = ['João', 'Victor', 'dos', 'Santos'];
    let nome = array.join(' ');
   
    console.log(nome);
    
    //Console
    
    João Victor dos Santos

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



<h2>Shift( )</h2>

Sendo o oposto do pop( ), o método shift( ) remove o primeiro indice do array
  
    let array1 = ['João', 'Victor', 'dos', 'Santos'];
    array1.shift();

    console.log(array1);

    //Console

    [ 'Victor', 'dos', 'Santos' ]
 


<h2>Splice( )</h2>

Com o método splice é possível definir dois elementos e inserir um valor entre eles,
substituíndo os que ocupavam esta(s) posições

    let cidades = [ 'Recife', 'João Pessoa', 'Natal', 'Salvador' ];
    cidades.splice(1,2, 'Fortaleza');

    console.log(cidades);
    
    //Console
    
    [ 'Recife', 'Fortaleza', 'Salvador' ]



<h2>Reverse( )</h2>

O método reverve( ) inverte a ordem dos elementos de um array

    let cidades = [ 'Recife', 'João Pessoa', 'Natal', 'Salvador' ];
    cidades.reverse();

    console.log(cidades); 

    //Console
    
    [ 'Salvador', 'Natal', 'João Pessoa', 'Recife' ]


    
<h2>Entries( )</h2>    

O método entries( ) retorna um novo objeto Array Iterator que contém os pares chave/valor para cada
índice no array, definindo um valor de posição para cada 

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
    
<h2>Entries() + Loop</h2>  

Uma outra forma de uso do entries() é em conjunto com um loop de execução.
Para cada indice é definida uma posição dentro do novo objeto gerado

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
    
O método every( ) age como uma forma de validação lógica. Ele é submetido a um array para definir se cada
indice do mesmo corresponde a determinado padrão pré definido

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

<div align="center">
  <h5>
   A função isBigEnough(função de callback) define um valor padrão como return, quando submetemos as variáveis que 
   guardam os array esse valor padrão é comparato com os valores contidos nas mesmas. Caso os valores não correspondam
   ao padrão, o método every() retorna um boolean to tipo false, caso correspondam, retorna true.
  </h5>
  <h5>
   Obs.: Os parâmetros element, index e array são parâmetros padrão de uso em uma função de callback, eles definem
   respectivamente: 
  </h5>
</div>

<ul>
 <li>O elemento atual sendo processado na array(Obrigatório);</li>
 <li>O índice do elemento atual sendo processado na array(Opcional);</li>
 <li>O array de origem(Opcional);</li>
</ul>



<h2>Filter()</h2>

O método filter é semelhante ao every(), porém, ele define como resultado todos os valores que corresponderem ao 
valor padrão pré definido

     function isBigEnough(element, index, array) {
         return element >= 10;
     }

     let values = [20, 346, 6, 9, 38, 11, 9.99];
     let result = values.filter(isBigEnough);

     console.log(result);
     
     //Console
     
     [ 20, 346, 38, 11 ]

<div align="center">
  <h5>
   Nesse caso, cada valor foi submetido ao valor padão pré definido, e os que corresponderam a ele foram filtrados
  </h5>
</div>



<h2>Find()</h2>
  
Como nome sugere, é utilizado para encontrar determinada informação, esta sendo pré definida. Caso um valor 
dentro da array corresponder ao valor pré definido, o método find() toma esse valor como resultado

    let data = [18, 100, 0.05]

    let result = data.find(element => element < 1);

    console.log(result);
 
    //Console
    
    0.05



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

<div align="center">
  <h5>
   Uma função determina uma ação, quando esta é aplicada ao array cada elemento do array
   sofre a ação, neste caso sendo atribuido um valor correpondente a posição e mostrado
   no console
  </h5>
</div>


<h2>Map()</h2>

O método map() invoca a função de callback passada por parâmetro para cada elemento do
Array e devolve um novo Array como resultado

    let numbers = [1, 2, 3, 4, 5];
    let doubles = numbers.map(function(number) {
      return number * 2;
    });

    console.log(doubles)

     //Console
     
     [ 2, 4, 6, 8, 10 ]
