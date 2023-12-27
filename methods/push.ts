export function push<T>(array: T[], ...newElements: T[]): number {
  for (const element of elements) {
    array[array.length] = element
  }
  return arr.length
}

let pushArray = [1, 4, 5];

console.log(push(pushArray, 1, 2, 3));
