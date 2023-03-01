// Преобразуйте объект в JSON, а затем обратно в обычный объект
// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

const user = {
  name: 'Василий Иванович',
  age: 35,
};

const user2 = JSON.parse(JSON.stringify(user));
