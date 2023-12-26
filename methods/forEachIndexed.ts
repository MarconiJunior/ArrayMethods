export function forEachIndexed<T>(
  array: T[],
  cb: (index: number, element: T) => void
) {
  for (let i = 0; i < array.length; i++) {
    cb(i, array[i]);
  }
}

let list = ["a", "b", "c"];

forEachIndexed(list, (index: number, element: string) => {
  console.log(index, element);
});
