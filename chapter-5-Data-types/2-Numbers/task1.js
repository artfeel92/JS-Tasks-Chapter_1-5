// Сумма пользовательских чисел
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

const firstNumber = +prompt('Enter first number:', '');
const secondNumber = +prompt('Enter second number:', '');

function sum(firstNum, secondNum) {
  alert(`Sum of your numbers is ${firstNum + secondNum}`);
}

sum(firstNumber, secondNumber);
