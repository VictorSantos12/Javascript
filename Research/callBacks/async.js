
function sendEmail(destinatario, corpo, callBack) {

  setTimeout(() => {

    console.log(`

      Para: ${destinatario}
      ________________________________________

      ${corpo}
      ________________________________________

      De: Victor

    `);
    callBack();
  }, 4000);

}

console.log('\n Enviando e-mail...')

sendEmail('Maria', 'Olá Maria...', () => {
  
  console.log(' E-mail enviado');

});

// setTimeout(() => {
  
//   console.log('\n 1º rotina executada...\n');
  
// }, 1000);

// setTimeout(() => {
  
//   console.log(' 2º rotina executada...\n');
  
// }, 3000);

// setTimeout(() => {
  
//   console.log(' 3º rotina executada...\n');
  
// }, 1000);

// console.log(' email enviado! \n')
