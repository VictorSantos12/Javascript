


class Triangulo {
  
 constructor(base, altura) { 

    this.base = base;
    this.altura = altura;

 }
 
 // * Getter *

 get area() {
   return this.calculaArea();
 }

 // * Métodos Protótipos *

 calculaArea() {
   return this.base * this.altura;
 }

}

var triangulo = new Triangulo(5, 4);

// console.log(triangulo.area);



class Location {


 // * Métodos Estáticos *

 // Declarar um método como static define que não é necessário
 // instanciar a classe que o contém, ou criar um objeto, para
 // usa-lo, mas se a mesma for instanciada, não sera possível
 // acessá-lo:

 static find(latitude, longitude) {
    
    if(latitude > 0 & longitude > 0) {
      console.log(`Você está no hemisfério norte do oriente`);
    } else if (latitude > 0 & longitude < 0) {
      console.log(`Você está no hemisfério norte do ocidente`);
    } else if (latitude < 0 & longitude > 0) {
      console.log(`Você está no hemisfério sul do oriente`);
    } else if (latitude < 0 & longitude < 0) {
      console.log(`Você está no hemisfério sul do ocidente`);
    } else {
      console.log(`Não foi possível localizar sua pisição`);
    }

 }

}

var find = new Location('Victor');
// find.find(1, 1); // find is not a function

Location.find(1, -28);
