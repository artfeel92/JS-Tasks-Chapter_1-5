// Фильтрация по диапазону
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.

const arr1 = [5, 3, 8, 1, 0, 2, 1, 12];

function filterRange(arr, a, b) {
  return arr.filter((element) => element >= a && element <= b);
}

console.log(filterRange(arr1, 1, 5));
console.log(arr1);
