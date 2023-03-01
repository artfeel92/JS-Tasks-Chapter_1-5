// Вывести простые числа
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.

const n = 10;

for (let i = 2; i <= n; i++) {
  let isNumberPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isNumberPrime = false;
      break;
    }
  }
  if (isNumberPrime) {
    alert(i);
  }
}
