
class Categoria {
  
  constructor(categoria, amount) {
    this.categoria = categoria;
    this.amount = amount;
  }

}

// * Extends

// Apalavra-chave extends define que na qual
// ela é declarada irá herdar seu atributos:

class Produto extends Categoria {
   
  status() {
    if(this.amount == 0) {
      console.log(`\n Categoria: ${this.categoria}\n`);
      console.log(` Status: produto em falta.`)
    } 
    else {
      console.log(`\n Categoria: ${this.categoria}\n`);
      if(this.amount > 1) {
        console.log(` Status: ${this.amount} produtos em estoque.`);
      } else {
        console.log(` Status: ${this.amount} produto em estoque.`)  
      }
    }
  }

}

let produto1 = new Produto('Bebida', 11);
produto1.status();

