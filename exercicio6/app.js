console.log("m1-s05-e6");

// function verificaPalindromo(palavra) {
const verificaPalindromo = (palavra) => {
  if (!palavra?.length) {
    return false;
  }

  // const meio = palavra.length / 2;
  // const final = palavra.length - 1;

  // for (let i = 0; i < meio; i++) {
  //   if (palavra[i] !== palavra[final - i]) {
  //     return false;
  //   }
  // }
  // return true;

  // split("") separa letras em um array de letras
  // reverse() inverte a ordem das letras do array
  // join("") une as letras novamente em uma string
  const reversedString = palavra.split("").reverse().join("");
  // compara a palavra original com a invertida
  return palavra === reversedString;
};

const teste1 = verificaPalindromo("ana");
console.log(teste1);
// true

const teste2 = verificaPalindromo("julia");
console.log(teste2);
// false
