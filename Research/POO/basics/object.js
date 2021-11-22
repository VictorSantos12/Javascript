
// * DEFINIÇÃO BÁSICA DE UM OBJETO

// Um objeto é uma coleção de informações ou funcionalidades 
// relacionadas, sendo estas respectivamente chamadas de propriedades 
// e métodos.

// A forma básica de inicializar um objeto no JavaScript é através do sinal {},
// que defineo escopo de um objeto vazio:

   const person = {};

// * PROPRIEDADES E MÉTODOS

// Para dar características a um objetos, definimos em seu escopo suas propriedades
// e métodos:

    const person = {
    
       name: ['Victor', 'Santos'],
       age: 20,
       gender: 'male',
       interests: ['languages', 'oil painting', 'programming'],
       bio: function() {
         console.log(
           `Hi, my name is ${this.name[0]}, I'm ${this.age} and a like ${this.interests[0]}, ${this.interests[1]} e ${this.interests[2]}!`)
       },
       greeting: function () {

       }

    }; 


    person.bio();