console.log("m1-s05-e3");

// função comum
// function concatVetores(arrayA, arrayB) {
//   return [...arrayA, ...arrayB];
// }

// arrow function
// const concatVetores = (arrayA, arrayB) => {
//   return [...arrayA, ...arrayB];
// };

// equivalente
const concatVetores = (arrayA, arrayB) => [...arrayA, ...arrayB];

const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];

const novoArray = concatVetores(arrayA, arrayB);

console.log(novoArray);
// novo array deve ser [1, 2, 3, 4, 5, 6]

// function mesclaObjetos(objUm, objDois) {
//   return { ...objUm, ...objDois };
// }

// const mesclaObjetos = (objUm, objDois) => {
//   return { ...objUm, ...objDois };
// };

const mesclaObjetos = (objUm, objDois) => ({ ...objUm, ...objDois });

const objUm = { a: 1, b: 2 };
const objDois = { c: 3, d: 4 };

const novoObjeto = mesclaObjetos(objUm, objDois);

console.log(novoObjeto);
// { a: 1, b: 2, c: 3, d: 4 }
