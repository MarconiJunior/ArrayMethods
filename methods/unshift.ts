export function unShift<T>(array: T[], newElement: T): number {
  for (let i = array.length - 1; i >= 0; i--) {
    array[i + 1] = array[i];
  }
  array[0] = newElement;
  array.length++;

  return array.length;
}

const unShiftArray = [1, 2, 3, 4];
const unShiftElement = unShift(unShiftArray, 0);
console.log(unShiftElement, unShiftArray);
