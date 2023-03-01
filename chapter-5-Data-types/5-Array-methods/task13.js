// Создайте объект с ключами из массива
// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.
// В этой задаче мы предполагаем, что id уникален. Не может быть двух элементов массива с одинаковым id.
// Используйте метод .reduce в решении.

const users5 = [
  {id: 'john', name: 'John Smith', age: 20},
  {id: 'ann', name: 'Ann Smith', age: 24},
  {id: 'pete', name: 'Pete Peterson', age: 31},
];

function groupById(arr) {
  return arr.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});
}

console.log(groupById(users5));
