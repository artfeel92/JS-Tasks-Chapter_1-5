// Создайте new Accumulator
// Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    const newValue = +prompt('Enter value:', '');
    this.value += newValue;
  };
}

const acc = new Accumulator(1);
acc.read();
acc.read();
console.log(acc.value);
