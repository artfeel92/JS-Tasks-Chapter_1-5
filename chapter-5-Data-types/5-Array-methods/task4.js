// Сортировать в порядке по убыванию

const arr3 = [5, 2, 1, -10, 8];

function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(sortDescending(arr3));
