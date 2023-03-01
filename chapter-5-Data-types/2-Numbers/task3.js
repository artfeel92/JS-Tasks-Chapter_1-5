// Ввод числового значения
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

function readNumber() {
  let userNumber;
  do {
    userNumber = prompt('Enter your number:', '');
    if (userNumber === '' || userNumber === null) {
      return null;
    }
  } while (!isFinite(userNumber));
  return Number(userNumber);
}
readNumber();
