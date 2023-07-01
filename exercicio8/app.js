console.log("m1-s05-e8");

const campoInicial = document.getElementById("valor-inicial");
const campoRaiz = document.getElementById("valor-raiz");
const campoQtdTermos = document.getElementById("valor-qtd-termos");
const botaoCalcularPa = document.getElementById("botao-calcular-pa");
const botaoCalcularPg = document.getElementById("botao-calcular-pg");

//const inicial = 1; //prompt("Valor inicial:");
//const raiz = 3; //prompt("Raiz da PA:");

function calculaPA(inicial, raiz, qtdTermos) {
  // inicializa o array de pa com o valor inicial
  const pa = [inicial];

  // faz 10 voltas calculando os valores seguintes
  for (let i = 1; i < qtdTermos; i++) {
    const valorAnterior = pa[i - 1];
    pa.push(valorAnterior + raiz);
  }

  console.log(pa);
}

//calculaPA(inicial, raiz);

/*
Valor inicial = 1;
Raiz = 3;
P.A. = 1, 4, 7, 10, 13, 16, 19, 22, 25, 28.
*/

function calculaPG(inicial, raiz, qtdTermos) {
  // inicializa o array de pa com o valor inicial
  const pa = [inicial];

  // faz 10 voltas calculando os valores seguintes
  for (let i = 1; i < qtdTermos; i++) {
    const valorAnterior = pa[i - 1];
    pa.push(valorAnterior * raiz);
  }

  console.log(pa);
}

//calculaPG(inicial, raiz);

botaoCalcularPa.addEventListener("click", () => {
  // const inicial = Number(campoInicial.value);
  // const raiz = Number(campoRaiz.value);
  // const inicial = parseInt(campoInicial.value);
  // const raiz = parseInt(campoRaiz.value);
  // const inicial = parseFloat(campoInicial.value);
  // const raiz = parseFloat(campoRaiz.value);

  // equivalente
  const inicial = +campoInicial.value;
  const raiz = +campoRaiz.value;
  const qtdTermos = +campoQtdTermos.value;

  calculaPA(inicial, raiz, qtdTermos);
});

botaoCalcularPg.addEventListener("click", () => {
  const inicial = +campoInicial.value;
  const raiz = +campoRaiz.value;
  const qtdTermos = +campoQtdTermos.value;

  calculaPG(inicial, raiz, qtdTermos);
});
