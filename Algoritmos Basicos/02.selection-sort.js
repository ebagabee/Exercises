function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }

    [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
  }

  return arr;
}

let array = [7, 1, 9, 3, 5];

console.log("Array original:", array);
selectionSort(array);
console.log("Array ordenado:", array);
