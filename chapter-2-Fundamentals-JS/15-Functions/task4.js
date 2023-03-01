// Функция pow(x,n)
// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

const x = +prompt('Enter number:', '');
const n = +prompt('Enter number`s power:', '');

function pow(x, n) {
  const result = x ** n;
  return result;
}

function alertPow(x, n) {
  if (n < 1 || n % 1 !== 0) {
    alert('Number must be natural and greater than 1');
  } else {
    alert(pow(x, n));
  }
}

alertPow(x, n);
