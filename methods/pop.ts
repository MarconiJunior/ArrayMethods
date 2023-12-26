export function pop<T>(array: T[]): T {
  let lastIndex = array.length - 1;
  const lastElement = array[lastIndex];

  array.length = lastIndex;

  return lastElement;
}

let popArray = [1, 2, 3];
let lastElement = pop(popArray);

console.log(lastElement, popArray);
