const readline = require('readline');
const Operaciones = require('./operaciones');

const op = new Operaciones();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const menu = `
  ¿Qué operación desea realizar?
  1. Sumar
  2. Restar
  3. Multiplicar
  4. Dividir
  Selecciona una opción: `;

  rl.question(menu, (option) => {
    rl.question('Ingresa el primer número: ', (num1) => {
      rl.question('Ingresa el segundo número: ', (num2) => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        let result;
        switch (option) {
            case '1':
              result = op.sumar(a, b);
              break;
            case '2':
              result = op.restar(a, b);
              break;
            case '3':
              result = op.multiplicar(a, b);
              break;
            case '4':
              try {
                result = op.div(a, b);
              } catch (error) {
                console.log(error.message);
                rl.close();
                return;
              }
              break;
            default:
              console.log('Opción no válida');
              rl.close();
              return;
          }
    
          console.log(`El resultado es: ${result}`);
          rl.close();
        });
      });
    });

  