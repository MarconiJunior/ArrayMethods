export function forEach<T>(array: T[], cb: (element: T) => void) {
  for (let element of array) {
    cb(element);
  }
}

let list = ["a", "b", "c"];

forEach(list, (element: string) => {
  console.log(element);
});
