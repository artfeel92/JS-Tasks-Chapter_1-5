// Перебираемые ключи
// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
// Но это не выходит:

// let map = new Map();
// map.set('name', 'John');
// let keys = map.keys();
// keys.push('more'); // Error: keys.push is not a function

// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?

// Ответ: ошибка возникает, потому что метод Map.keys() возвращает итератор, а не массив ключей. Поэтому при попытке вызвать метод push() у переменной keys, которая ссылается на итератор, происходит ошибка.
// В качестве альтернативы мы можем использовать метод Array.from():

const map2 = new Map();
map2.set('name', 'John');

const keys2 = Array.from(map2.keys());
keys2.push('more');

console.log(keys2);
