/**************** EXERCÍCIO 1 ****************/

// a.
const printNumbersAscending = (n: number): void => {
  if (n >= 0) {
    printNumbersAscending(n - 1);
    console.log(n);
  }
};

// b.
const printNumbersDescending = (n: number): void => {
  if (n >= 0) {
    console.log(n);
    printNumbersDescending(n - 1);
  }
};

// console.log("a.")
// printNumbersAscending(5);

// console.log("b.")
// printNumbersDescending(5);


/**************** EXERCÍCIO 2 ****************/
const calculateSumToRecursive = (n: number, acc: number = 0): number => {
  if (n === 0) return acc;
  
  return calculateSumToRecursive(n - 1, acc + n);
};

// console.log(calculateSumToRecursive(3));
// console.log(calculateSumToRecursive(10));
// console.log(calculateSumToRecursive(100));


/**************** EXERCÍCIO 3 ****************/

const calculateSumToIteractive = (n: number): number => {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += 1;    
  }

  return sum;
};

// console.log(calculateSumToIteractive(3));
// console.log(calculateSumToIteractive(10));
// console.log(calculateSumToIteractive(100));


/**************** EXERCÍCIO 4 ****************/

const printArray = (arr: number[], i: number = arr.length - 1): void => {
  if (i >= 0) {
    printArray(arr, i - 1);

    console.log(`Elemento ${i}`, arr[i]);
  }
};

// const array = [1, 2, 3, 4];
// printArray(array);


/**************** DESAFIOS ****************/

/**************** EXERCÍCIOS 5 ****************/

const getNumDigits = (num: number, acc: number = 1): number => {
  if (num < 10) {
    return acc;
  }
  return getNumDigits(num / 10, acc + 1);
};

// console.log(getNumDigits(0));
// console.log(getNumDigits(3));
// console.log(getNumDigits(10));
// console.log(getNumDigits(2034));
// console.log(getNumDigits(321654987));


/**************** EXERCÍCIOS 6 ****************/

const getArrayMaximum = (
  arr: number[],
  i: number = 0,
  largest: number = 0
): number => {
  let largestAux = largest;

  if (arr[i] > largest) {
    largestAux = arr[i];
  }

  if (i === arr.length - 1) {
    return largestAux;
  }

  return getArrayMaximum(arr, i + 1, largestAux);
};

// console.log(getArrayMaximum([2, 10, 8, 5, 4]));


/**************** EXERCÍCIOS 7 ****************/

const findFirstCapitalLetter = (
  s: string,
  char: string = ""
): string => {
  if (char && char.toUpperCase() === char) {
    return char;
  }

  return findFirstCapitalLetter(s.substring(1), s[0]);
};

// console.log(findFirstCapitalLetter("blablablA"));


/**************** EXERCÍCIOS 8 ****************/

// O algoritmo vai ser chamado uma quantidade de vezes que equivale ao valor do argumento __b__,
// Portanto, a complexidade é linear, ou seja: _O(b)_


/**************** EXERCÍCIOS 9 ****************/

// Cada chamada do código _fib_ chama recursivamente  ela mesma duas vezes.
// Então, a complexidade será exponencial em que cada execução abre dois ramos (base 2)
// e a profundidade, que é a potência da base, terá o valor do número (n) do argumento de entrada.
// Portanto, a complexidade desse código será: _O(2^n)_