
// * CLASSES

// Uma classe define um modelo no qual se pode criar objetos. Para declarar uma 
// classe, usa-se a palavra chave class + um identificador

class Person {

  // Um constructor é um Método que inicia a classe e define seus atributos. 

  constructor() {    
  
    // Atributos de um objeto que podem ou não conter valores ao serem 
    // declarados:

    this.name;  
    this.age;
    this.profession = 'Programmer';
    this.skills = [];

  }  

  // Um contructor ainda pode receber, via parâmetro, os valores atribuídos ao
  // novo objeto criado:

//   constructor(name, age, profession, skills) {

//     this.name = name;  
//     this.age = age;
//     this.profession = profession;
//     this.skills = skills;
//   }

  // Obs: Um constructor só pode ser declarado uma vez.
  
  // Outros métodos, além do constructor, podem ser membros de uma classe:

  someMethod() {

  }

}


// Para consumir uma classe, cria-se uma instância da mesma, que será atribuída
// à uma unidade de armazenamento usando a palavra-chave new:

var person1 = new Person(); 

// Vários objetos podem ser cirados a partir de uma classe.

var person2 = new Person(); 
var person3 = new Person(); 

// Em seguida é possível definir valores para o objeto criado:
 
person1.name = 'Victor';
person1.age = 20;
person1.profession = 'Programmer';
person1.skills = ['Web developer', 'Mobile developer'];
