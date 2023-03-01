// Название JavaScript.
// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“ Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

const officialNameJS = prompt('Какое «официальное» название JavaScript?', '');
if (officialNameJS === '«ECMAScript»') {
  alert('Верно!');
} else {
  alert('Не знаете? ECMAScript!');
}
