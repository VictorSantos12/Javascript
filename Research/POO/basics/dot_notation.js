
// * DOT NOTATION

// O Dot Notation, ou notação por ponto, é um método para acessar um membro
// do escopo de um objeto:

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

 // Com o uso do Dot Notation é possível acessar uma ou mais propriedades
 // ou métodos de um objetos. Para isso, usa-se o namespace(identificador
 // do objeto) seguido de um ponto e do membro a ser acessado:
 
 person.bio();
    
 console.log(`${person.name[0]} ${person.name[1]}`);
 
 
 // * Sub-namespaces

 // Caso uma proriedade do objeto possua mais de uma informação, podendo
 // ser um array ou mesmo outro objeto, é possível acessar essas informações
 // de formas distintas:

 // Caso seja um array, basta declarar qual ídice deve ser acessado:

 person.name[0];

 // Caso seja um objeto, podesse acessar os sub-namespaces do mesmo através
 // do Dot Notation:

 const person1 = {
    
    name: {
      first: 'Victor', 
      last: 'Santos'
    }
    
    // ...

 }; 

 console.log(person1.name.first);