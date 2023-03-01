// Трансформировать в массив имён
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

const users = [
  {name: 'John', age: 30},
  {name: 'Bob', age: 12},
  {name: 'Aurora', age: 1},
];

const names = users.map((user) => user.name);

console.log(names);
