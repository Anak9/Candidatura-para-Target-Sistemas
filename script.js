/**
 * ETAPA DE TESTE
 */

// 1 - Fibonacci

// checks if value belongs to Fibonacci sequence
const fibonacci = (value) => {
  let first = 0; // first term
  let second = 1; // second term
  let current = 0;

  for (let i = 0; i <= value; i++) {
    if (current == value) return true;

    current = first + second;
    first = second;
    second = current;
  }

  return false;
};

const value = 13;
let result = fibonacci(value) ? "pertence" : "nao pertence";

console.log(`O valor ${value} ${result} a sequencia.`);

// 2 - STRING

// verify how many times the character 'a' appears in string
const verifyString = (string) => {
  // for each 'a', the string splits in one new string
  const array = string.split(/a|á|A|ã|â|á/);
  const lenght = array.length;

  return lenght - 1;
};

const string = "Olá mundo!";
result = verifyString(string);

if (result) console.log(`A letra 'a' aparece um total de ${result} vezes.`);
else console.log(`A letra 'a' não aparece.`);
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);
