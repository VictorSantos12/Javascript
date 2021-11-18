
// * Concat( )

// O método concat() retorna um novo array contendo todos os arrays ou valores passados como parâmetro

// Sintaxe

// arr.concat(valor1, valor2, ..., valorN)

let array1 = [ 1, 2, 3, 4, 5 ];
let array2 = [ 6, 7, 8, 9, 10 ];

array3 = array1.concat(array2);

console.log('\n' + 'Concat()' + '\n')

console.log(array3);



// * Entries( )

// O método entries( ) retorna um novo objeto Array Iterator que contém os pares chave/valor para cada
// índice no array, definindo um valor de posição para cada 

//Sintaxe

// arr.entries()

let array = ['Variáveis', 'Vetores', 'Loops', 'Objetos'];
let result = array.entries();

console.log('\n' + 'Entrie()' + '\n')
console.log(result.next().value);
console.log(result.next().value); 
console.log(result.next().value);
console.log(result.next().value); 



// * Entries() + Loop

let topcs = ['Variáveis', 'Vetores', 'Loops', 'Objetos'];
let topcsResult = topcs.entries();

console.log('\n' + 'Entries() + Loop' + '\n')

for ( item of topcsResult ) {
  console.log(item);
}



// * Every()

// O método every( ) age como uma forma de validação lógica. Ele é submetido a um array para definir se cada
// indice do mesmo corresponde a determinado padrão pré definido

//Sintexe

//arr.every(callback[, thisArg])

function isBigEnough(element, index, array) {
    return element >= 10;
  }

let sequenceOne =  [12, 5, 8, 130, 44];
let sequenceTwo =   [12, 54, 18, 130, 44];

let resultOne = sequenceOne.every(isBigEnough);   
let resultTwo = sequenceTwo.every(isBigEnough); 

console.log('\n' + 'Every()' + '\n')

console.log(`sequence one is big enough ? ${resultOne}`);
console.log(`sequence two is big enough ? ${resultTwo}`);



// * fill()

// O método fill() preenche todos os valores do array a partir do índice inicial a um índice final com
// um valor estático.

//Sintaxe

// arr.fill(valor[, ínicio = 0[, fim = this.length]])

let fill = [1, 2, 3];    

console.log('\n' + `fill()` + `\n`);
console.log(fill.fill(4));



// * filter()

// O método filter() cria um novo array com todos os elementos que passaram no teste
// implementado pela função fornecida

//Sintaxe

// var newArray = arr.filter(callback[, thisArg])

function isBigEnough(element, index, array) {
    return element >= 10;
}

let values = [20, 346, 6, 9, 38, 11, 9.99];
let valuesResult = values.filter(isBigEnough);

console.log(`\n` + `filter()` + `\n`)
console.log(valuesResult);



// * find()

// O método find() retorna o valor do primeiro elemento do array que satisfizer a função de
// teste provida. Caso contrario, undefined é retornado.

//Sintaxe

// arr.find(callback(element[, index[, array]])[, thisArg])

let data = [18, 100, 0.05]

let dataResult = data.find(element => element < 1);

console.log('\n' + `find()` + `\n`)
console.log(dataResult);



// * flat()

// O método flat() cria um novo array com todos elementos sub-arrays concatenados nele de forma recursiva até
// a profundidade especificada.

// Sintaxe

// var novoArray = arr.flat(depth)

// Parâmetros

// depth Optional

// O nível de profundidade especifíca o quanto um array aninhando deve ser achatado. O Default é 1.

var flat = [1, 2, [3, 4]];

console.log('\n' + `flat()` + `\n`);
console.log(flat.flat());

var flatDepth = [1, 2, [3, 4, [5, 6]]];

console.log('\n' + `find() + depth` + `\n`);
console.log(flatDepth.flat(2));



// * forEach()

// O método forEach() executa uma dada função em cada elemento de um arra

// Sintaxe

// arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);

console.log('\n' + `forEach()` + `\n`);

function definePosition(element, index, array) {
    console.log(`[${index}] = ${element}`);
}

['SmartPhone', 'óculos', 'prato'].forEach(definePosition);



// * includes()

// O método includes() determina se um array contém um determinado elemento, retornando true ou false
// apropriadamente.

// Sintaxe

// array.includes(searchElement[, fromIndex])

console.log('\n' + `includes()` + `\n`);

console.log([1, 2, 3].includes(2));     
console.log([1, 2, 3].includes(4));     
console.log([1, 2, 3].includes(3, 3));  
console.log([1, 2, 3].includes(3, -1)); 
console.log([1, 2, NaN].includes(NaN)); 



// * indexOf() 

// O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1
// caso o mesmo não esteja presente.

//Sintaxe

// array.indexOf(elementoDePesquisa, [pontoInicial = 0])

console.log('\n' + `indexOf()` + `\n`);

var indexOf = [2, 5, 9];
console.log(indexOf.indexOf(2));     
console.log(indexOf.indexOf(7));     
console.log(indexOf.indexOf(9, 2));  
console.log(indexOf.indexOf(2, -1)); 
console.log(indexOf.indexOf(2, -3)); 



// * isArray()

//O método Array.isArray() retorna true se um objeto é uma array, e false se não é.

//Sintaxe

// Array.isArray(obj)

console.log('\n' + `isArray()` + `\n`);

console.log(Array.isArray([]));
console.log(Array.isArray(new Array()));
console.log(Array.isArray('Array'));
console.log(Array.isArray(true));



// * join()

//O método join() junta todos os elementos de um array (ou um array-like object) em uma string e
// retorna esta string.

//Sintaxe

// arr.join([separador = ','])

console.log('\n' + `join()` + `\n`);

const join = ['Fire', 'Air', 'Water'];

console.log(join.join());
console.log(join.join(''));
console.log(join.join('-'));



// * keys()

// O método keys() retorna um novo Array Iterator que contém as chaves para cada index do array.

//Sintaxe

// arr.keys()

console.log('\n' + `keys()` + `\n`);

let keys = ["a", "b", "c"];
let keysResult = keys.keys();

for (item of keysResult) {
 console.log(item); 
}



// * map()

//O método map() invoca a função callback passada por argumento para cada elemento do
// Array e devolve um novo Array como resultado.

//Sintaxe

//arr.map(callback[, thisArg])

console.log('\n' + `map()` + `\n`);

let map = [1, 2, 3, 4, 5];
let doublesmap = map.map(function(number) {
  return number * 2;
});

console.log(doublesmap)



// * pop()

// O método pop() remove o último elemento de um array e retorna aquele elemento.

//Sintaxe

// arr.pop()

console.log('\n' + `Pop()` + `\n`);

let pop = ['João', 'Victor', 'dos', 'Santos'];
pop.pop();

console.log(pop);



// * Push( )

//O método push() adiciona um ou mais elementos ao final de um array e retorna o novo
//comprimento desse array.

//Sintaxe

// arr.push(elemento1, ..., elementoN)

console.log('\n' + `Push()` + `\n`);

let push = ["Harry Potter", "O Hobbit", "Sapiens"];

push.push("A Guerra dos Tronos");

console.log(push);



// * reduce()

//O método reduce() executa uma função reducer (fornecida por você) para cada
//elemento do array, resultando num único valor de retorno.

//Sintaxe

// array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]))

// callback

// Função que é executada em cada valor no array (exceto no primeiro, se nenhum valorInicial for passado); recebe quatro argumentos:

// acumulador

// Opcional. O índice do elemento atual que está sendo processado no array. Começa a partir do index 0 se um valorInicial for fornecido.
// Do contrário, começa do index 1.

// valorInicial

// Opcional. Valor a ser usado como o primeiro argumento da primeira chamada da função callback. Se nenhum valorInicial é fornecido, o
// primeiro elemento do array será usado como o valor inicial do acumulador e o valorAtual não será lido. Chamar reduce() em uma array
// vazia sem valor inicial retornará um erro


const reduce = [
  { nome: "Luan", idade: 25, sexo: "Masculino"},
  { nome: "Victor", idade: 19, sexo: "Masculino"},
  { nome: "Lucas", idade: 21, sexo: "Masculino"},
  { nome: "Ana", idade: 22, sexo: "Feminino"},
  { nome: "Clara", idade: 16, sexo: "Feminino"},
  { nome: "Luíza", idade: 30, sexo: "Feminino"},
];

console.log('\n' + `Reduce()` + `\n`);

console.log( reduce.reduce((a, b) => ({...a, [b.sexo] : [...a[b.sexo] || [], b]}), {}) );



// * reverse()

//O método reverse() inverte os itens de um array. O primeiro elemento do array se torna o último e
//o último torna-se o primeiro.

//Sintaxe

// arr.reverse()

let cidades = [ 'Recife', 'João Pessoa', 'Natal', 'Salvador' ];
cidades.reverse();

console.log('\n' + `Reverse()` + `\n`);

console.log(cidades); 



// * shift()

//O método shift()remove o primeiro elemento de um array e retorna esse elemento. Este método muda o
//tamanho do array. 

//Sintaxe

// arr.shift()

const shift1 = [1, 2, 3];

const firstElement = shift1.shift();

console.log('\n' + `Shift()` + `\n`);

console.log(shift1);

console.log(firstElement);



// * slice()

// O método slice define um novo array a partir de um outro

//Sintaxe

// arr.slice([início[,fim]])

let slice = ['Lord of the Rings', 'O Hobbit', '1255', 'Batata'];
let novoslice = array.slice(1,3);

console.log('\n' + `Slice()` + `\n`);

console.log(novoslice);
    


// * some()

// O método some() testa se ao menos um dos elementos no array passa no teste implementado
// pela função atribuída e retorna um valor true ou false.

//Sintaxe

// arr.some(callback[, thisArg])

function isBiggerThan10(element, index, array) {
    return element > 10;
  }

console.log('\n' + `Some()` + `\n`);

console.log([2, 5, 8, 1, 4].some(isBiggerThan10));  
console.log([12, 5, 8, 1, 4].some(isBiggerThan10)); 

//Testando valores de elementos de um array usando arrow functions

console.log('\n' + `Some - Arrow Function` + `\n`);

console.log([2, 5, 8, 1, 4].some(elem => elem > 10));  
console.log([12, 5, 8, 1, 4].some(elem => elem > 10)); 



// * sort()

// O sort( ), que literalmente significa organizar, é um método javascript
// que distribui os valores de uma array de forma a torna-los numericamente
// ou alfabeticamente ordenados

//Sintaxe

// arr.sort([funcaoDeComparacao])

let numb = [1, 456, 30, 17, 0.5];

console.log('\n' + `Sort()` + `\n`);

console.log(sort.sort());



// * splice()

//Com o método splice é possível definir dois elementos e inserir um valor entre eles,
// substituíndo os que ocupavam esta(s) posições

//Sintaxe

// array.splice(indice[, deleteCount[, elemento1[, ...[, elementoN]]])
// array.splice(indice) 

let splice = [ 'Recife', 'João Pessoa', 'Natal', 'Salvador' ];
splice.splice(1,2, 'Fortaleza');

console.log('\n' + `Splice()` + `\n`);

console.log(splice);



// * unshift()

// O método unshift() adiciona um ou mais elementos no início de um array e retorna o número de
// elementos (propriedade length) atualizado.

//Sintaxe

// arr.unshift([element1[, ...[, elementN]]])

let unshift = ["João Pessoa", "Natal", "Salvador"];
unshift.unshift("Recife");

console.log('\n' + `Unshift()` + `\n`);

console.log(unshift);



// * values()

// O método values() retorna um novo objeto de  Array Iterator que contém os valores para cada
// índice no array.

//Sintaxe

// arr.values()

var valuesLetters = ['w', 'y', 'k', 'o', 'p'];
var eArr = valuesLetters.values();

console.log('\n' + `Values()` + `\n`);

for (let letter of eArr) {
  console.log(letter);
}