console.log("m1-s05-e7");

const pessoa = {
  nome: "Ada",
  idade: 36,
  profissao: "matemática",
};

// function montaMensagem(pessoa) {
//   const { nome, idade, profissao } = pessoa;
//   return `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;
// }

// function montaMensagem({ nome, idade, profissao }) {
//   return `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;
// }

const montaMensagem = ({ nome, idade, profissao }) =>
  `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;

const mensagem = montaMensagem(pessoa);
console.log(mensagem);

/*
Mostra no console:
"Esta é Ada, tem 36 anos e é matemática."
*/
