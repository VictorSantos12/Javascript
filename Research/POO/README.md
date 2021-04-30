
  ~Programação Orientada a Objetos

      Antes  de defir o que é a orientação a Objetos, é de suma importância definir qual a razão da sua existência.
   Anteriormente, nos tempos em que a computação se limitava a determinados processos de execução e somente a eles,
   a orientação a objetos surgiu com o intuito de tornar a vida dos desenvolvedores mais "fácil" em termos de 
   execução de seu trabalho. Com praradigmas como o estruturado, um dos primeiros a serem desenvolvedos, a
   programação mantinha uma complexidade demasiadamente desnecessária e um baixo nível. A aplicação de
   conceitos, hoje simples a quem os conhece, era bem mais difícl antes da orentação a objetos, que deu uma 
   característica essencial às linguagens nela baseadas: o alto nível;

  ~Conceitos que levaram a Criação do POO

  * Reúso
   
       O reúso torna o código já desenvolvido algo não descartável, seja pelo reúso de informações, funções ou
    de forma mais clara: o comportamento de um outro objeto;

  * Coesão 

       Tem por função isolar determinados comportamentos de trechos de códigos que fazem parte do mesmo algoritmo
    ou que possuem algum grau de relacionamento. Com isso é possível evitar a sobrecarga de informações em pontos
    específicos do mesmo, tornando o código mais legível e menos passível a erros;

  * Acoplamento

       Define a relação entre entidades de um algoritmo e como essa relação resulta na troca de informações entre
    ambas ou mais;


   ~Conceito de Orentação a Objetos

       O mundo em si é definido por características e funcionalidades. As características têm o poder de agrupar
   e separar tudo, seja o pão que compõe o café da manhã, seja a proteína que definine um tipo específico de vírus.
   Elas são o que tornam um indivíduo o que ele é. A OO é simplesmente a maneira que a programação tem de representar
   tudo o que existe em código. Além da representação, a  orientação a objetos evoluiu tanto, que todo um projeto pode
   ser arquitetado com base no paradigma. Desde o que será representado, até quais caracteristicas deverão de fato entrar
   como representantes deste que será representado, e mais: como esse objeto se relaciona com os a ele associados.

   ~Fundamentos 

   * Abstração

        A abstração torna o objeto visível e tangível da realidade percebida pelos sentidos em um objeto
     lógico. Como foi dito, cada coisa existente possui características, sejam elas visíveis ou não. Em POO,
     defini-se um objeto através de uma classe, esta sendo criada com base em características que separam
     determinados objetos em grupos.
        Para melhor resumir, imagine uma caixa e suas características: dimenções, volume, cor, material de
    confecção etc. Cada um desses pode definir um tipo diferente de caixa. Portanto, usa-se a abstração, cuja
    função é filtrar as informações mais definitivas de um objeto para que o mesmo possa ser criado. 
        Ainda tendo a caixa em mente, é possível pensar em uma série de coisas que se pode guardar dentro dela,
    porém, sua função sempre será a de guardar, logo, o volume quue essa caixa pode conter é um valor relevante.
    Esse exercício é feito com base na função que determinado objeto terá no porjeto, por isso, sua
    definição segue tais conseitos;

   * Herança(Reúso)

        A herança está totalmente ligada a relação entre componentes de uma estrutura lógica, onde comportamentos,
    dados e objetos podem ser trocados entre eles. Imagine uma fila de pessoas que sempre tem que passar uma
    informação a pessoa a sua frente. Por ser uma infomação importante, ela só deve ser passada se a pessoa
    que recebe de fato confia na pessoa a sua frente, portanto, as pessoas que recebem a informação devem,
    de alguma forma, ter uma relação com a pessoa antes dela. Com isso se conclui que a informação pode 
    não chegar ao fim da fila. Esse exemplo resume de forma simples o conceito de herança, onde uma informação
    só é passada adiante se houver algum grau de relação entre o emissor e quem recebe;

   * Encapsulamento

        Encapsulamento é um meio de omitir informações não relevantes em algum ponto do algoritmo, sendo básicamente
    o conceito de coesão mais bem definido. Para exemplificar, imagine outra vez uma caixa, mas desta vez imagine
    uma caixa de sapato. Para que essa caixa cumpra sua função, ela não precisa saber como o sapato é feito, qual
    material foi usado o qual a cor do sapato, ela só precisa do resultado final para executar seu propósito.

   * Polimorfismo

    

    ~Conceitos Estruturais

    * Classes

     Já tendo definido que um objeto nada mais é que uma junção de características e funcionalidades que divídem
     tudo em grupos distintos, é a vez de definir um dos conceitos mais importantes e o primeiro a ser pensado
     na programação orientada a objetos. Uma classe ou entidade é a abstração de um objeto, ou seja, ela é a
     representação de um objeto. Uma classe define os atributos(propriedades) e métodos(funções) de um objeto,
     servindo de base para sua criação. Pode-se citar como exemplo a caixa anteriormente vista, a qual pode ser
     de vários tipos, mas ainda assim é uma caixa. Portanto, uma caixa de sapatos, uma caixa de lápis ou mesmo
     uma caixa de fósforos podem fazer parte de uma classe chamada Caixa, sendo o seu conteúdo a principal
     diferença entre elas.
     
      Uma classe é definida pelo uso da palavra reservada *class* mais o nome que ela terá.
      
      Veja um exemplo de criação de classe em javascript:

     class Caixa {

     }

    *Atributo

     Sendo um objeto um conjunto de características, uma classe, cuja função é ser base para tal objeto, necessita
     possuir as mesmas características que o objeto visado. Essas características também são chamadas de atributos,
     nada mais sendo que as características do abjeto resultantes do processo de abstração. 

     Veja o exemplo anterior agora com atributos declarados:

     class Caixa {

      volume;
      objetoGuardado;

     }

     Lembrando que cada atributo guarda um tipo específico de dado, nesse caso não sendo necessário declara-lo, já
     que o javascript possui uma tipagem de variáveis dinâmica;

    *Métodos
     
     Como dito anteriormente, uma classe define os atributos(propriedades) e métodos(funções) de um objeto, já
     tendo sido explicado o que são atributos e como funcionam, pode-se definir quais os comportamentos que a 
     classe irá conter, e o que ela fará com as informações contidas nos atributos, que é exatamente a definição
     de um método. Métodos, rotinas ou funções possuem diferentes formas de uso, podendo retornar algo, ou mesmo
     fazer incrmento de valor a um atributo, claramente não se limitando a tais funcionalidades.

     A palavra-chave reservada para método em javascript é *function*.

     Exemplo de uso de métodos no exemplo anterior:

     class Caixa {

      volume;
      objetoGuardado;

      //Incremento de Valor

      function defineVolume() {
         volume = "8 L";
      }

      //Método com estrutura condicional

      function modificaVolume() {

         if(volume < 10) {
            volume == 10;
         }
         else {
             console.log("O volume passou do valor esperado")
         }
      }

     //Método do tipo return

      function renornaVolume(volume) :number {
        return volume;
      }

     }

    *Métodos Especiais

    - Constructor

      A função dada ao Constructor consiste em criar e inicializar um objeto, tendo como base a clesse que o contém.
      Além disso, provê os valores iniciais usados pelo objeto. Veja abaixo a sintaxe de um Constructor:

      constructor([parâmetro?]) { corpo }

      Semelhante a um método e a uma classe, este recebe a palavra reservada Constructor, que é exclusivamente utilizada
      por ele. Do contrário, resulta em um erro de sintaxe.
      
      Exemplo de uso do constructor:

      class Caixa {

        volume;
        objetoGuardado;

        constructor() {
          this.objetoGuardado = 'Lápis';
        }
      }
      
      const poly1 = new Polygon();
      
      console.log(poly1.name);

      // expected output: "Lápis"

      Obs.: 
      
      A definição de um constructor é implícita, ou seja, ela ocorre independente da declaração do mesmo:

      function Caixa() {
   
           objetoGuardado;

           this.objetoGuardado = "Sapato";
       }


      A expressão "this" usada para atribuír valor ao atributo objetoGuardado(também podendo ser usado em sua declaração), usada no
      exemplo acima nada mais é que a chamada de um atributo que faz parte da classe Caixa, só sendo possível usá-la desta maneira.
      Além disso, ela define que o atributo em questão será public, sendo a palavra *var* a atribuidora do tipo private;
       

    - Destructor
      
      Como já é possível imaginar, o Destructor exerce a função posta a dada ao Constructor, a de eliminar objetos criados a partir
      da classe que o contém.

    Quanto a declaração dos atributos e métodos de uma classe, ou memso seu nome, se define, tais características são criadas
    de forma a observar o contexto de criação dos mesmo, tendo em vista limitações e posívies formas de dinamismo de informações
    
    pgn 61
