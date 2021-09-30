
function sendEmail(destinatario, corpo, callBack) {

  setTimeout(() => {

    console.log(`

      Para: ${destinatario}
      ________________________________________

      ${corpo}
      ________________________________________

      De: Victor

    `);
    callBack(destinatario);
  }, 4000);

}

console.log('\n Enviando e-mail...')

sendEmail('Maria', 'Olá Maria...', (destinatario) => {
  
  console.log(`E-mail enviado para ${destinatario}`);

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
