// Фильтрация уникальных элементов массива
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr. Используйте Set для хранения уникальных значений.

const values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];

function unique(arr) {
  return Array.from(new Set(arr));
}

console.log(unique(values));
