export function shift<T>(array: T[]): T {
  const firstElement = array[0];

  for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array.length--;

  return firstElement;
}

let shiftArray = [1, 2, 3, 4];
let firstElement = shift(shiftArray);

console.log(firstElement, shiftArray);
