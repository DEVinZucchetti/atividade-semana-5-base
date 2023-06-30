console.log("m1-s05-e2");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

// function procuraMinMax(numeros) {
const procuraMinMax = (numeros) => {
  if (!numeros?.length) {
    console.log("Não é possível encontrar");
    return; // finaliza a função
  }

  // possível solução
  const min = Math.min(...numeros);
  const max = Math.max(...numeros);

  // solução equivalente
  // let min = numeros[0];
  // let max = numeros[0];

  // for (let i = 1; i < numeros.lenght; i++) {
  //   const num = numeros[i];
  //   if (num < min) {
  //     min = num;
  //   } else if (num > max) {
  //     max = num;
  //   }
  // }

  console.log(`"Min: ${min} / Max: ${max}"`);
};

const numeros = [20, 10, 30];

procuraMinMax(numeros);
//console "Min: 10 / Max: 30"

procuraMinMax([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]);
procuraMinMax([]);
procuraMinMax([1]);
procuraMinMax([1, -1]);
procuraMinMax(null);
procuraMinMax([-2, -2, -2, -2]);
procuraMinMax([20, 10, 30]);
