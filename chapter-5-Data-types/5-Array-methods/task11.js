// Получить средний возраст
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

const users4 = [
  {name: 'John', age: 30},
  {name: 'Bob', age: 12},
  {name: 'Benedict', age: 22},
  {name: 'Aurora', age: 1},
];

function getAverageAge(users) {
  return users.reduce((acc, user) => acc + user.age, 0) / users.length;
}

console.log(getAverageAge(users4));
