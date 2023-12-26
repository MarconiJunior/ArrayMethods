export function push<T>(array: T[], ...newElements: T[]): T[] {
  return [...array, ...newElements];
}

let pushArray = [1, 4, 5];

console.log(push(pushArray, 1, 2, 3));
