// Две функции - один объект
// Возможно ли создать функции A и B, чтобы new A() == new B()?

// function A() {}
// function B() {}

// let a = new A();
// let b = new B();

// console.log(a == b); // false
// Если да – приведите пример вашего кода.

// Да, возможно. Для того, чтобы создать две функции A и B, так, чтобы new A() == new B() требуется вернуть один и тот же объект из обеих функций при вызове с оператором new. Объект можно создать заранее.

const object = {};

function A() {
  return object;
}
function B() {
  return object;
}

let a = new A();
let b = new B();

console.log(a == b); // true
