// Скопировать и отсортировать массив
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

const arr4 = ['HTML', 'JavaScript', 'CSS'];

function copySorted(arr) {
  let copy = [...arr];
  return copy.sort();
}
console.log(copySorted(arr4));
console.log(arr4);
