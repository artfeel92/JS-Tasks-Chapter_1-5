// Сумма введённых чисел
// Напишите функцию sumInput(), которая:

// 1) Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// 2) Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// 3) Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
  const userNumbersArr = [];

  while (true) {
    const userNumber = prompt('Enter your number:', '');

    if (!isFinite(userNumber) || userNumber === '' || userNumber === null) {
      break;
    }
    userNumbersArr.push(+userNumber);
  }

  let sum = 0;
  for (let number of userNumbersArr) {
    sum += number;
  }

  return sum;
}
console.log(sumInput());
