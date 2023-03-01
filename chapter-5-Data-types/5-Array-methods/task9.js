// Отсортировать пользователей по возрасту
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

const users3 = [
  {name: 'John', age: 30},
  {name: 'Bob', age: 12},
  {name: 'Aurora', age: 1},
];

// Сортировка от меньшего к большему
function sortByAge(users) {
  return users.sort((a, b) => a.age - b.age);
}

console.log(sortByAge(users3));
