//Classe que define tipo de objeto
class Prato {
     
    tipo;
    nome;
    preco;
    ingredientes;
    
}

//Variável que cria um objeto com base na classe
//que define seu tipo

const prato1 = new Prato();

//Atribuíndo valor ao objeto criado

prato1.tipo = "Hamburguer";
prato1.nome = "X-Bacon";
prato1.ingredientes = [

   {
     nome: "pão",
     preco: 1.10
   },
   {
     nome: "carne",
     preco: 3.50
   },
   {
     nome: "tomate",
     preco: 1.25
   },
   {
     nome: "cebola",
     preco: 0.99
   },
   {
     nome: "bacon",
     preco: 3.35
   },
   {
     nome: "molho",
     preco: 4.19
   }    

]

// for(let i = 0 ; i < prato1.ingredientes.length ; i++){
//   //let taxa = 2;
//   prato1.preco = prato1.ingredientes.preco;
// }

console.log(prato1);


const prato2 = new Prato();

prato2.tipo = "Massa";
prato2.nome = "Macarrão ao Molho Pesto";
prato2.preco = 15.99;
prato2.ingredientes = [

   {
     nome: "alho",
     preco: 3.50
   },
   {
    nome: "sal",
    preco: 2.25
  },
  {
    nome: "folhas de manjericão",
    preco: 5.00
  },
  {
    nome: "nozes",
    preco: 8.99
  },
  {
    nome:"queijo parmesão",
    preco: 6.50
  },
  {
    nome: "azeite",
    precro: 4.99
  },
  {
    nome: "pimenta-do-reino",
    preco:3.25
  }
  
]

console.log(prato2);