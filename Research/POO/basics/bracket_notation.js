
// BRACKET NOTATION 

// O Bracket Notation, ou notação por colchetes, é um método para acessar um membro
// do escopo de um objeto:

const person = {
    
    name: { first: 'Victor', last: 'Santos'},
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

 // Com o uso do Bracket Notation é possível acessar uma ou mais propriedades
 // ou métodos de um objetos. Para isso, usa-se o namespace(identificador
 // do objeto) segudo dos colchetes contendo a propriedade a ser acessada:

 console.log(person['age']);
 
 // Caso a propiedade possua mais de uma informação armazenada, como em um
 // outro objeto, é possível acessar essa informação da seguinte forma:

 console.log(person['name']['last']);

