console.log("m1-s05-e5");

//function somaTudo(...numeros) {
const somaTudo = (...numeros) => {
  // let total = 0;
  // numeros.forEach((num) => {
  //   total += num;
  // });

  // solução com reduce
  const total = numeros.reduce((acc, num) => acc + num, 0);

  return total;
};

const resultado = somaTudo(1, 2, 3, 4);

console.log(resultado);
// resultado deve ser 10
