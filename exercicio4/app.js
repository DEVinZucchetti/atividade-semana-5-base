console.log("m1-s05-e4");

// function calculaTabuada(numero) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${numero} * ${i} = ${numero * i}`);
//   }
// }

const calculaTabuada = (numero) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} * ${i} = ${numero * i}`);
  }
};

const numero = prompt("Informe um número");

calculaTabuada(numero);

/*console:
2 * 0 = 0
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
2 * 5 = 10
2 * 6 = 12
2 * 7 = 14
2 * 8 = 16
2 * 9 = 18
2 * 10 = 20
*/
