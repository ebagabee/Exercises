function bubbleSort(arr) {
  const arrayLength = arr.length;

  for (let i = 0; i < arrayLength - 1; i++) {
    for (let j = 0; j < arrayLength - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Array original:", array);

bubbleSort(array);
console.log("Array ordenado:", array);
