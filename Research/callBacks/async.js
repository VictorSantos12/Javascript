
function registerUser() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      var error = true;
      
      if(!error) {

        resolve({
          acction: 'Register user',
          status: 'Success',
          duration: 4
        });

      } else {

        reject({
          acction: 'Register user',
          status: 'Failure',
          duration: 4
        });
        
      }

    }, 4000);

  });

}

console.log('\n Processando...\n');

registerUser().then((message) => {

  console.log(`

    Ação: ${message.acction}
    _______________________________

    Status: ${message.status}
    _______________________________

    Duração: ${message.duration}
  
  `);

}).catch((message) => {

    console.log(`
  
    Ação: ${message.acction}
    _______________________________
  
    Status: ${message.status}
    _______________________________
  
    Duração: ${message.duration}
  
  `);

});

// function sendEmail(destinatario, corpo, callBack) {

//   setTimeout(() => {

//     console.log(`

//       Para: ${destinatario}
//       ________________________________________

//       ${corpo}
//       ________________________________________

//       De: Victor

//     `);
//     callBack(destinatario);
//   }, 4000);

// }

// console.log('\n Enviando e-mail...')

// sendEmail('Maria', 'Olá Maria...', (destinatario) => {
  
//   console.log(`E-mail enviado para ${destinatario}`);

// });

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
