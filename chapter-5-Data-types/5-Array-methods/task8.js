// Трансформировать в объекты
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

const users2 = [
  {name: 'John', surname: 'Doe', id: 1},
  {name: 'Jane', surname: 'Roe', id: 2},
  {name: 'Aurora', surname: 'Poe', id: 3},
];

const usersFullName = users2.map((user) => ({
  id: user.id,
  fullName: user.name + ' ' + user.surname,
}));

console.log(usersFullName);
