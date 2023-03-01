'use strict';
// Использование "this" в литерале объекта
// Здесь функция makeUser возвращает объект.
// Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: 'John',
    ref: this, // this ссылается на window, а не на объект, который возвращает эта функция
  };
}

let user = makeUser();

console.log(user.ref.name); // Cannot read properties of undefined в строгом режиме, потому что ref содержит ссылку на глобальный объект, а у него нет свойтсва name
