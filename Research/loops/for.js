// O for é um mecanismo de looping do javascript. Adaptativo, é bastante usual quando é 
// preciso definir o aparecimento de um bloco repetidas vezes. O mesmo funciona a sintaxe
// a seguir:

// for ([inicialização]; [condição]; [expressão final])
// declaração

for (var numb = 0; numb < 10 ; numb++ ) {
    console.log(numb)
 }
 

// Inicialização (Valor inicial)

// É onde se define as expressões ou variáveis que serão utilizadas no loop,
// sendo essas variáveis obrigatoriamente do tipo var

// var numb = 0;

// Condição (Enquanto...)

// Expressão que é avaliada antes de qualquer processo de execução no loop.
// Possuindo um valor padrão true, executa o bloco enquanto esse valor 
// permanecer verdadeiro, e o encerra quando for falso. A definição de 
// uma condição não é obrigatória para executar o loop, masi é necessária
// para definir  que esse loop é finito

// numb < 101

// Expressão final (faça...)

// Exepressão de validação que ocorre após cada ciclo de repetição do
// loop, normalmente definido alguma mudança, incrementando ou removendo 
// valor

// numb++

// Declaração (faça...)

// A declaração é semelhante a expressão final, sendo executada apenas se a condição 
// se mantiver verdadeira, em casos podendo substituír a própria expressão final

for (var numb = 0; numb < 10 ;) {
    numb++ 
   console.log(numb)
}


// Descomplicando

// for(Valor inicial; enquanto a condição for verdadeira ; execute tal ação) {
// Execute...
// }

// Listar uma array de dados

const usersList = ["Victor", "Milena", "Matheus", "João", "Hugo"];

for( names of usersList ){
    console.log(names)
};

//Break Point

const users1 = ["Victor", "Milena", "Matheus", "João", "Hugo"];

for( names of users1 ){
    console.log(names);
    if(names === "João") {
       break;
    }
    
};

// O principio é o mesmo dos exemplos anteriores, onde o loop será executado enquanto
// houverem dados para serem mostrados

const users = [
       user1 = {
        name: "Victor",
        age: 19,
       },
       user2 = {
        name: "Milena",
        age: 23,
       },
       user3 = {
        name: "Matheus",
        age: 30,
       },
       user4 = {
        name: "João",
        age: 22,
       },
       user5 = {
        name: "Hugo",
        age: 39
    }
];

for ( base of users ) {
    console.log(base)
}

let teclas = ["Tab", "Shift", "Ctrl"]

for ( var position = 0 ; position < teclas.length ; position++ ) {
    console.log(`A posição ${position} guarda a tecla ${teclas[position]}`);
}